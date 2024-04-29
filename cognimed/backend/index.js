const express = require('express');
const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
const cors =  require('cors')
require("dotenv").config();
const app = express()
const  Chat  = require('./model/chats.mongoose');
const  Message  = require('./model/messages.model');
const  ResearchTopic  = require('./model/researchtopic.mongoose');
const  Research  = require('./model/research.model');
const  User  = require('./model/user.mongoose');
const port = 3001


const connectToDB = () => {
  mongoose
    .connect(`${process.env.MONGODB_URL}cognimed`,{  useNewUrlParser: true,
          useUnifiedTopology: true})
    .then(() => console.log("MONGODB CONNECTED..."))
    .catch((err) => console.log(err));
};
connectToDB();

app.use(cors())

app.get('/messages', async (req, res) => {
  
  const data = await Message.find({})

  // for (let i=0; (i<length); i++){
    // console.log(data[i]._id.toString())
    // const inter = await Message.find({chatId: data[i]._id.toString()})
  //   if(data[i].length){
  //   chatHead.push(data[i]);}
  // }
  
  res.status(200).json(data);
  
})

app.get('/messages/:id', async(req, res)=>{

  const chatId = req.params.id;
  const objectId = new ObjectId(chatId);
  const data = await Message.findOne({_id: objectId});
  if(data)
  {
    res.status(200).json(data);
  } else{
  console.log(data.length)
  if(!data.length){
    const userId = req.params.id;
    console.log(123)
  }
  }

})

app.get('/research', async (req, res) => {
  
  const data = await Research.find({})
  res.status(200).json(data);
  
})

app.get('/research/:id', async(req, res)=>{
  const researchId = req.params.id;
  const objectId = new ObjectId(researchId);
  console.log(researchId)
  const data = await Research.findOne({_id: objectId});
  console.log(data)
  res.status(200).json(data);

})

app.get('/search/:id', async(req,res)=>{
  try {
    const searchString = req.params.id; // Substring to search for
  
    // Perform the search using a regular expression
    const result = await User.find({ username: { $regex: searchString, $options: 'i' } });
  
    res.json(result);
  } catch (error) {
    console.error('Error searching in database:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})