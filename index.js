'use strict';

//Node.jsにおけるhttpのモジュールの読み込み（https://nodejs.org/docs/v16.14.2/api/http.html）
const http = require('http');

//httpモジュールの機能で、サーバを作成していく
/* 
    サーバには、リクエストを表すオブジェクトの引数reqと、レスポンスを表すオブジェクトの引数resを受け取る無名関数を渡す
    この無名関数は、サーバにリクエストがあった際に呼び出される
 */
const server = http.createServer((req, res) => {

    /*無名関数の中では、リクエストが来た際の挙動を実装していく*/

    /* 参考URL https://nodejs.org/docs/v16.14.2/api/http.html#http_class_http_serverresponse */

    //ステータスコード200と共に、レスポンスヘッダを設定
    res.writeHead(200, {
        //text/plain...コンテンツの内容が通常のテキスト形式であるという情報
        //charset=utf-8...文字コードはUTF-8であるという情報
        'Content-Type': 'text/plain; charset=utf-8'
    });

    //res.writeでレスポンスの内容を設定
    /* ここではリクエストヘッダの user-agent の中身を、レスポンスの内容として書き出す */
    res.write(req.headers['user-agent']);

    //レスポンスの書き出し終了
    res.end();
});

const port = 8000;

//HTTPが起動するポートを宣言してサーバを起動し、起動した際に実行する関数を渡す
//listen 関数...HTTP サーバを起動する関数（聞き耳を立てて散るようなので、listen）
server.listen(port, () => {
    console.log(`Listening on ${port}`);
});