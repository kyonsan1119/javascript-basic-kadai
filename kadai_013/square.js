// アロー関数を使って引数を二乗する関数を定義する
const squareNumber = (number) => {
  // 引数を二乗して計算し、結果を戻り値として返す
  return number * number;
};

// 戻り値をコンソールに出力する
const inputNumber = 10; // 二乗したい数値をここに入力
const squaredResult = squareNumber(inputNumber);
console.log(`入力された値の二乗は: ${squaredResult}`);
