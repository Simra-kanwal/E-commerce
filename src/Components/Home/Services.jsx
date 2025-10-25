import React from 'react'
import './Services.css'
import { MdOutlineSecurity } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <>
      <div className="services">
        <div className='service'>
            <TbTruckDelivery style={{color:"rgb(201, 3, 201)",fontSize:"40px",backgroundColor:"white",borderRadius:"30px",padding:"2px 7px"}}/>
            <p>Super Fast and Free Delivery</p>
        </div>
        <div className='services-2'>
            <div className="security">
                <MdOutlineSecurity style={{color:"rgb(201, 3, 201)",fontSize:"40px",backgroundColor:"white",borderRadius:"30px",padding:"2px 7px"}}/>
                <p>Non-contact Shipping</p>
            </div>
            <div className="security money">
                <GiReceiveMoney style={{color:"rgb(201, 3, 201)",fontSize:"40px",backgroundColor:"white",borderRadius:"30px",padding:"2px 7px"}}/>
                <p>Money-back Guarented</p>
            </div>
        </div>
        <div className='service'>
            <RiSecurePaymentLine style={{color:"rgb(201, 3, 201)",fontSize:"40px",backgroundColor:"white",borderRadius:"30px",padding:"2px 7px"}}/>
            <p>Super Secure Payment System</p>
        </div>
      </div>
    </>
  )
}

export default Services
