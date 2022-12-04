const express = require('express')
const {join} = require("path")
const {readdirSync,lstatSync, fstat} = require("fs")
const app = express()
const port = 3000
var dirs = {
    css: {
        main: join(__dirname, "/pages/css")
    },
    pages: {
        error: join(__dirname,"./pages/html/404.html"),
        seasons: {
            Autunno: join(__dirname,"./pages/html/Autunno.html"),
            Inverno: join(__dirname,"./pages/html/Inverno.html"),
            Primavera: join(__dirname,"./pages/html/Primavera.html"),
            Estate: join(__dirname,"./pages/html/Estate.html"),
        }
    }
}

app.get('/', (req, res) => {
    res.sendFile( join(__dirname,"./pages/html/home.html") )
})
//Seasons
app.get('/Autunno.html', (req,res,next)=>res.sendFile( dirs.pages.seasons.Autunno ))
app.get('/Inverno.html', (req,res,next)=>res.sendFile( dirs.pages.seasons.Inverno ))
app.get('/Primavera.html', (req,res,next)=>res.sendFile( dirs.pages.seasons.Primavera ))
app.get('/Estate.html', (req,res,next)=>res.sendFile( dirs.pages.seasons.Estate ))

//css

readdirSync(dirs.css.main).filter(x=>lstatSync(join(dirs.css.main,x)).isFile).forEach(e=>{
    app.get('/css/'+e,(req,res,next)=>{res.sendFile(join(dirs.css.main,e))})
})

app.listen(port, () => {
    console.log(`Example app listening on port `+port)
})