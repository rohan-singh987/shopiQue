import React from 'react'
import { AiFillInstagram, AiOutlineTwitter, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='footer-container'>
        <p>ShopiQue by Rohan Singh</p>
        <p className='icons cursor-pointer'>
            <Link href='https://github.com/rohan-singh987'>
            <AiFillGithub />
            </Link>
            <Link href='https://www.linkedin.com/in/rohan-singh-a783541b5/'>
            <AiFillLinkedin />
            </Link>
            <Link href='https://twitter.com/Rohan_Singh2003'>
            <AiOutlineTwitter />
            </Link>
            <Link href='//'>
            <AiFillInstagram />
            </Link>
        </p>
    </div>
  )
}

export default Footer