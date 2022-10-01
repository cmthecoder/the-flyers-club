import mongoose from 'mongoose'

const Schema = mongoose.Schema

const planeSchema = new Schema({
  text: String,
}, {
  timestamps: true
})

const profileSchema = new Schema({
  name: String,
  avatar: String,
  planes: [planeSchema],
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}