const router=require('express').Router()
const Exercise=require('../models/exercise.model')

router.route('/').get((req,res)=>{
    Exercise.find()
    .then(exercises=>res.json(exercises))
    .catch((err)=>res.status(400).json('Error'+err))
})

router.route('/add').post((req,res)=>{
    const username=req.body.username
    const desc=req.body.desc
    const duration=Number(req.body.duration)
    // const date=Date.parse(req.body.date)

    const newExercise=new Exercise({
        username,desc,duration
    })

    newExercise.save()
    .then(()=>res.json('New exercise added'))
    .catch((err)=>res.status(400).json('Error:'+err))
})

router.route('/:id').get((req,res)=>{
    Exercise.findById(req.params.id)
    .then(exercises=>res.json(exercises))
    .catch((err)=>res.status(400).json('Error'+err))
})

router.route('/:id').delete((req,res)=>{
    Exercise.findByIdAndDelete(req.params.id)
    .then(()=>res.json('Exercise Deleted'))
    .catch((err)=>res.status(400).json('Error'+err))
})


module.exports=router