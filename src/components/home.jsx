

import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <main>
            <div className='text-center' style={{marginTop:'120px'}}>
                <img src='../news-logo.jpg' style={{width:'150px'}}/>
                <span className='fs-1 fw-bold' style={{color:'rgb(0,191,250)'}}>News</span><span className='text-dark fs-1 fw-bold'>Watch</span>
                <p className='fs-5'>All types of news from all trusted sources for all type of people</p>
                <Link to='/all'><button className='btn btn-info mt-4'>Get Started</button></Link>
            </div>
        </main>
    </div>
      
  )
}
