const order= require("./order")
//---------------------------------------order------------------------------------------
// -------------------------------insert new data-------------

module.exports =
{
    insert_order_data :async (req, resp) => {

    try
    {
    let data = new order(req.body);
    console.log(req.body)
    const result = await data.save();
    resp.send(result);
    }
    catch(error)
    {
        console.log("Error! please fix the bug first..")
    }
},

//-----------------get data---------------
fetch_order_data: async (req, resp) => {
    try
    {
    let data = await order.find();
    resp.send(data);
    }
    catch(error)
    {
        console.log("Error! please fix the bug first..")
    }
},

//----------------delete data-------------------------
delete_order_data: async (req, resp) => {
   try
    {
     let data = await order.deleteOne(req.params);
    resp.send(data);
   }
   catch(error)
   {
       console.log("Error! please fix the bug first..")
   }
},

//--------------update-------------------------------
update_order_data:async (req, resp) => {
try
    { console.log(req.params)
    let data = await order.updateOne(
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