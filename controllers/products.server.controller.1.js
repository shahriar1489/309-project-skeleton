var mongoose = require('mongoose');
var Product = require('./../models/Product.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');

module.exports.list = function(req, res) {
  Product.find(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      console.log("api called");

      res.status(200).send(data);
    }
  });
};

module.exports.create = function(req, res) {
  var product = new Product(req.body);
  Product.user = req.user;
  Product.save(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports.read = function(req, res) {
  res.json(req.Product);
};


exports.delete = function(req, res) {
	var Product = req.Product;
	Product.remove(function(err) {
		if (err) {
			return res.status(400).send();
		} else {
			res.json(Product);
		}
	});
};


module.exports.update = function(req, res) {
  var Product = req.Product;

  	Product = _.extend(Product, req.body);

  	Product.save(function(err) {
  		if (err) {
  			return res.status(400).send();
  		} else {
  			res.json(Product);
  		}
  	});
};

exports.ProductByID = function(req, res, next, id) {
	Product.findById(id).populate('user', 'email').exec(function(err, Product) {
		if (err) return next(err);
		if (!Product) return next(new Error('Failed to load Product ' + id));
		req.Product = Product;
		next();
	});
};
