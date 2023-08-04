// 画面からボタン要素とメッセージ要素を取得
const button = document.getElementById('btn');
const message = document.getElementById('text');

// ボタンがクリックされたときの処理
button.addEventListener('click', () => {
  // メッセージを変更
  // 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
  setTimeout(() => {
    message.textContent ='ボタンをクリックしました';
  }, 2000);
});
