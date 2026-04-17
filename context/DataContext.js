import React, { createContext, useEffect, useState } from 'react';
import { ref, onValue, get } from 'firebase/database';
import { realtimeDB } from '../firebase/config';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [sensorData, setSensorData] = useState('INITIAL_STATE');
  const [connectionStatus, setConnectionStatus] = useState('Connecting...');

  useEffect(() => {
    console.log('DataProvider mounted - starting Firebase connection');
    
    // Test root connection first
    const rootRef = ref(realtimeDB);
    console.log('Attempting root connection to:', rootRef.toString());

    get(rootRef).then((snapshot) => {
      console.log('Root connection successful!');
      setConnectionStatus('Root connection OK');
      
      // Now try bracelet/data path
      const dataRef = ref(realtimeDB, 'bracelet/data');
      console.log('Now listening to:', dataRef.toString());

      const unsubscribe = onValue(dataRef, (snapshot) => {
        console.log('onValue triggered!', {
          exists: snapshot.exists(),
          value: snapshot.val()
        });
        
        if (snapshot.exists()) {
          setSensorData(snapshot.val());
          setConnectionStatus('Data received');
        } else {
          setSensorData(null);
          setConnectionStatus('No data at path');
        }
      }, (error) => {
        console.error('Listener error:', error);
        setConnectionStatus(`Error: ${error.code}`);
      });

      return () => {
        console.log('Cleaning up listener');
        unsubscribe();
      };
    }).catch((error) => {
      console.error('Root connection failed:', error);
      setConnectionStatus(`Root failed: ${error.code}`);
    });
  }, []);

  console.log('DataProvider render:', { connectionStatus, sensorData });

  return (
    <DataContext.Provider value={{ 
      sensorData,
      connectionStatus // Expose for debugging
    }}>
      {children}
    </DataContext.Provider>
  );
};