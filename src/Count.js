import React from "react";
import CountUp from "react-countup";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";

const Count = () => {
     const [counterOn, setCounterOn] = useState(false);

     return (
          <>
               <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                    <center className="count_image py-5">
                         <h1 className="py-3">"From Promise to Forever"</h1>
                         {/* <h2 className="m-0 p-0">8month.... 17days</h2> */}
                         <center className=""
                              style={{
                                   width: '100%',
                                   fontSize: '50px',
                                   // color: '#f2edd1',
                                   padding: '',
                                   display: 'flex',
                                   justifyContent: 'center',
                              }}
                         >
                              {counterOn && <CountUp start={0} end={260} duration={6} delay={0.9} />}<div className="ms-2 days">Days</div>
                         </center>
                    </center>


               </ScrollTrigger>


          </>
     )
}

export default Count;