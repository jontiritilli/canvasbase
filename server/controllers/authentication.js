const jwt = require('jst-simple');
const User = require('../models/user');
const { secret } = require('../auth');

function generateToken(user){
  const ts = new Date().getTime();

  return jwt.encode({
    uid: user.Id,
    ts: ts
  }, secret);
}