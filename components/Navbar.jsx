import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import logo from '../assets/Shopping1.png'
import Image from 'next/image'
import Cart from './Cart'
import { useStateContext } from '../context/StateContext'


const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
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
                onClick={() => setShowCart(true)}>
                <AiOutlineShopping />
                <span className='cart-item-qty'>{ totalQuantities }</span>
            </button>

            { showCart && < Cart />}  
    </div>
  )
}

export default Navbar