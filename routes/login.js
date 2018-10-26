'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  const from = req.query.from;
  if (from) {
    //ログインぺージ表示時に、どこからログインしようとしたかを保存期間10分としてCookieに保存
    res.cookie('loginFrom', from, { expires: new Date(Date.now() + 600000)});
  }
  res.render('login');
});

module.exports = router;
