const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    participant1: String, 
    participant2: String 

  });

  const Chat = mongoose.model('Chat', chatSchema);

  module.exports = Chat;