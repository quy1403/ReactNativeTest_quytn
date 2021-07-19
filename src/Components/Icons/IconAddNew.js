import PropTypes from 'prop-types';
import React from 'react';
import { SVGIcon } from './SVGIcon';
import { ms } from "../../Utils/ScaleUtils";

const SVG_DATA = `<svg width="${ms(16)}" height="${ms(
    16,
)}" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 7V0H7V7H0V9H7V16H9V9H16V7H9Z" fill="#4CC3DB"/>
</svg>
`;
export default class IconAddNew extends React.PureComponent {
    static propTypes = {
        color: PropTypes.string,
    };

    render() {
        let data = SVG_DATA;
        if (this.props.color) {
            data = data.replace('#4CC3DB', this.props.color);
        }
        return <SVGIcon svgData={data} />;
    }
}
