var express = require('express');
var router = express.Router();
const Company = require("../models").Company;
const Order = require("../models").Order;
const Person = require("../models").Person;
const Product = require("../models").Product;
const Dimension = require("../models").Dimension;
const Hardware = require("../models").Hardware;
const Frame = require("../models").Frame;
const OrderProduct = require("../models").OrderProduct;

//Retrieve all orders
router.get('/', function(req, res, next) {
  Order.findAll({
    include: [
      {
        model: Person,
        as: 'orders'
      },
      {
        model: Company,
        as: 'companyOrders'
      },
      {
        model: Product,
        as: 'products',
        include: [
          {
            model: Dimension
          },
          {
            model: Hardware,
            as: 'hardware'
          }
        ]
      }
    ]
  }).then(orders => {
    console.log(orders);
    res.json(orders);
  });
});

//Create an order for testing purposes
// router.post('/', function(req, res, next) {
//   OrderProduct.create(req.body).then((res) => {
//   }).then(() => {
//     res.status(201).end();
//   });
// });

router.post('/', function(req, res, next) {
 console.log(req.body);
 const prods = req.body;
 prods.forEach(async prod => {
  let person;
  let order;
  let product;
  let dimensions;
  let frame;
  let hardware;
  const entryModels = [
    Order.create({
      type: prod.service,
      complete: false
    }), 
    Product.create({
      quantity: prod.details.quantity,
      type: prod.product
    }),
    Dimension.create({
      width: prod.details.width[0].int + prod.details.width[0].decimals,
      height: prod.details.height[0].int + prod.details.height[0].decimals,
      depth: prod.details.depth[0].int + prod.details.depth[0].decimals
    })
  ];
  if(prod.product !== "customGlass"){
    entryModels.push(
      Frame.create({
        type: prod.details.fType,
        color: prod.details.fColor
      })
    );  
  }
  if(prod.details.hardware != []){
    const allHardware = []
    await prod.details.hardware.forEach((hardware, i) => {
      allHardware.push({
        type: hardware.type,
        material: hardware.fromLoc,
        color: hardware.dist
      })
    });
    entryModels.push(
      Hardware.bulkCreate(allHardware)
    );  
  }
  const instances = await Promise.all(entryModels)
    .catch( err => {
      res.status(500).end();
      throw new Error("New OrderProduct creation: " + err);
    });
  
  [ order, product, dimensions, frame, hardware ] = instances;

  product.addHardware(hardware);
  product.setDimension(dimensions);
  product.addFrames(frame);
  order.addProducts(product);

 });
 res.status(201).end();
});

    


module.exports = router;