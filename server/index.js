const express = require('express')
const app = express()
const mongodb = require('mongodb')

const{
    MongoClient
} = mongodb;

async function main() {
    const client = await MongoClient.connect("mongodb://localhost:27017");
    const db = client.db("sample_airbnb")
    const docs = await db.collection("airbnb").find({
        $nor: [{
            _id:""
        }]
    }).toArray();
      
    console.log(docs.map(it=> it._id));

    client.close();
}


main()

const users=[
    {
        id:1,
        name: 'patiphan',
        email:'adfas@gmail.com'
    }
]

app.get('/api/users',(req,res)=>{
    res.json(users)
})

app.listen(3003,()=>{
    console.log("running on port 3003");
});
