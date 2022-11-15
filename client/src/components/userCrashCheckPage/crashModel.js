import * as tf from '@tensorflow/tfjs';

const url = {
    model: 'TFJS/model.json'
}
// eslint-disable-next-line import/no-anonymous-default-export
export default async (data) => {
    const model = await tf.loadLayersModel(url.model);
    // console.log(data);
    const tensorData = tf.tensor1d([...data]);
    const dataTensorReshaped = tensorData.reshape([1, 11, 1]);

    const mean = dataTensorReshaped.mean();
    const dataTensorNormalized = dataTensorReshaped.sub(mean).div(dataTensorReshaped.max().sub(dataTensorReshaped.min()));

    // const {mean, variance} = tf.moments(dataTensorReshaped, 0);
    //
    // const dataTensorNormalized = dataTensorReshaped.sub(mean).div(variance);
    const prediction = model.predict(dataTensorNormalized);
    const predictionData = await prediction.data();
    return predictionData[0];
}
