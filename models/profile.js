import mongoose from 'mongoose'

const Schema = mongoose.Schema

const expSchema = new Schema({
  text: String,
}, {
  timestamps: true
})

const profileSchema = new Schema({
  name: String,
  avatar: String,
  experiences: [expSchema],
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}