import { useEffect } from 'react'

import '../styles/globals.css'
import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-icons/font/bootstrap-icons.json'
// import 'font-awesome/css/font-awesome.css'
import "bootstrap-icons/font/bootstrap-icons.css";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle')
    }, [])
    return (
        <Layout>
            <Component {...pageProps } />
        </Layout>
    )
    
}

export default MyApp