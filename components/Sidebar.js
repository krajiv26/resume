import Link from "next/link"

const Sidebar = () =>  {
    return (
        <>
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white " style={{minHeight: "88vh"}}>
                {/* <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">Menu</span>
                </a> */}
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <Link href="/">
                            <a  className="nav-link align-middle px-0">
                                <i className="fs-4 bi-house"></i> 
                                <span className="ms-1 d-none d-sm-inline">About Me</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                    <Link href="/professional_skills">
                        <a  className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-hammer"></i> 
                            <span className="ms-1 d-none d-sm-inline">Professional Skills</span> 
                        </a>
                    </Link>
                        
                    </li>
                    <li>
                    <Link href="/basic_information">
                        <a  className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-info-square"></i> 
                            <span className="ms-1 d-none d-sm-inline">Basic Information</span> 
                        </a>
                    </Link>
                    </li>
                    <li>
                    <Link href="/work_experience">
                        <a  className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-explicit"></i> 
                            <span className="ms-1 d-none d-sm-inline">Work Experience</span> 
                        </a>
                    </Link>
                    </li>
                    <li>
                    <Link href="/portfolio">
                        <a  className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-binoculars"></i> 
                            <span className="ms-1 d-none d-sm-inline">Portfolio</span> 
                        </a>
                    </Link>
                    </li>
                    <li>
                    <Link href="/data_visualisation">
                        <a  className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-speedometer2"></i> 
                            <span className="ms-1 d-none d-sm-inline">Data Visualisation</span> 
                        </a>
                    </Link>
                    </li>
                    {/* <li>
                        <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-binoculars"></i> <span className="ms-1 d-none d-sm-inline">Portfolio</span> </a>
                            <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                            <li className="w-100">
                                <Link href="/portfolio">
                                <a  className="nav-link px-0"> <span className="d-none d-sm-inline">Data Visualisation</span> D</a>
                                </Link>
                                
                            </li>
                        </ul>
                    </li> */}
                    <li>
                    <Link href="/education">
                        <a  className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-book"></i> 
                            <span className="ms-1 d-none d-sm-inline">Education</span> 
                        </a>
                    </Link>
                    </li>
                    <li>
                    <Link href="/learning_certification">
                        <a  className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-brightness-alt-high"></i> 
                            <span className="ms-1 d-none d-sm-inline">Learning & Certification</span> 
                        </a>
                    </Link>
                    </li>
                    
                    {/* <li>
                        <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span> </a>
                        <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li className="w-100">
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1 </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2 </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Orders</span></a>
                    </li>
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                            <i className="fs-4 bi-bootstrap"></i> <span className="ms-1 d-none d-sm-inline">Bootstrap</span></a>
                        <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                            <li className="w-100">
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2</a>
                            </li>
                        </ul>
                    </li> */}
                    {/* <li>
                        <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-sm-inline">Products</span> </a>
                            <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                            <li className="w-100">
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 1</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 2</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 3</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 4</a>
                            </li>
                        </ul>
                    </li> */}
                </ul>
                <hr/>
            </div>
        </div>
        </>
    )
}

export default Sidebar

