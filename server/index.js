const express = require('express')
const cors = require('cors')
const {MongoClient, ObjectId} = require('mongodb')
const jwt = require('jsonwebtoken');
const {expressjwt: exjwt} = require('express-jwt')
const jwt_decode = require('jwt-decode')

const app=express()
app.use(cors());
app.use(express.json());

secretkey = "abcd"
algorithm = "HS256"

const jwtmw = exjwt({
    secret: secretkey,
    algorithms:  [algorithm]
})

app.use(cors())
app.use(express.json())
const client =new MongoClient('mongodb+srv://Admin:Admin@cluster0.hzkrxcu.mongodb.net/?retryWrites=true&w=majority')
client.connect()
const db = client.db('counselling1')
const col = db.collection('register')
//col.insertOne({'student':"123"})

app.post('/register', (req, res)=>{
col.insertOne(req.body)
console.log(req.body)
res.send('Inserted successfully')
})

app.put('/users/:id', async (req,res)=>{ 
    const {id}= req.params 
    const {name, role, email, password}=req.body 
    const result= await col.updateOne({_id: new ObjectId(id)}, {$set:{name, role, email, password} }) 
    res.send('updated') 
})

app.delete('/users/:id', async(req,res)=>{
    const{id}=req.params
    const result=await col.deleteOne({_id: new ObjectId(id)})
    res.json({message: 'deleted successfully'})
});

app.post('/signin', async (req, res)=>{
    const {email, password } = req.body;
    console.log(email)
    const user = await col.findOne({email});
    //console.log(user.email, user.password, password)
    if(!user || !(password===user.password)){
        return res.status(401).json({ message: 'Invalid email or password'})
    }

    const token = jwt.sign( user, secretkey, { algorithm: algorithm, expiresIn: '1m'});

    res.json({ username: user.name, token: token });
});

app.post('/register', (req, res) => {
    col.insertOne(req.body)
        .then(() => {
            console.log(req.body);
            res.send("data inserted successfully");
        })
        .catch(err => {
            console.error(err);
            res.status(500).send("Internal Server Error");
        });
});

app.get('/retrieve', jwtmw , async (req, res) => {
    console.log(jwt_decode.jwtDecode(req.headers.authorization.substring (7)))
    try {
        const result = await col.find().toArray();
        console.log(result);
        res.send(result);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

app.get('/', (req,res)=>{
    res.send('<h1>Hello World</h1>')
})
app.get('/about', (req,res)=>{
    res.send('<h1>This is about page</h1>')
})
app.listen('8080', ()=>{
    console.log('Server Running')})