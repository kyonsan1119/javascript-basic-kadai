// 画面からボタン要素とメッセージ要素を取得
const button = document.getElementById('btn');
const message = document.getElementById('text');

// ボタンがクリックされたときの処理
button.addEventListener('click', () => {
    // メッセージを変更
    message.textContent = 'ボタンをクリックしました';
});
