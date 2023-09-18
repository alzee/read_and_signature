const canvas = document.querySelector("canvas");

const signaturePad = new SignaturePad(canvas);

const capture = () => {
  html2canvas(document.querySelector("#capture")).then(canvas => {
    const dataURL = canvas.toDataURL();
    let a = document.createElement("a");
    a.href = dataURL;
    a.download = fmtDate(new Date(), 'YYMMDDhhmmss');
    a.click();
  });

  cl();
}

const cl = () => {
  signaturePad.clear();
}

function fmtDate(time,format='YY-MM-DD hh:mm:ss'){
  var date = new Date(time);

  var year = date.getFullYear(),
    month = date.getMonth()+1,
    day = date.getDate(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds();
  var preArr = Array.apply(null,Array(10)).map(function(elem, index) {
    return '0'+index;
  });

  var newTime = format.replace(/YY/g,year)
  .replace(/MM/g,preArr[month]||month)
  .replace(/DD/g,preArr[day]||day)
  .replace(/hh/g,preArr[hour]||hour)
  .replace(/mm/g,preArr[min]||min)
  .replace(/ss/g,preArr[sec]||sec);

  return newTime;			
}
