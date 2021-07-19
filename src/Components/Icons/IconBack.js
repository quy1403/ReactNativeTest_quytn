import PropTypes from 'prop-types';
import React from 'react';
import { ms } from '../../Utils/ScaleUtils';
import SVG from './SVG';

const SVG_DATA = `
<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 8.054 14.088">
  <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back" d="M13.679,13.236,19.009,7.91a1.007,1.007,0,0,0-1.426-1.422l-6.039,6.035a1,1,0,0,0-.029,1.388l6.065,6.077a1.007,1.007,0,1,0,1.426-1.422Z" transform="translate(-11.251 -6.194)" fill="{color}"/>
</svg>

`;

IconBack.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
};

IconBack.defaultProps = {
    size: ms(8.054, 9.67),
    color: 'white',
};

function IconBack(props) {

    const { size, color } = props;
    const data = SVG_DATA
        .replace(/{width}/g, size)
        .replace(/{height}/g, size / 8.054 * 14.088)
        .replace(/{color}/g, color);
    return <SVG svgData={data} />

}
export default React.memo(IconBack);