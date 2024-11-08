import React from 'react'
import './ListOrders.css'
import Order from '../Order'
import { useState,useEffect } from 'react'
import { useHttpClient } from '../../httpClient/HttpClientContext';

function ListOrders() {
    const [orders,setOrders] = useState([{ name: 'Order 1',status:'reserved',picture:'',pickuptime:'thursday 16:00', quantity:3 
     
    }, ]);
    
  const httpClient = useHttpClient();
    useEffect (() => {
        const c_id = httpClient.get(`/me`).id;
        httpClient.getwithParam('/reservation', 'client_id', c_id).then(res => {
            setOrders(res);
        });
        /* fetch('http://localhost:9000/offer',{credentials:'include'}).then(response => {
             response.json().then(offers=>{setOffers(offers);})},[]);
         fetch('http://localhost:9000/profile',{credentials:'include'}).then(response => {
          response.json().then(userInfo=>{
      setUsername(userInfo.username);})
          })
         */},[]);
  return (
    <div>ListOrders
{orders.length>0 && orders.map(order=><Order {...order} key={order.id}/>)}


    </div>
  )
}

export default ListOrders