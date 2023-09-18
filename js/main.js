const canvas = document.querySelector("canvas");

const signaturePad = new SignaturePad(canvas);

const capture = () => {
  html2canvas(document.querySelector("#capture")).then(canvas => {
    const dataURL = canvas.toDataURL();
    let a = document.createElement("a");
    a.href = dataURL;
    a.download = 'test';
    a.click();
  });
}

const cl = () => {
  signaturePad.clear();
}
