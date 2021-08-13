import React, { useState, useEffect } from 'react';
import { db } from "./firebase";
import './Orders.css'
import { useStateValue } from "./StateProvider";
import Order from './Order'

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if(user) {
        db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot(snapshot => (
            setOrders(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ))
    } else {
        setOrders([])
    }

  }, [user])

    return (
        <div className='orders'>
        <center>
        <h2 className='about__text'>
              Our operational expertise originates from deploying 
              qualified human and material resources to deliver
               innovative and tailor-made products and services 
               that delight all our customers through
               win-win business partnerships.
            </h2>


        </center>
            
            <img className="about__img" src="http://www.meherinternational.com/wp-content/uploads/2017/04/01_BG.jpg" alt="" ></img>

<center>
<h2 className='about__text'>Contact : 97901 63190 , 86088 57923</h2>
            <h5 className='about__text'>19/33 , Kumar Muthu Samy Street , Ammapet , Selam - 636 003</h5>


</center>
    

            <div className='orders__order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders
