import mongoose from 'mongoose'

const Schema = mongoose.Schema

const topicSchema = new Schema({
  text: String,
  owner: { type: Schema.Types.ObjectId, ref: "Profile" }
}, {
  timestamps: true
})

const Topic = mongoose.model('Topic', topicSchema)

export {
  Topic
}