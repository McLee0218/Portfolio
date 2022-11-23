import React from 'react'
import '../mystyle.css';


function Quote() {
  return (
    <div className='quote'>
        
        <blockquote className="openingQuote" title='Opening'>
            "You never know where your actions will lead to. But if you dont do anything they will lead you nowhere."
        </blockquote>

        <div className='character' title='MahatmaGandhi'>~Mahatma Gandhi</div>

        <a href='/Dashboard'><button>Who Is Tameka McLean</button></a>
    </div>
  )
}

export default Quote;