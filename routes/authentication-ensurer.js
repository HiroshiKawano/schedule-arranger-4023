'use strict';

function ensure(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  // ログインしていなければリダイレクトして終了(next()が発行されない)
  //　アクセス元のURLをfromクエリとして渡す
  res.redirect('/login?from=' + req.originalUrl);
}

module.exports = ensure;
