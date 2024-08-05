const express = require ('express')

const router = express.Router()
const Posts = require ('./postSchema')
                  //CRUD
// GET METHOD (all posts)
router.get('/posts',(req,res)=>{

    res.json(
        {msg:'GET all post'}

    )

})
router.get('/posts/:id',(req,res)=>{
    res.json(
        {msg:'GET a specific post'}
    )
})
router.post('/posts',async(req,res)=>{
    const post = new Posts({
        postTitle:req.body.postTitle,
        postTitle:req.body.postNumber,
        postTitle:req.body.postContent
    })
    try{
        const savedpost = await post.save()
        res.json(savedpost)
    }
    catch (err){
    res.json({msg:err})

        }})
    





              
              

module.exports = router;