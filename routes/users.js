const express = require('express');
const router = express.Router();

//Models
const Person = require("../models").Person;
const Phone = require("../models").Phone;
const Email = require("../models").Email;
const Address = require("../models").Address;
const Company = require("../models").Company;
const Order = require("../models").Order;
const Product = require("../models").Product;
const Dimension = require("../models").Dimension;
const Frame = require("../models").Frame;
const Spline = require("../models").Spline;
const Hardware = require("../models").Hardware;
const Location = require("../models").Location;

const dimAttr = ['width', 'height', 'depth'];


//Get All People with their relevant info and orders
router.get('/', function(req, res, next) {
  Person.findAll({
    attributes: { 
      exclude: [
        'createdAt',
        'updatedAt'  
      ] 
    },
    include: [
      {
        model: Phone,
        as: 'phone',
        attributes: { 
          exclude: [
            'createdAt',
            'updatedAt'  
          ] 
        },
      },
      {
        model: Email,
        as: 'email',
        attributes: { 
          exclude: [
            'createdAt',
            'updatedAt'  
          ] 
        },
      },
      {
        model: Address,
        as: 'address',
        attributes: { 
          exclude: [
            'createdAt',
            'updatedAt'  
          ] 
        },
      },
      {
        model: Company,
        as:'employee',
        through: {
          attributes: []
        },
        attributes: { 
          exclude: [
            'createdAt',
            'updatedAt'  
          ] 
        },
      },
      {
        model: Order,
        as: 'orders',
        include: [
          {
            model: Product,
            as: 'products',
            attributes: ['type', 'comments'],
            through: {
              attributes: []
            },
            include: [
              {
                model: Dimension,
                attributes: dimAttr
              },
              {
                model: Frame,
                as: 'frames',
                attributes: ['type', 'material', 'color', 'mitre'],
                include: [
                  {
                    model: Dimension,
                    attributes: dimAttr
                  },
                  {
                    model: Location
                  }
                ]
              },
              {
                model: Spline,
                attributes: ['type', 'material', 'color'],
                include: [
                  {
                    model: Dimension,
                    attributes: dimAttr
                  }
                ]
              },
              {
                model: Hardware,
                attributes: ['type', 'material', 'color'],
                as: 'hardware',
                include: [
                  {
                    model: Dimension,
                    attributes: dimAttr
                  },
                  {
                    model: Location
                  }
                ]
              }
            ]
          }
        ],
        attributes: { 
          exclude: [
            'createdAt',
            'updatedAt'  
          ] 
        },
      }
    ]
  }).then(person => {
    res.json(person);
  });
});

// Get all companies with relevant info and orders
router.get('/company', function(req, res, next) {
  Company.findAll({
    include: [
      {
        model: Phone,
        as:'companyPhone'
      },
      {
        model: Email,
        as: 'companyEmail'
      },
      {
        model: Person,
        as:'employees',
        through: {
          attributes: []
        }
      },
      {
        model: Order,
        as: 'companyOrders'
      }
    ]
  }).then(person => {
    res.json(person);
  });
});

// Get all orders
router.get('/orders', function(req, res, next) {
  Order.findAll({
    include: [
      {
        model: Product,
        as:'products',
        include: [
          {
            model: Frame,
            as: 'frames'
          },
          {
            model: Dimension
          }
        ]
      },
      {
        model: Person,
        as: 'orders'
      },
      {
        model: Company,
        as: 'companyOrders'
      }
    ]
  }).then(orders => {
    res.json(orders);
  });
});

//Create new order with product and specs
router.post('/order',  async function(req, res, next) {
  let order;
  let person;
  let product;
  let frame;
  let spline;
  let hardware;
  let dimension;
  console.log(req.body[1]);
  const instances = await Promise.all([
    Order.create(req.body[0]), 
    Product.create(req.body[1]),
    Dimension.create(req.body[2])
  ]);
  
  [ order, product, dimension ] = instances;

  
  order.addProducts(product);
 // product.addDimension(dimension);

   res.redirect("/");
});

//Create new person
router.post('/', function(req, res, next) {
  Person.create(req.body).then(function(person) {
    res.redirect("/");
  });
});

//Create new phone 
router.post('/phone', function(req, res, next) {
  Phone.create(req.body).then(function(phone) {
    res.redirect("/");
  });
});

//Create new email
router.post('/email', function(req, res, next) {
  Email.create(req.body).then(function(email) {
    res.redirect("/");
  });
});

//Create new address
router.post('/address', function(req, res, next) {
  Address.create(req.body).then(function(address) {
    res.redirect("/");
  });
});


//Create new company with current person
router.post('/company/:id',  async function(req, res, next) {
  let company;
  let person;
  const companyInstance = await Promise.all([Company.create(req.body), Person.findByPk(req.params.id)]);
  
  [ company, person ] = companyInstance;

  company.addEmployees(person);

    res.redirect("/");
});


module.exports = router;
