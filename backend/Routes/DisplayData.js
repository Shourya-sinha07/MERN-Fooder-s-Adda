const express = require('express');
const router =express.Router()
 
router.post('/foodData',(req,res)=>{
    try {
        res.status(200).send({ foodItems: global.food_items, foodCategory: global.food_Category }) 
    } catch (error) {
        console.error(error.message);
        res.status(500).send("server error")
    }
})
module.exports = router;
