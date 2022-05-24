import React from 'react'

const Footer = () => {

 const year =new Date().getFullYear();

  return (
    <>

        <div className="container-fluid m-0 p-0">

        <p className='text-center py-3 bg-light fixed-bottom m-0'>copyright © {year}</p>

        </div>
       
    </>
  )
}

export default Footer;