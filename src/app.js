const path = require("path")
const express = require("express");
const hbs = require("hbs")

const app = express()
const pathToPublicDir = path.join(__dirname,"../public");
const pathToPartials = path.join(__dirname,"../views/partials");

app.set('view engine','hbs')
// app.set('views',viewsPath) to set new dirctory to path of views eg templates
hbs.registerPartials(pathToPartials)


app.use(express.static(pathToPublicDir))


app.get('',(req,res)=>{
    res.render('index',{
        title:"My app",
        message:"Its Home Page"
    });    
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:"My app About"
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:"My app Help"
    })
})

// app.get('/help',(req,res)=>{
//     res.send("Help Page");
// })

// app.get('/about',(req,res)=>{
//     res.send("About Page");
// })

// app.get('/weather',(req,res)=>{
//     res.send("Weather Page");
// })

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:"Please provide address"
        })
    }
    res.send({
        location:req.query.address
    });
})

app.get('*',(req,res)=>{
    // res.send("My 404 Page")
    res.render('four_o_four',{
        title:"My app Help"
    })
})

app.listen(3000,()=>{
    console.log("Server Started on port 3000");
});
