
const {categories,products,reviews} =require('../data.js')
// const getUser = async () =>{
// let arr=[]
//   const res=  await axios.get("https://jsonplaceholder.typicode.com/users")
// // console.log(res.data);
// return res.data;
// }



const resolvers ={

        Query:
        {
           getProducts:()=>{
                return products


           }
              ,
              getProduct:(_,{id})=>{
                return products.find(p=>p.id===id)
              }
                ,
                getCategories:()=>{
                    return categories
                    }
                    ,
                    getCategory:(_,{id})=>{
                        return categories.find(c=>c.id===id)
                    }
        },
        Product:{
            category:({cId},args,context)=>{
                return categories.find(c=>c.id===cId)
            },
            reviews:({id},args,context)=>{
                return reviews.filter(r=>r.productId===id)
            }
        },
        Category:{
            products:({id},args,context)=>{
                return products.filter(p=>p.cId===id)
            }


            
        }


}


module.exports ={resolvers}