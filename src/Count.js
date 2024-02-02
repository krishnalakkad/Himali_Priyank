import React, { useEffect } from "react";
import CountUp from "react-countup";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import moment from "moment/moment";

const Count = () => {
     const [counterOn, setCounterOn] = useState(false);

     const [date, setDate] = useState({
          countDay: 0
     })

     useEffect(() => {
          let startDate = moment('2021-7-11')
          let endDate = moment(new Date())
          let daysDifference = endDate.diff(startDate, 'days');
          setDate({
               ...date,
               countDay: daysDifference
          })
     }, [])
     console.log("date", date)

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
                              {(counterOn) && <CountUp start={0} end={date?.countDay} duration={6} delay={0.7} />}<div className="ms-2 days">Days</div>
                         </center>
                    </center>
               </ScrollTrigger>
          </>
     )
}

export default Count;