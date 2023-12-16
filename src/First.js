import './App.css';

function First() {
     return (
          <>
               <center className="first_section" id='top'>
                    <center className='content '>
                         <h2>Forever And Always</h2>
                         <img src={require('./image/infinity.png')} alt=""></img>
                    </center>
                    <div className='row g-0'>
                         <div className='col-xl-6 col-xs-12 pb-2 '>
                              <div className='first_img'>
                                   <div className='container'>
                                        <h1>Deep In My Heart You Will Always Stay <br />
                                             Loved And Remembered Every Day.</h1>
                                   </div>
                              </div>
                         </div>
                         <div className='col-xl-6 col-xs-12 py-2'>
                              <center className='py-2 px-4'>
                                   <h3>You...! Yess youu aree the my Best partt of My Life, my human Dairy, and my other Half. You mean the World to Me and Love youu Sweet Hearttt.! <i class="fa-solid fa-heart"></i></h3>
                              </center>
                         </div>
                    </div>
               </center>
          </>
     )
}

export default First