import React from 'react'
import '../style.css';


function Quote() {
  return (
    <div className='quote'>
        <div className="openingQuote" title='Opening'>Opening</div>
        
        <blockquote>
            "You never kow where your actions will lead to. But if you dont do anything they will lead you nowhere."
        </blockquote>

        <div className='character' title='MahatmaGandhi'>~Mahatma Gandhi</div>

        <a href='/dashboard'><button>Who Is Tameka McLean</button></a>
    </div>
  )
}

export default Quote;