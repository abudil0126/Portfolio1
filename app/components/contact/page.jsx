import React from 'react'
import "./contact.css"
import Image from 'next/image'

const Contact = () => {
  return (
    <>
    <div className='contact__wp'>
        <a href="https://t.me/dilshadovic_a">
          <Image src="/img/telegram.png" alt="telegram" width={200} height={200} />
        </a>
        <a href="https://www.instagram.com/prosto.__p?ish=emR0a2tuMmZnYWZ5&utm_source=qr">
          <Image src="/img/inst.webp" alt="instagram" width={250} height={250} />
        </a>
        <a href="https://github.com/abudil0126">
          <Image src="/img/github.png" alt="github" width={200} height={200} />
        </a>
    </div>
    <div className='contact2'>
      <p>Number: +998(99)830-44-77</p>
      <p>E-mail: abufuture0126@gmail.com</p>
      <p>Location: Tashkent Keles city Sadaf street 22</p>
    </div>
    <p className="copyright">Copyright ©2024 All rights reserved</p>
    </>
  )
}

export default Contact