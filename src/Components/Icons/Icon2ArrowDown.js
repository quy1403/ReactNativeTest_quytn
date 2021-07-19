import PropTypes from 'prop-types';
import React from 'react';
import { ms } from '../../Utils/ScaleUtils';
import SVG from './SVG';

const SVG_DATA = `
<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 16.3 7.15">
  <g id="Group_5712" data-name="Group 5712" transform="translate(-175.35 -37.35)">
    <path id="Icon_feather-chevron-down" data-name="Icon feather-chevron-down" d="M9,13.5l7.5,3,2.5-1,5-2" transform="translate(167 24.5)" fill="none" stroke="{color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" opacity="0.5"/>
    <path id="Icon_feather-chevron-down-2" data-name="Icon feather-chevron-down" d="M9,13.5l7.5,3,2.5-1,5-2" transform="translate(167 27.5)" fill="none" stroke="{color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
  </g>
</svg>
`;

Icon2ArrowDown.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
};

Icon2ArrowDown.defaultProps = {
    size: ms(16.3),
    color: 'white',
};

function Icon2ArrowDown(props) {
    const { size, color } = props;
    const data = SVG_DATA.replace(/{width}/g, size)
        .replace(/{height}/g, (size / 16.3) * 7.15)
        .replace(/{color}/g, color);
    return <SVG svgData={data} />;
}
export default React.memo(Icon2ArrowDown);
