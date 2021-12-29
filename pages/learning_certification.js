
import Meta from "../components/Meta"
import Image from "next/image"
import Link from "next/link"

const learning = () =>  {
    return (
        <>
          <Meta title={"Education"}/>
          <div className="container mt-3" id="middlecontent">
            <h2>Learning & Certification</h2>
            <div className="card mt-2">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-3"   >
                            <Image src="/deeplearning.jpg" width="420" height="250" alt=""></Image>
                        </div>
                        <div className="col-md-9 mt-2" >
                        <div className="h5">Zero to Deep Learning with Python and Keras - Jose Portilla</div>
                        <p className="category">Udemy</p>
                        <Link href="https://www.udemy.com/certificate/UC-89J1SKVC/">
                            <a target="_blank">Online link</a>
                        </Link>
                        
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="card mt-2">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-3"   >
                            <Image src="/big_data.jpg" width="420" height="250" alt=""></Image>
                        </div>
                        <div className="col-md-9 mt-2" >
                        <div className="h5">Big Data Hadoop and Spark Developer</div>
                        <p className="category">Simplilearn</p>
                        <Link href="https://certificates.simplicdn.net/share/303466.pdf">
                            <a target="_blank">Online link</a>
                        </Link>
                        
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mt-2">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-3"   >
                            <Image src="/iit_roorkee.jpg" width="420" height="250" alt=""></Image>
                        </div>
                        <div className="col-md-9 mt-2" >
                        <div className="h5">Big Data Engineering with Hadoop and Spark</div>
                        <p className="category">EICT IIT Roorkee</p>
                        <Link href="https://eict.iitr.ac.in/wp-content/uploads/cert-7L23U.jpg">
                            <a target="_blank">Online link</a>
                        </Link>
                        
                        </div>
                    </div>
                </div>
            </div>

            <div className="extra-footer"></div>
        </div>
         
        </>
    )
}

export default learning