function diagnose() {
  const height = document.getElementById("height").value / 100;
  const weight = document.getElementById("weight").value;
  const resultDiv = document.getElementById("result");

  if (!height || !weight) {
    alert("身長と体重を入力してください");
    return;
  }

  // BMI計算
  const bmi = (weight / (height * height)).toFixed(1);
  let bmiResult = "";

  if (bmi < 18.5) {
    bmiResult = "やや痩せ型";
  } else if (bmi < 22) {
    bmiResult = "理想的で健康的✨";
  } else if (bmi < 24) {
    bmiResult = "標準";
  } else {
    bmiResult = "健康的に引き締めゾーン";
  }

  // 骨格スコア初期化
  const scores = {
    "ラブリー": 0,
    "カジュアル": 0,
    "ハイファッション": 0,
    "ロマンティック": 0,
    "クラシック": 0,
    "ドラマティック": 0,
    "ソフトクラシック": 0
  };

  // チェックされた項目を加点
  document.querySelectorAll("input[type=checkbox]:checked")
    .forEach(item => {
      scores[item.value]++;
    });

  // 最大スコアの骨格タイプを取得
  let bodyType = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  // K-popアイドル対応表
  const idols = {
    "ラブリー": ["BLACKPINK ロゼ", "LESSERAFIM チェウォン]()
