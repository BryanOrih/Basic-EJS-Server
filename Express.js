const express = require("express")
const app = express()
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + "/EJS")

const pages = 
[
    { route: '/', title: 'Home', content: 'Welcome to the homepage!' },
    { route: '/about', title: 'About', content: 'Learn more about us.' },
    { route: '/contact', title: 'Contact', content: 'Get in touch with us.' }
];


app.get(pages[0].route, (req,res)=>{

    const ejsHomeContent ={
        title: pages[0].title,
        content: pages[0].content
    }
    res.render("home", ejsHomeContent)
})
app.get(pages[1].route, (req,res)=>{
    const ejsHomeContent ={
        title: pages[1].title,
        content: pages[1].content
    }
    res.render("about", ejsHomeContent)
})
app.get(pages[2].route, (req,res)=>{
    const ejsHomeContent ={
        title: pages[2].title,
        content: pages[2].content
    }
    res.render("contact", ejsHomeContent)
})

app.listen(port, ()=>{
    console.log(`It's working on http://localhost:${port}`)
})