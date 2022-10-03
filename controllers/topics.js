import { Topic } from "../models/topic.js"

function index(req, res) {
  Topic.find({})
  .populate('owner')
  .then(topics => {
    // console.log('THIS IS AN EXPERIENCE', experiences)
    res.render('topics/index', {
      topics,
      title: "🛫",
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function create(req, res) {
  // console.log('THIS IS A USER', req.user)
  req.body.owner = req.user.profile._id
  // console.log('BEFORE', req.body)
  Experience.create(req.body)
  .then(topic => {
    // console.log("AFTER", experience)
    res.redirect('/topics')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/topics')
  })
}

export {
  index,
  create,
}