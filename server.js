import express,{json} from 'express';
import guestrouter from './guestrouter.js';
import productrouter from './productrouter.js';


let app = express()

app.get('/', (request, response) => {
    return response.send('HII ');
  });
  

app.get("/kyaboltatu",(req,res)=>{
    return res.send("Lai bhari")
})


app.get('/login',(req,res)=>{
  let nme = req.query.name
  let pass = req.query.password

  if(nme=="iet" && pass=='vaibhav@123')
  {
    res.send(`welcome ${nme}`)
  }
  else{
    res.send("wrong")
  }
})

  
app.listen(5000, () => {
    console.log('App is listening on port 5000');
  });

app.use(json())
  app.use('/atithi',guestrouter)
  app.use('/product',productrouter)



  app.set('Views','/Views')
  app.set('view engine','hbs')

  app.get('/ajax',(req,res)=>{
    res.render('textview')
  })

  app.get('/message',(req,res)=>{
    res.send({message:"Hello Public",sender:"Vaibhav"})
  })

  app.post('/square',(req,res)=>{
    let a = req.body.num
    let sqr = a * a
    res.send({sqr:sqr})
  })