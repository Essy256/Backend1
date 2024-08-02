const express = require ('express')

const router = express.Router()
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

              
              

module.exports = router;