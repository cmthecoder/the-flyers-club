import { Topic } from "../models/topic.js"

function index(req, res) {
  Topic.find({})
  .populate('owner')
  .then(topics => {
    // console.log('THIS IS AN EXPERIENCE', experiences)
    res.render('topics/index', {
      topics,
      title: "🛫 Club Topics",
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
      title: '🛫 THE FLYERS CLUB'
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
    req.body.owner = req.user.profile._id
    // console.log('THIS IS AFTER', req.body)
    topic.comments.push(req.body)
    console.log("THIS IS REQ.BODY", req.body)
    topic.save()
    .then(() => {
      res.redirect(`/topics/${topic._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect(`/topics/${topic._id}`)
    })
  })
}

function edit(req, res){
  Topic.findById(req.params.topicId)
  .then(topic => {
    console.log("LOOKING FOR THIS!!!", req.params.topicId)
    const comment = topic.comments.id(req.params.commentId)
    const isSelf = topic._id.equals(req.user.profile._id)
    res.render('topics/edit', {
      topic,
      title: "edit comment",
      isSelf,
      comment,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/topics')
  })
}

function update(req, res) {
  Topic.findById(req.params.topicId)
  .then(topic => {
    const comment = topic.comments.id(req.params.commentId)
    comment.content = req.body.content
    topic.save()
    .then(()=> {
      res.redirect(`/topics/${topic._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function deleteComment(req, res) {
  console.log('REQ.PARAMSID', req.params.id)
  console.log('TOPICID', req.params.topicId)
  Topic.findById(req.params.topicId)
  .then(topic => {
    console.log('LOOK HERE', topic)
    topic.comments.remove({_id: req.params.commentId})
    topic.save()
    .then(() => {
      res.redirect(`/topics/${topic._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect(`/topics/${topic._id}`)
    })
  })
}


export {
  index,
  create,
  show,
  createComment,
  deleteComment,
  edit,
  update,
}