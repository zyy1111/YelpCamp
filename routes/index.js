var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

router.get("/", function(req, res){
    res.render("landing");
})

//AUTH ROUTES

//show register form
router.get("/register", function(req, res) {
    res.render("register");
})

//handle sign up logic
//cannot have the same username and password with samples already in database when register
router.post("/register", function(req, res) {
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            req.flash("error", err.message);
            res.render("register", {error: req.flash("error")});
        }
        passport.authenticate("local")(req, res, function(){
            req.flash("success", "Welcome!" + user.username);
            res.redirect("/campgrounds");
        })
    })
})

//show login form
router.get("/login", function(req, res) {
    res.render("login");
})

//handle login logic
//middleware   app.post("/login", middleware, callback)
router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
}), function(req, res) {
});

//logout route
router.get("/logout", function(req, res) {
    req.logout();
    req.flash("success", "Logged you out!");
    res.redirect("/campgrounds");
})


module.exports = router;