import React from 'react'
import Navbar from './Navbar'
import  '../styles/global.css'


export default function Layout({children}: any) {
  return (
    <div className='layout'>
        <Navbar />
        <div className="content">
        {children}
        </div>
        <footer>
            <p>Copyright 2022 Devinova</p>
        </footer>
    </div>
  )
}
