const {ApolloServer,gql} =require('apollo-server') 
const {typeDefs} =require('./typedefs')
const {resolvers} =require('./resolvers')
const express =require('express')


const app = express();



app.get("/", (req, res) => {
res.send("working")
});





  
const server = new ApolloServer({typeDefs:typeDefs,resolvers});
app.listen(3000,()=>{
    console.log("http -server working")
})

server.listen().then(({url})=>{console.log(`running in port ${url}`)});

