
import Meta from "../components/Meta"
import Link from "next/link"


const basic_information = () =>  {
    return (
        <>
          <Meta title={"Basic Information"}/>
          <div className="container mt-3" id="middlecontent">
            <h2>Basic Information</h2> 
            <div className="card">
                <div className="card-body">
                <div className="row">
                      <div className="col-md-3"   >
                        <p ><b>Email</b></p>
                      </div>
                      <div className="col-md-9 " >
                        <p>krajiv26@gmail.com</p>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-3"   >
                        <p ><b>Phone</b></p>
                      </div>
                      <div className="col-md-9 " >
                        <p>+91-9811922190, +91-8888773900</p>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-3"   >
                        <p ><b>Linkedin</b></p>
                      </div>
                      <div className="col-md-9 " >
                        <p><Link href="https://www.linkedin.com/in/rajiv-k-40a25b13">
                          <a target="_blank">https://www.linkedin.com/in/rajiv-k-40a25b13</a>
                        </Link>
                        </p>
                      </div>
                  </div>
                  
                 <div className="row">
                      <div className="col-md-3"   >
                        <p ><b>Address</b></p>
                      </div>
                      <div className="col-md-9 " >
                        <p>406, Ganeshnager, Wadgoansheri, Pune -14</p>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-3"   >
                        <p ><b>DOB</b></p>
                      </div>
                      <div className="col-md-9 " >
                        <p>1975</p>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-3"   >
                        <p ><b>Language</b></p>
                      </div>
                      <div className="col-md-9 " >
                        <p>English, Hindi</p>
                      </div>
                  </div>
                </div>
            </div>
          </div>
         
        </>
    )
}

export default basic_information



