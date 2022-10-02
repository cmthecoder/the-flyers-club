import { Experience } from "../models/experience.js"

function index(req, res) {
  Experience.find({})
  .populate('owner')
  .then(experiences => {
    res.render('experiences/index', {
      experiences,
      title: "🛫"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function create(req, res) {
  Experience.create(req.body)
  .then(experience => {
    res.redirect('/experiences')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/experiences')
  })
}

export {
  index,
  create,
}