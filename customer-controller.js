
//-----------------------------Customer-------------------------------
const customer= require("./customer")

// -----------------------------Customer-data insert new data-------------------

module.exports = 
{
    insert_customer_data : async (req, resp) => {
    try
      { let data = new customer(req.body);
     const result = await data.save();
     resp.send(result);
      }

     catch(error)
     {
         console.log("Error! please fix the bug first..")
     }
 },
 
 //--------------------------------get data---------------------------------------------
 fetch_customer_data : async (req, resp) => {
     try
     {
     let data = await customer.find();
     resp.send(data);
     }
     catch(error)
     {
         console.log("Error! please fix the bug first..")
     }
 },
 
 //-----------------------------------delete data---------------------------
 delete_customer_data : async (req, resp) => {
     try{
     let data = await customer.deleteOne(req.params);
     resp.send(data);
     }
     catch(error)
     {
         console.log("Error! please fix the bug first..")
     }
 },
 
 update_customer_data : async (req, resp) => {
    try
    {
     console.log(req.params)
     let data = await customer.updateOne(
         req.params,
         {$set: req.body}
     );
     resp.send(data);
    }
     catch(error)
     {
         console.log("Error! please fix the bug first..")
     }
 } 
}