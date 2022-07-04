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
            <Link href='https://github.com/rohan-singh987'>
            <AiFillInstagram />
            </Link>
            <Link href='https://github.com/rohan-singh987'>
            <AiFillLinkedin />
            </Link>
            <Link href='https://github.com/rohan-singh987'>
            <AiOutlineTwitter />
            </Link>
        </p>
    </div>
  )
}

export default Footer