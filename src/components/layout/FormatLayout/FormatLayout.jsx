//import React from 'react'
import Header from "../../elements/Header/Header"
import Footer from "../../elements/Footer/Footer"
import PropTypes from 'prop-types';

function FormatLayout({ children }) {
    return (
        <div className="flex flex-col w-full ">
            {/* Contenido principal */}

            <Header />
            <main className="">{children}</main>
            <Footer />
        </div>
    )
}

//Forma para declarar un children usando PropTypes

FormatLayout.propTypes = {
    children: PropTypes.node.isRequired
};

export default FormatLayout