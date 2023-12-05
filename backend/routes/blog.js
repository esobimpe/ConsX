import { Router } from 'express';
import { createBlog, getBlogs, getBlog, updateBlog, deleteBlog } from '../controllers/blog.js';

const router = Router();

router.get('/', getBlogs);
router.get('/:id', getBlog);
router.post('/', createBlog);
router.patch('/:id', updateBlog);
router.delete('/:id', deleteBlog);

export default router;