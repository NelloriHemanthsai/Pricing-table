import React from 'react'
import "./Sub.css"
const Sub = ({plan , theme , price , isbasic , ispro , ismaster , yearly , buying}) => {
  return (
    <div className='price-box '>


      <div className={`box --p2 ${theme}`}>
        <p className='--text-light'>{plan}</p>
        <h4 className='--text-light'>
        <span>$</span>
        <span className='basic'>{price}</span>
        {yearly && <p className='--text-light'><del>30% Off</del></p>}
        </h4>
        {ispro && <p className='--text-light'>Everything in Basic , Plus</p>}
        {ismaster && <p className='--text-light'>Everything in Pro , Plus</p>}
      </div>


      <div className='features'>
        <ul>
          {isbasic && <li>Unlimited Pages</li>}
          {isbasic && <li>Unlimited BandWidth</li>}
          {isbasic && <li>500GB Storage</li>}
         
          {ispro && <li>10 Backup</li>}
          {ispro && <li>Email Support</li>}
          {ispro && <li>GitHub Tool</li>}

          {ismaster && <li>20 Backups</li>}
          {ismaster && <li>Push Notifications</li>}
          {ismaster && <li>Priority Support</li>}
          
        </ul>
        <button className={`btn ${theme}`} onClick={buying}>Buy Now</button>
      </div>


    </div>
  )
}

export default Sub
