import { Experience } from "../models/experience.js"

function index(req, res) {
  Experience.find({})
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

export {
  index,
}