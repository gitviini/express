const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const favicon = require('serve-favicon')
const path = require('path') 

//database 
//const {create_table, insertuser, selectuser, updateuser, deleteuser} = require('./database.js')

const PORT = 5000


const app = express()
//middlewares
app.use(express.json())
app.use(express.urlencoded())
app.use(morgan('common'))
app.use(cors())
app.use(favicon(path.join(__dirname,'static','touro.svg')))
app.use(express.static('./static/'))

app.route('/login')
	.get((req,res)=>{
		res.sendFile(__dirname+'/views/login.html')
	})
	.post((req,res)=>{
		console.log(req.body)
		res.redirect('/')
	})

app.route('/signup')
	.get((req,res)=>{
		res.sendFile(__dirname+'/views/cadastro.html')
	})
	.post((req,res)=>{
		console.log(req.body)
		res.redirect('/login')
	})

app.route('/')
	.get((req,res)=>{
		res.sendFile(__dirname+'/views/home.html')
	})

app.listen(PORT,()=>{
	console.log(`running in port:${PORT}`)
})
