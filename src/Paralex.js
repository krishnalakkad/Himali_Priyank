import video from "../src/image/video.mp4";

function Paralex() {

     return (
          <>
               <div className="row paralex m-0 video">
                    <div className="col-xl-6 col-xs-12">
                         <video src={video} controls autoPlay={false}></video>
                    </div>
                    <div className="col-xl-6 col-xs-12">

                    </div>
               </div>
          </>
     )
}

export default Paralex