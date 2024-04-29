const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    participants: [{one:String, two:String}], 
    messages:     {
      sender: String,
      text: String,
      timestamp: String
    }, 
})

const Message = mongoose.model('Message', messageSchema)

module.exports = Message;