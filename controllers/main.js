const Meal = require('../models/meal');
exports.getMainPage = (req, res) => {
    Meal.findOne()
        .then(m => {
            const idBox1 = ['m-1', 'm-2', 'm-3', 'm-4', 'm-5'];
            const idBox2 = ['m-6', 'm-7', 'm-8', 'm-9', 'm-10'];
            res.render('main/index', {
                box1: idBox1,
                box2: idBox2,
                mealBox1: m.box1,
                mealBox2: m.box2
            })
        })
        .catch(err => {
            console.log(err)
        })
}