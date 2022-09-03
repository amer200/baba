require('dotenv').config();
const Meal = require('../models/meal');

exports.getMainAdmin = (req, res) => {
    Meal.findOne()
        .then(m => {
            if (m) {
                res.render('admin/index', {
                    box1: m.box1,
                    box2: m.box2
                })
            } else {
                const box1 = ['اسم الوجبة', 'اسم الوجبة', 'اسم الوجبة', 'اسم الوجبة', 'اسم الوجبة'];
                const box2 = ['اسم الوجبة', 'اسم الوجبة', 'اسم الوجبة', 'اسم الوجبة', 'اسم الوجبة'];
                res.render('admin/index', {
                    box1: box1,
                    box2: box2
                })
            }
        })
        .catch(err => {
            console.log(err)
        })
}
exports.postMeal = (req, res) => {
    const box1 = req.body.box1;
    const box2 = req.body.box2;
    Meal.findOne()
        .then(m => {
            if (m) {
                m.box1 = box1;
                m.box2 = box2;
                return m.save();
            } else {
                const meal = new Meal({
                    box1: box1,
                    box2: box2
                })
                return meal.save();
            }
        })
        .then(resu => {
            res.redirect('/admin')
        })
        .catch(err => {
            console.log(err)
        })
}
exports.getLogIn = (req, res) => {
    res.render('admin/login', {
        message: false
    })
}
exports.postLogin = (req, res) => {
    const password = req.body.password;
    if (password == process.env.PASSWORD) {
        req.session.user = 'admin';
        res.redirect('/admin')
    } else {
        res.render('admin/login', {
            message: 'wrong password'
        })
    }
}
exports.logOut = (req, res) => {
    req.session.destroy()
    res.redirect('/admin')
}