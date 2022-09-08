

const express = require('express');
require("./conection");

const app = express();

//import all controllers-------------------------------------------------------------
const customer_controller = require('./customer-controller');
const product_controller = require('./product-controller');
const order_controller = require('./order-controller');

//Server listening the req-----------------------------------
app.listen(8000, ()=>{
    console.log("Sever is now listening at port 8000");
})
app.use(express.json());

app.post("/insertCustomer",customer_controller.insert_customer_data )
 //-----------------get data------------------
 app.get("/fetchCustomer", customer_controller.fetch_customer_data)
  //----------------delete data-------------------------
  app.delete("/deleteCustomer/:_id", customer_controller.delete_customer_data)
  //--------------update-------------------------------
 app.put("/updateCustomer/:_id", customer_controller.update_customer_data)

 //------------------------------product--------------------------------

// -----------------insert new data-------------

app.post("/insertProduct",product_controller.insert_product_data)
//-----------------get data------------------

app.get("/fetchProduct", product_controller.fetch_product_data)
//--------------update-------------------------------
app.put("/updateProduct/:_id",product_controller.update_product_data)
//----------------delete data-------------------------
app.delete("/deleteProduct/:_id",product_controller.delete_product_data)

//---------------------------------------order------------------------------------------
// -----------------insert new data-------------


app.post("/insertOrder",order_controller.insert_order_data )
//-----------------get data------------------
app.get("/fetchOrder",order_controller.fetch_order_data)
//----------------delete data-------------------------
app.delete("/deleteOrder/:_id",order_controller.delete_order_data)
//--------------update-------------------------------
app.put("/updateOrder/:_id",order_controller.update_order_data)
