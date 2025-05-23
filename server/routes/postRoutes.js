const {Router}=require('express')

const {createPost,getCatPosts,getPost,getPosts,getUserPosts,editPost,deletePost}=require('../controllers/postControllers')
const authMiddleware = require('../middleware/authMiddleware')

const router=Router()

router.post('/',authMiddleware,createPost)
router.get('/',getPosts)
router.get('/:id',getPost)
router.get('/users/:id',getUserPosts)
router.get('/categories/:category',getCatPosts)
router.patch('/:id',authMiddleware, editPost)
router.delete('/:id',authMiddleware, deletePost)


module.exports=router