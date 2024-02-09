//import React// from 'react'
import PropTypes from 'prop-types';

function TitleSection({ title }) {
    return (
        <h1 className='title'>{title}</h1>
    );
}

TitleSection.propTypes = {
    title: PropTypes.string.isRequired
};

export default TitleSection;
