var express = require('express');
var router = express.Router();
const Company = require("../models").Company;
const Order = require("../models").Order;
const Person = require("../models").Person;
const Product = require("../models").Product;
const Dimension = require("../models").Dimension;

const services = [
  {
    type: "Build new screens",
    desc: "Choose the color of your: frame, screen, hardware, etc.",
    imgSrc: "border-outer.svg",
    btn: "Build"
  },
  {
    type: "Build new windows",
    desc: "Choose the color of your: frame, screen, hardware, etc.",
    imgSrc: "border-all.svg",
    btn: "Build"
  },
  {
    type: "Restore old screens",
    desc: "Bring your house to life by repairing those old, dirty, torn screens.",
    imgSrc: "layers-fill.svg",
    btn: "Restore"
  },
  {
    type: "Restore old windows",
    desc: "Defeat the winter's cold air and revamp your old storm windows.",
    imgSrc: "layers-half.svg",
    btn: "Restore"
  },
  {
    type: "Custom Glass",
    desc: "Need glass? We can cut to size or shape depending on your needs.",
    imgSrc: "columns-gap.svg",
    btn: "Custom Glass"
  },
];

/* GET home page. */
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
          }
        ]
      }
    ]
  }).then(orders => {
    console.log(orders);
    res.json(orders);
  });
});


module.exports = router;
