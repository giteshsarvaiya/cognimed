const mongoose = require('mongoose');

const researchSchema = new mongoose.Schema({
    participants: [{one:String, two:String}], 
    messages:     {
      sender: String,
      text: String,
      timestamp: String
    },
})

const Research = mongoose.model('Research', researchSchema)

module.exports = Research;