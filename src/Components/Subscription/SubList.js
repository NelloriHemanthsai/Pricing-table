import React, { useEffect, useState } from 'react'
import "./SubList.css";
import Sub from './Sub';
const SubList = () => {
  const [basic,setbasic] = useState(9.99)
  const [pro,setpro] = useState(19.99)
  const [master,setmaster] = useState(29.99)
  const[yearlyprice,setyearlyprice]=useState(false);
  const clickbutton = () => {
    setyearlyprice(!yearlyprice);
  }
  const calpercentage = (num , per) => {
    return((num*12)/100*per);
  }
  useEffect(() => {
    if (yearlyprice) {
      setbasic(calpercentage(basic,70).toFixed(0));
      setpro(calpercentage(pro,70).toFixed(0));
      setmaster(calpercentage(master,70).toFixed(0));
    } else {
      setbasic(9.99)
      setpro(19.99)
      setmaster(29.99)
    }
      
  },[yearlyprice])
  return (
    <div>
      <section className='main'>
        <div className='container --center-all'>
            <div className='text'>
                <h2>Pricing</h2>
                <div className='--line'></div>

                <div className='--flex-center --my2'>
                    <p>Monthly</p>

                    <div className='--mx2'>
                        <span className={yearlyprice ? "toggle-btn toggled" : "toggle-btn"} onClick={clickbutton}>
                        <div className={yearlyprice ? "ball move" : "ball"}></div>
                        </span>
                    </div>

                    <p>Yearly</p>
                </div>

            </div>


            <div className='sub-plans'>
                <Sub plan={"Basic"} theme={"theme1"} price={basic} isbasic={true} yearly={yearlyprice} buying={() => alert(`your price is ${basic}`)}/>
                <Sub plan={"Pro"} theme={"theme2"} price={pro} ispro={true} yearly={yearlyprice} buying={() => alert(`your price is ${pro}`)}/>
                 <Sub plan={"Master"} theme={"theme3"} price={master} ismaster={true} yearly={yearlyprice} buying={() => alert(`your price is ${master}`)}/>
            </div>
            
        </div>
      </section>
    </div>
  )
}

export default SubList
