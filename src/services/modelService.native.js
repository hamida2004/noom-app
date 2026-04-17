// import * as ort from 'onnxruntime-react-native';

// class OnnxService {
//   constructor() {
//     this.session = null;
//     this.inputName = "float_input";   // must match Python conversion name
//   }

//   async loadModel() {
//     if (this.session) return;

//     this.session = await ort.InferenceSession.create(
//       require('../models/model.onnx')
//     );
//   }

//   async predict(featuresArray) {

//     if (!this.session) {
//       throw new Error("Model not loaded. Call loadModel() first.");
//     }

//     const inputTensor = new ort.Tensor(
//       'float32',
//       Float32Array.from(featuresArray),
//       [1, 9]     // 9 features from your pipeline
//     );

//     const feeds = {};
//     feeds[this.inputName] = inputTensor;

//     const results = await this.session.run(feeds);

//     // get first output automatically
//     const outputName = Object.keys(results)[0];

//     return results[outputName].data;
//   }
// }

// export default new OnnxService();

import * as ort from "onnxruntime-react-native";

class OnnxService {
  constructor() {
    this.session = null;
    this.inputName = "float_input";
  }

  async loadModel() {
    if (this.session) return;
    this.session = await ort.InferenceSession.create(
      require("../models/model.onnx")
    );
  }

  async predict(featuresArray) {
    if (!this.session) throw new Error("Model not loaded");

    const inputTensor = new ort.Tensor(
      "float32",
      Float32Array.from(featuresArray),
      [1, featuresArray.length]
    );

    const feeds = {};
    feeds[this.inputName] = inputTensor;

    const results = await this.session.run(feeds);
    return results[Object.keys(results)[0]].data;
  }
}

export default new OnnxService();
