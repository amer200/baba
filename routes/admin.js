const express = require('express');
const route = express.Router();
const adminController = require('../controllers/admin');
const auth = require('../controllers/auth');
route.get('/', auth.isAdmin, adminController.getMainAdmin);
route.post('/post-meal', auth.isAdmin, adminController.postMeal);
route.get('/login', adminController.getLogIn);
route.post('/login', adminController.postLogin);
route.get('/logout', auth.isAdmin, adminController.logOut);

module.exports = route;