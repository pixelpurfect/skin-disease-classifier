let model;

async function loadModel() {
  model = await tf.loadLayersModel('tfjs_model/model.json');
  console.log("Model loaded");
}

document.getElementById("upload").addEventListener("change", async (e) => {
  const file = e.target.files[0];
  const img = new Image();
  img.onload = async () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, 224, 224);
    let tensor = tf.browser.fromPixels(canvas).expandDims(0).div(255);
    let prediction = model.predict(tensor);
    let result = await prediction.data();
    document.getElementById("result").innerText = result[0] > 0.5 ? "Benign" : "Malignant";
  };
  img.src = URL.createObjectURL(file);
});

loadModel();
