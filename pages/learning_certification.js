
import Meta from "../components/Meta"
import Image from "next/image"
import Link from "next/link"

const learning = () =>  {
    return (
        <>
          <Meta title={"Education"}/>
          <div className="container mt-3" id="middlecontent">
            <h2>Learning & Certification</h2>
            <div class="card mt-2">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-3"   >
                            <Image src="/deeplearning.jpg" width="420" height="250"></Image>
                        </div>
                        <div class="col-md-9 mt-2" >
                        <div class="h5">Zero to Deep Learning with Python and Keras - Jose Portilla</div>
                        <p class="category">Udemy</p>
                        <Link href="https://www.udemy.com/certificate/UC-89J1SKVC/">
                            <a target="_blank">Online link</a>
                        </Link>
                        
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="card mt-2">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-3"   >
                            <Image src="/big_data.jpg" width="420" height="250"></Image>
                        </div>
                        <div class="col-md-9 mt-2" >
                        <div class="h5">Big Data Hadoop and Spark Developer</div>
                        <p class="category">Simplilearn</p>
                        <Link href="https://certificates.simplicdn.net/share/303466.pdf">
                            <a target="_blank">Online link</a>
                        </Link>
                        
                        </div>
                    </div>
                </div>
            </div>

            <div class="card mt-2">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-3"   >
                            <Image src="/iit_roorkee.jpg" width="420" height="250"></Image>
                        </div>
                        <div class="col-md-9 mt-2" >
                        <div class="h5">Big Data Engineering with Hadoop and Spark</div>
                        <p class="category">EICT IIT Roorkee</p>
                        <Link href="https://eict.iitr.ac.in/wp-content/uploads/cert-7L23U.jpg">
                            <a target="_blank">Online link</a>
                        </Link>
                        
                        </div>
                    </div>
                </div>
            </div>

            <div class="extra-footer"></div>
        </div>
         
        </>
    )
}

export default learning