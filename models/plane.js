import mongoose from 'mongoose'

const Schema = mongoose.Schema

const tacoSchema = new Schema({
  aircraft: String,
  details: String,
  owner: { type: Schema.Types.ObjectId, ref: "Profile" }
}, {
  timestamps: true
})

const Taco = mongoose.model('Plane', planeSchema)

export {
  Plane
}