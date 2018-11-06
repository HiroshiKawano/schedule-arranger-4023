# JQuery+Express+SQL+Bootstrap:脆弱性対策済み
<p> SQLインジェクション　→　sequelizeでDB操作</p>
<p> ディレクトリ・トラバーサル　→　ExpressのRouterオブジェクトを介してルーティング </p>
<p> XSS →　pugテンプレートを使用してHTMLを描画　</p>
<p> HTTPヘッダインジェクション　→　Cookieの内容を直接使用しない、リダイレクト機能を用意しない </p>
<p> クリックジャッキング　→　Express標準設定　レスポンスヘッダ（X-Frame-Options:SAMEORIGIN）</p>
<p> CSRF　→　csurfミドルウェアをインストール </p>
<img width="599" alt="spring" src="https://user-images.githubusercontent.com/39044771/48022162-c6f66c00-e17d-11e8-8681-c13f489f3406.png">
