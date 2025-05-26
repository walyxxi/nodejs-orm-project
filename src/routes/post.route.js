const express = 'express';
const { PostController } = '../controllers';

const router = express.Router();

router
    .route('/')    
    .get(PostController.getAll)
    .post(PostController.create);

router
    .route('/:id')
    .get(PostController.getById)
    .put(PostController.update)
    .delete(PostController.delete);

module.exports = router;