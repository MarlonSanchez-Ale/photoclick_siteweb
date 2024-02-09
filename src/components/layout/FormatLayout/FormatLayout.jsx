//import React from 'react'
import Header from "../../elements/Header/Header"
import Footer from "../../elements/Footer/Footer"
import PropTypes from 'prop-types';

function FormatLayout({ children }) {
    return (
        <div>
            {/* Contenido principal */}
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

//Forma para declarar un children usando PropTypes

FormatLayout.propTypes = {
    children: PropTypes.node.isRequired
};

export default FormatLayout