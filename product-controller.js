const product= require("./product")
//------------------------------product--------------------------------

// -----------------insert new data-------------

module.exports = {
    insert_product_data: async (req, resp) => {
    try{
    let data = new product(req.body);
    const result = await data.save();
    resp.send(result);
   
   }

catch(error)
{
    console.log("Error! please fix the bug first..")
}
},


//-----------------get data------------------
fetch_product_data: async (req, resp) => {
try{
    let data = await product.find();
    resp.send(data);
   
   }
catch(error)
{
    console.log("Error! please fix the bug first..")
}
},
 
//--------------update-------------------------------
update_product_data: async (req, resp) => {
  try{ 
     let data = await product.updateOne(
        req.params,
        {$set: req.body}
     );
     resp.send(data);
     
   }
   catch(error)
   {
       console.log("Error! please fix the bug first..")
   }
},

//----------------delete data-------------------------
delete_product_data: async (req, resp) => {
    try
    {
    let data = await product.deleteOne(req.params);
    resp.send(data);
    }
    catch(error)
    {
        console.log("Error! please fix the bug first..")
    }
}}
