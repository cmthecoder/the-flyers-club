import mongoose from 'mongoose'

const Schema = mongoose.Schema

const planeSchema = new Schema({
  aircraft: String,
  details: String,
  owner: { type: Schema.Types.ObjectId, ref: "Profile" }
}, {
  timestamps: true
})

const Plane = mongoose.model('Plane', planeSchema)

export {
  Plane
}