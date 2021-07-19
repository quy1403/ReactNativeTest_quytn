import PropTypes from 'prop-types';
import React from 'react';
import { ms } from '../../Utils/ScaleUtils';
import SVG from './SVG';

const SVG_DATA = `
<svg xmlns="http://www.w3.org/2000/svg" width="15.924" height="15.924" viewBox="0 0 15.924 15.924">
  <g id="Icon_feather-search" data-name="Icon feather-search" opacity="0.6">
    <g id="Path_1" data-name="Path 1" transform="translate(-4.5 -4.5)" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path d="M17.4,10.949A6.449,6.449,0,1,1,10.949,4.5,6.449,6.449,0,0,1,17.4,10.949Z" stroke="none"/>
      <path d="M 10.94875621795654 15.39751625061035 C 13.40180587768555 15.39751625061035 15.39751625061035 13.40180587768555 15.39751625061035 10.94875621795654 C 15.39751625061035 8.495706558227539 13.40180587768555 6.499996185302734 10.94875621795654 6.499996185302734 C 8.495706558227539 6.499996185302734 6.499996185302734 8.495706558227539 6.499996185302734 10.94875621795654 C 6.499996185302734 13.40180587768555 8.495706558227539 15.39751625061035 10.94875621795654 15.39751625061035 M 10.94875621795654 17.39751625061035 C 7.387206077575684 17.39751625061035 4.499996185302734 14.5103063583374 4.499996185302734 10.94875621795654 C 4.499996185302734 7.387206077575684 7.387206077575684 4.499996185302734 10.94875621795654 4.499996185302734 C 14.5103063583374 4.499996185302734 17.39751625061035 7.387206077575684 17.39751625061035 10.94875621795654 C 17.39751625061035 14.5103063583374 14.5103063583374 17.39751625061035 10.94875621795654 17.39751625061035 Z" stroke="none" fill="#393939"/>
    </g>
    <path id="Path_2" data-name="Path 2" d="M28.482,28.482l-3.507-3.507" transform="translate(-13.972 -13.972)" fill="none" stroke="#393939" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

`;

IconSearch.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
};

IconSearch.defaultProps = {
    size: ms(20, 24),
    color: 'white',
};

function IconSearch(props) {
    const { size, color } = props;
    const data = SVG_DATA.replace(/{width}/g, size)
        .replace(/{height}/g, (size / 20) * 16.93)
        .replace(/{color}/g, color);
    return <SVG svgData={data} style={props.style} />;
}
export default React.memo(IconSearch);
