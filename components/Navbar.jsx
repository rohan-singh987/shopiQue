import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import logo from '../assets/Shopping1.png'
import Image from 'next/image'


const Navbar = () => {
  return (
    <div className=' navbar-container'>
        <p className='log'>
            <Link href="/">
                <Image src={logo}
                className=""
                width={80}
                height={80}
                />
            </Link>
        </p>
            <button type='button' 
                className=' cart-icon' 
                onClick="">
                <AiOutlineShopping />
                <span className='cart-item-qty'>1</span>
            </button>
    </div>
  )
}

export default Navbar