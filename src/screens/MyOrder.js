// import React, { useEffect, useState } from 'react';
// import Footer from '../Component/Footer';
// import Navbar from '../Component/Navbar';

// export default function MyOrder() {
//     const [orderHistory, setOrderHistory] = useState([]);

//     useEffect(() => {
//         const fetchOrderHistory = async () => {
//             try {
//                 const userEmail = localStorage.getItem('userEmail');
//                 const response = await fetch(`http://localhost:5000/api/orderHistory/${userEmail}`);
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch order history');
//                 }
//                 const data = await response.json();
//                 console.log('Response data:', data);
//                 setOrderHistory(data.orderHistory || []); // Update state with orderHistory data
//             } catch (error) {
//                 console.error('Error fetching order history:', error);
//             }
//         };
        
        
// // console.log("code is here")
//         fetchOrderHistory();
//     }, []);

//     console.log('Order history state:', orderHistory); // Log the order history state

//     return (
//         <div>
//             <Navbar />
//             <div className='container'>
//                 <h1>Order History</h1>
//                 {orderHistory.length > 0 ? (
//                     orderHistory.map((order, index) => (
//                         <div key={order._id}>
//                             <h3>Order {index + 1}</h3>
//                             {order.order_data && order.order_data.length > 0 ? (
//                                 <ul>
//                                     {order.order_data.map((orderData, idx) => (
//                                         <li key={idx}>
//                                             {orderData.Order_data ? (
//                                                 orderData.Order_data.map((item, i) => (
//                                                     <div key={i}>
//                                                         {item.name} - Qty: {item.qty}, Size: {item.size}, Price: ₹{item.price}
//                                                     </div>
//                                                 ))
//                                             ) : (
//                                                 <div>No order items available</div>
//                                             )}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             ) : (
//                                 <p>No order data available</p>
//                             )}
//                         </div>
//                     ))
//                 ) : (
//                     <p>No order history available</p>
//                 )}
//             </div>
//             <Footer />
//         </div>
//     );
// }









// // {"orderData":{"_id":"63024fd2be92d0469bd9e31a","email":"mohanDas@gmail.com","order_data":[[[{"id":"62ff20fbaed6a15f800125e9","name":"Chicken Fried Rice","qty":"4","size":"half","price":520},{"id":"62ff20fbaed6a15f800125ea","name":"Veg Fried Rice","qty":"4","size":"half","price":440}],"2022-08-21T15:31:30.239Z"],[[{"id":"62ff20fbaed6a15f800125f4","name":"Mix Veg Pizza","qty":"4","size":"medium","price":800},{"id":"62ff20fbaed6a15f800125f3","name":"Chicken Doub;e Cheeze Pizza","qty":"4","size":"regular","price":480}],"2022-08-21T15:32:38.861Z"]],"__v":0}}









import React, { useEffect, useState } from 'react';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';

export default function MyOrder() {
    const [orderHistory, setOrderHistory] = useState([]);

    useEffect(() => {
        const fetchOrderHistory = async () => {
            try {
                const userEmail = localStorage.getItem('userEmail');
                const response = await fetch(`http://localhost:5000/api/orderHistory/${userEmail}`);
                const data = await response.json();
                setOrderHistory(data.orderHistory || []);
            } catch (error) {
                console.error('Error fetching order history:', error);
            }
        };

        fetchOrderHistory();
    }, []);
console.log(orderHistory)
    return (
        <div>
            <Navbar />
            <div className='container'>
                <h1>Order History</h1>
                {orderHistory.map((order, index) => (
                    <div key={order._id}>
                        {index > 0 && <hr />} {/* Horizontal partition line for subsequent orders */}
                        {/* <h3>Order {index + 1}</h3>
                        <p>Date: {order.order_date ? new Date(order.order_date).toLocaleString() : 'Invalid Date'}</p> */}
                        {order.order_data && order.order_data.length > 0 ? (
                            <ul>
                                {order.order_data.map((orderData, idx) => (
                                    <li key={idx}>
                                        {orderData.Order_data ? (
                                            orderData.Order_data.map((item, i) => (
                                                <div key={i}>
                                                    {item.name} - Qty: {item.qty}, Size: {item.size}, Price: ₹{item.price}
                                                </div>
                                            ))
                                        ) : (
                                            <div>No order items available</div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No order data available</p>
                        )}
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}













   






























