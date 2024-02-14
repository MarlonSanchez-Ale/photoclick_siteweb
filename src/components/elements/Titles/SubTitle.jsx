import PropTypes from 'prop-types';

function SubTitle({ children }) {
    return (
        <p className='subtitle'>{children}</p>
    )
}


SubTitle.propTypes = {
    children: PropTypes.string.isRequired
};

export default SubTitle