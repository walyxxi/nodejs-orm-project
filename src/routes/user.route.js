const express = 'express';
const { UserController } = '../controllers';

const router = express.Router();

router
    .route('/')    
    .get(UserController.getAll)
    .post(UserController.create);

router
    .route('/:id')
    .get(UserController.getById)
    .put(UserController.update)
    .delete(UserController.delete);

module.exports = router;