window.onload = Main;
 
function Main() {
  const hiddenData = document.getElementById("hiddenData");
  const stringArray = hiddenData.value.split(',');
  let dataArray = stringArray.map(x => { return Number(x); });
  let labels = [];
  if(hiddenData.value != "") {
    for(let i = 1; i <= dataArray.length; i++) {
      labels.push(i);
    }
  }
  else {
    dataArray = [];
    labels = [];
  }
  console.log(dataArray);  

  let ctx = document.getElementById("myChart");    // 描画領域のCanvasを取得
  let myChart = new Chart(ctx, {   // Chartオブジェクトの生成
    type: "line",
    data: {
      labels: labels,    // x軸のラベル
      datasets: [  // グラフごとにオブジェクトを定義する
        {
            label: "data1",
            data: dataArray,
            borderWidth: 2,    // 線の太さ
            borderColor: "rgba(0, 100, 0, 0.5)",    // 線の色
            fill: false   // 線の下の領域塗り潰しなし
        }
      ]
    },
    options: {
      responsive: true
    }
  });
}