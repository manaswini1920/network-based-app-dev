const express= require('express');
const router = express.Router();
const controller =require('../controllers/storyController.js');
// GET request // sends all stories to users
router.get('/',controller.index);

//GET new story html page
router.get('/new',controller.new);

//Post : create stories
router.post('/',controller.create);
//GET : get stories by id
router.get('/:id',controller.show);

//Get edit
router.get('/:id/edit',controller.edit);
//update
router.put('/:id',controller.update);

//delete
router.delete('/:id',controller.delete);
module.exports=router;