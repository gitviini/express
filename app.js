const express = require('express')
const favicon = require('serve-favicon')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path') 

//database 
const {create_table, insertuser, selectuser, updateuser, deleteuser} = require('./database.js')

const PORT = 5000

create_table()

const app = express()
//middlewares
app.use(express.json())
app.use(express.urlencoded())
app.use(morgan('common'))
app.use(cors())

app.use(express.static('./static/'))

app.route('/login')
	.get((req,res)=>{
		res.sendFile(__dirname+'/views/login.html')
	})
	.post((req,res)=>{
		res.sendFile(__dirname+'/views/login.html')
			if(req.body){
				res.redirect('/')
			}
	})

app.route('/cadastro')
	.get((req,res)=>{
		res.sendFile(__dirname+'/views/cadastro.html')
	})
	.post((req,res)=>{
		res.sendFile(__dirname+'/views/cadastro.html')
			if (req.body){
				res.redirect('/login')
			}
	})

app.get('/',(req,res)=>{
	res.send('login feito')
})

app.listen(PORT,()=>{
	console.log(`running in port:${PORT}`)
})
