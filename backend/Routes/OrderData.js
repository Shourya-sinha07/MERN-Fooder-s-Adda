
 

const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/orderData', async (req, res) => {
    try {
        let data = req.body.order_data;
        
        // Ensure data is an array before proceeding
        if (!Array.isArray(data)) {
            data = [data]; // Convert to array if it's not already
        }

        // Create an array to hold the new order data
        let newOrderData = [{ Order_data: req.body.order_data }];

        // Check if the email exists in the database
        let existingOrder = await Order.findOne({ email: req.body.email });
        
        if (!existingOrder) {
            // If email not existing in db, create a new entry
            await Order.create({
                email: req.body.email,
                order_data: newOrderData
            });
        } else {
            // If email exists, merge the new order data with existing data
            existingOrder.order_data = [...newOrderData, ...existingOrder.order_data];
            await existingOrder.save();
        }
        
        res.json({ success: true });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});
router.get('/orderHistory/:email', async (req, res) => {
    try {
        const orderHistory = await Order.find({ email: req.params.email });
        res.json({ orderHistory });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

  

module.exports = router;
