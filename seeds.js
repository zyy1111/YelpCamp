var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
        {
            name: "1",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXdWnR9-89O8zBbU7e4hCN4WofGhM64frKnw513dYKnF0Ogbrl",
            description: "111"
        },
        {
            name: "2",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLJmLSmUBMUoNsCJPApPied2MBic1Pv5ZOEnY_Euju2X_Q7a6n",
            description: "222"
        },
        {
            name: "3",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQH3wEhXgA_Ie5e2m3UJUuII8Vpzy6PMrJ2WHBiI6HRhDzO_cTl",
            description: "333"
        }
    ]

function seedDB() {
    Campground.remove({}, function(err){
        // if(err) {
        //     console.log(err);
        // }
        // console.log("removed campground!");
        // //Add new campgrounds  put inside call back function to guarantee the correct sequence
        // data.forEach(function(seed){
        //     Campground.create(seed, function(err, campground){
        //         if(err){
        //             console.log(err);
        //         } else {
        //             console.log("Added a campground");
        //             //Add comments
        //             Comment.create(
        //                 {
        //                     text: "This is wonderful! Love it!",
        //                     author: "Yiyun"
        //                 }, function(err, comment){
        //                     if(err){
        //                         console.log(err);
        //                     } else {
        //                         campground.comments.push(comment);
        //                         campground.save();
        //                         console.log("Created new comment");
        //                     }
        //             })
        //         }
        //     })
        // })
    })
}

module.exports = seedDB;
