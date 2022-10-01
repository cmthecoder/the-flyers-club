import mongoose from 'mongoose'

const Schema = mongoose.Schema

const expSchema = new Schema({
  flightHrs: Number,
  endorsements: String,
}, {
  timestamps: true
})

const profileSchema = new Schema({
  name: String,
  avatar: String,
  exp: [expSchema],
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
