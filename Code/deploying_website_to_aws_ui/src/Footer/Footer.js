import React from "react"

const Footer = () => {
    return <>
        <footer className="page-footer font-small blue pt-4 text-light" style={{backgroundColor: "#000"}}>
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h5 className="text-uppercase">Footer Content</h5>
                        <p>Here you can use rows and columns to organize your footer content.</p>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0" />

                    <div className="col-md-6 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <li><a className="text-light" href="/">Contact Us</a></li>
                            <li><a className="text-light" href="/">About Us</a></li>
                            <li><a className="text-light" href="/">Home</a></li>
                            <li><a className="text-light" href="/Products">Browse Products</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-3">© 2024 Copyright
            </div>
        </footer>
    </>
}

export default Footer;