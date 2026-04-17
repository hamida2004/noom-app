// import * as ort from 'onnxruntime-web';
// import modelUrl from '../../assets/models/model.onnx';

// class OnnxService {
//   constructor() {
//     this.session = null;
//     this.inputName = 'float_input';
//   }

//   async loadModel() {
//     if (this.session) return;

//     // Load model from the imported URL
//     this.session = await ort.InferenceSession.create(modelUrl, {
//       executionProviders: ['wasm'],
//     });
//   }

//   async predict(featuresArray) {
//     if (!this.session) throw new Error('Model not loaded. Call loadModel() first.');

//     const inputTensor = new ort.Tensor(
//       'float32',
//       Float32Array.from(featuresArray),
//       [1, featuresArray.length]
//     );

//     const feeds = {};
//     feeds[this.inputName] = inputTensor;

//     const results = await this.session.run(feeds);
//     const outputName = Object.keys(results)[0];
//     return results[outputName].data;
//   }
// }

// export default new OnnxService();

class OnnxService {
  async loadModel() {
    console.warn("ONNX not supported in Expo Web. Using dummy model.");
  }

  async predict(featuresArray) {
    // Return random sleep stage (1,2,3)
    return [Math.floor(Math.random() * 3) + 1];
  }
}

export default new OnnxService();
