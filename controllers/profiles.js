import { Profile } from "../models/profile.js";

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render("profiles/index", {
      profiles,
      title: "🛫"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function show(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
    const isSelf = profile._id.equals(req.user.profile._id)
    res.render('profiles/show', {
      title: `🛫 ${profile.name}'s profile`,
      isSelf,
      profile,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  })
}

function createPlane(req, res) {
  Profile.findById(req.user.profile._id)
  .then(profile => {
    profile.planes.push(req.body)
    profile.save()
    .then(() => {
      res.redirect(`/profiles/${req.user.profile._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect(`/profiles/${req.user.profile._id}`)
    })
  })
}
function deletePlane(req, res) {
  Profile.findById(req.user.profile._id)
  .then(profile => {
    profile.planes.remove({_id: req.params.id})
    profile.save()
    .then(() => {
      res.redirect(`/profiles/${req.user.profile._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect(`/profiles/${req.user.profile._id}`)
    })
  })
}

function edit(req, res){
  console.log(req.params)
  Profile.findById(req.params.profileId)
  .then(profile => {
    const plane = profile.planes.id(req.params.planeId)
    const isSelf = profile._id.equals(req.user.profile._id)
    res.render('profiles/edit', {
      profile,
      title: "edit 🛫",
      isSelf,
      plane,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  })
}

function update(req, res) {
  Profile.findById(req.params.profileId)
  .then(profile => {
    const plane = profile.planes.id(req.params.planeId)
    plane.brand = req.body.brand
    plane.model = req.body.model
    plane.color = req.body.color
    profile.save()
    .then(()=> {
      res.redirect(`/profiles/${profile._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}


export{
  index,
  show,
  createPlane,
  deletePlane,
  edit,
  update,
}