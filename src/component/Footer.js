import React, { useState, useEffect } from 'react'
import { api } from '../Data/Api'
function Footer() {

    const [Data,SetData] = useState([])
    const [Data1,SetData1] = useState([])
    useEffect(() => {
        SetData(api.user_data)
        SetData1(api.lab_data)

    }, [])
    
  return (
    <>
    
    <div className='footer'>
        <div className='logo'>Logo</div>
        <div>{Data.name}</div>
        <span>.</span>
        <div>Age: {Data.age}</div>
        <span>.</span>
        <div>Analysis: {Data.footer_date}</div>
        <span>.</span>
        <div>Order ID: {Data1.orderid}</div>
    </div>    
    </>
  )
}

export default Footer