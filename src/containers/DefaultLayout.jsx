import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./Header";

function DefaultLayout({ children }) {

    return (
        <div>
            <Navbar />
            <Header />
            { children }
            <Footer />
        </div>
        
    )

}
export default DefaultLayout