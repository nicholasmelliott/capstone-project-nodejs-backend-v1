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
 const prods = req.body;
 prods.forEach(async prod => {
  const widthInt = prod.details.width[0].int ? parseInt(prod.details.width[0].int) : "";
  const widthDec = prod.details.width[0].Dec ? parseFloat(prod.details.width[0].decimals): "";
  const heightInt = prod.details.height[0].int ? parseInt(prod.details.height[0].int) : "";
  const heightDec = prod.details.height[0].decimals ? parseFloat(prod.details.height[0].decimals) : "";
  const depthInt = prod.details.depth[0].int || prod.details.depth[0].decimals ? parseInt(prod.details.depth[0].int) : ""
  const depthDec = prod.details.depth[0].decimals ? parseFloat(prod.details.depth[0].decimals) : "";
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
      type: prod.product,
      service: prod.service
    }),
    Dimension.create({
      width: widthInt + widthDec,
      height: heightInt + heightDec,
      depth: depthInt + depthDec
    })
  ];
  if(prod.product !== "Glass"){
    entryModels.push(
      Frame.create({
        type: prod.details.fType,
        color: prod.details.fColor
      })
    ); 
    
    if(prod.details.hardware[0].type != '' && prod.details.hardware[0].fromLoc != '' && prod.details.hardware[0].dist != ''){
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