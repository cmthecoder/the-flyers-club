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
  Topic.create(req.body)
  .then(topic => {
    // console.log("AFTER", experience)
    res.redirect('/topics')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/topics')
  })
}

function show(req,res) {
  Topic.findById(req.params.id)
  .populate('owner')
  .then(topic => {
    console.log('THIS A TOPIC', topic)
    res.render('topics/show', {
      topic,
      title: '🛫'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/topics')
  })
}

function createComment(req, res){
  // console.log("THIS IS BEFORE", req.body)
  Topic.findById(req.params.id)
  .then(topic => {
    // console.log('THIS IS AFTER', req.body)
    topic.comments.push(req.body)
    console.log("THIS IS REQ.BODY", req.body)
    topic.save()
    .then(() => {
      res.redirect(`/topics/${topic._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function deleteComment(req, res) {
  console.log('delete comment')
}

export {
  index,
  create,
  show,
  createComment,
  deleteComment,
}