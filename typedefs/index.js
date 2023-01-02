const {gql} =require('apollo-server');



const typeDefs= gql`


type review
        {
            id:ID!,
            date:String!,
            comment:String!,
            title:String!,
            rating:Int!,
            product:Product
        }

        type Product {
                id:ID!,
                name:String!,
                description:String!,
                quantity:Int,
                price:Float,
                category:Category
                reviews:[review]


        }   
       

        type Category {
                id:ID!,
                name:String!,
                products:[Product!]!
        }




        type Query
        {
            getProducts:[Product!]!,

            getProduct(id:ID!):Product
            getCategories:[Category!]!
            getCategory(id:ID!):Category
           
          

        }

`

module.exports={typeDefs};