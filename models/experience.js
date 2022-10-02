import mongoose from 'mongoose'

const Schema = mongoose.Schema

const experienceSchema = new Schema({
  flightHrs: Number,
  endorsements: String,
  owner: { type: Schema.Types.ObjectId, ref: "Profile" }
}, {
  timestamps: true
})

const Experience = mongoose.model('Experience', experienceSchema)

export {
  Experience
}