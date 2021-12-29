
import Nav from './Nav'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
    return (
        <>
            <div className="p-1 px-3 bg-primary text-white text-center">
            <div class="row">
                    <div class="col-md-4"   >
                        <Image src="/img_avatar1.png" alt="Avatar Logo"  
                        className="rounded-pill" width="60" height="60"/>
                    </div>
                    <div class="col-md-4"   >
                        <h1>Rajiv Kumar</h1>
                    </div>
                    <div class="col-md-4"   >
                        <a href="mailto:krjaiv26@gmail.com" style={{color:"white"}}>krajiv26@gmail.com</a><br/>+91-9811922190, +91-8888773900

                    </div>
                </div>
               
            </div>

            {/* <Nav/> */}
        </>
    )
}

export default Header
