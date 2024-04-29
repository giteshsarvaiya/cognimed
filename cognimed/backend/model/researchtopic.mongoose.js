const mongoose = require("mongoose");

const researchTopicSchema = new mongoose.Schema({
    participant_topic: [{
        participant: String,
        topic: String,
}],
  });

  const ResearchTopic = mongoose.model('researchTopic', researchTopicSchema)

  module.exports = ResearchTopic