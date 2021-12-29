import Link from "next/link"


const Footer = () =>  {
    return (
        <>
          <div className="mt-5 p-4 bg-dark text-white text-center " id="footer">
          <p>
            <Link href="https://www.linkedin.com/in/rajiv-k-40a25b13"><a target="_blank"><i className="fs-4 bi-linkedin"></i></a></Link>
            &nbsp;&nbsp;This app create in <Link href="https://nextjs.org/"><a target="_blank">NextJs</a></Link>, The React Framework
for Production</p>
        </div>  
        </>
    )
}

export default Footer

