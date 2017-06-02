var post = require("../../models/blogpostModel.js");

var newPost = function(req, res){
    new post({
        title: req.body.title,
        post: req.body.post
    }).save(function(err){
        if(err){
            console.log(err);
        }else{
            res.redirect("/index");
        }
    });
}