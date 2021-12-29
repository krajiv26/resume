
import Meta from "../components/Meta"


const education = () =>  {
    return (
        <>
          <Meta title={"Education"}/>
          <div className="container mt-3" id="middlecontent">
            <h2>Education</h2> 
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-3"   >
                        <p>2005 - 2007</p>
                        <div class="h5">Master's Degree</div>
                        </div>
                        <div class="col-md-9 " >
                        <div class="h5">Master in Computer Application (MCA)</div>
                        <p class="category">IGNOU</p>
                        <p>Master in Computer Application form Indira Gandhi National Open University.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mt-2 bg-light">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-3"   >
                        <p>2000 - 2004</p>
                        <div class="h5">Bachelor's Degree</div>
                        </div>
                        <div class="col-md-9 " >
                        <div class="h5">Bachelor in Computer Application</div>
                        <p class="category">IGNOU</p>
                        <p>Bachelor in Computer Application from Indira Gandhi National Open University.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         
        </>
    )
}

export default education