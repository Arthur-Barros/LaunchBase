const express = require("express");
const nunjucks = require("nunjucks");

const server =  express();
const videos = require("./data");

server.use(express.static("public"));

server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
});


// Rotas
server.get("/", function(req,res){

    const about = {
        avatar_url: "https://avatars3.githubusercontent.com/u/51407751?s=460&u=ffe2181419d1dd1cb5aaa369391a820a017c430b&v=4",
        name: "Arthur Barros",
        rote: "Estudante Rocketseat",
        description: 'Programador full-stack, focado em aprender os melhores conteúdos em programação. Estudante do <a href="https://www.ifms.edu.br/" target="_blanck">Instituto Federal</a>',
        links: [
           { name: "Github", url: "https://github.com/Arthur-Barros"},
           { name: "Facebook", url: "https://www.facebook.com/arthur.barros.54922"},
           { name: "Linkedin", url: "https://www.linkedin.com/in/arthur-barros-/"},
        ]
    }

    return res.render("about", { about: about });
});


server.get("/video", function (req, res) {
    const id = req.query.id;

    const video = videos.find(function(video){
        return video.id == id;
    });

    if(!video){
        return res.send("Video not found!");
    }

    return  res.render("video", { item: video });
});

server.get("/portfolio", function(req,res){

    return res.render("portfolio", { items: videos});
});

// Servidor
server.listen(5000, function(){
    console.log("server is running");
});