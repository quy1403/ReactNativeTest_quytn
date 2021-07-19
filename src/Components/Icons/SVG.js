import PropTypes from 'prop-types';
import React from 'react';
import { SvgXml } from 'react-native-svg';

SVG.propTypes = {
    svgData: PropTypes.string.isRequired,
};

SVG.defaultProps = {
    svgData: '<svg xmlns="http://www.w3.org/2000/svg"/>',
};

function SVG(props) {

    const { svgData } = props;

    return (
        <SvgXml xml={svgData} {...props} />
    );

}
export default React.memo(SVG);