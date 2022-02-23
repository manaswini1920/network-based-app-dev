const model = require('../models/story');
// GET request // sends all stories to users
exports.index =(req,res)=>{
    //res.send('send stories');
    let stories =model.find();
    res.render('./story/index',{stories});
};

//GET new story html page
exports.new=(req,res)=>{
res.render('./story/new',{});
};

//Post : create stories
exports.create =(req,res)=>{
    let body=req.body;
    model.save(body);
    res.redirect('/stories');
};


//GET : get stories by id
exports.show=(req,res,next)=>{
//res.send('here is the story '+req.params.id);
        let id =req.params.id;
    let story = model.findById(id);
        if(story){
            res.render('./story/show',{story});
        }else{
            let err =new Error('The server cannot locate '+req.url);
            res.status=404;
            next(err);
}};


//update : 2 steps - edit and update
exports.edit=(req,res,next)=>{
    let id =req.params.id;
    let story = model.findById(id);
        if(story){
            res.render('./story/edit',{story});
        }else{
            let err =new Error('The server cannot locate '+req.url);
            res.status=404;
            next(err);}
};

exports.update=(req,res,next)=>{
    let body = req.body;
    let id =req.params.id;
    if(model.updateById(id,body)){
        res.redirect('/stories/'+id);
    }
   else{
    let err =new Error('The server cannot locate '+req.url);
    res.status=404;
    next(err);
   }
    };
    
exports.delete=(req,res,next)=>{
    let id =req.params.id;
    if(model.deleteById(id)){
        res.redirect('/stories');
    }
    else{
        let err =new Error('The server cannot locate '+req.url);
    res.status=404;
    next(err);
    }
    
};


