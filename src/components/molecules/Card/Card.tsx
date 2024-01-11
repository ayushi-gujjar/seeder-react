import React from 'react'
import PropTypes from 'prop-types';

const Card = ({ backgroundColor, height, width, padding, borderRadius, children, display }: any) => {
    const cardStyle = {
        backgroundColor,
        height,
        width,
        padding,
        borderRadius,
        display
    };

    return (
        <div style={cardStyle}>
            {children}
        </div>
    )
}

Card.propTypes = {
    backgroundColor: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    padding: PropTypes.string,
    borderRadius: PropTypes.string,
    display: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default Card
