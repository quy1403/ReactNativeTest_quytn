import React from 'react';
import PropTypes from 'prop-types';
import { SVGIcon } from './SVGIcon';
import { ms } from "../../Utils/ScaleUtils";

const SVG_DATA = `<svg width="${ms(14)}" height="${ms(
    14,
)}" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.2475 2.34151C12.6111 1.92587 13.2429 1.88375 13.6585 2.24744C14.0742 2.61112 14.1163 3.24288 13.7526 3.65852L6.75261 11.6585C6.40022 12.0613 5.79322 12.1152 5.37534 11.7809L0.375342 7.78088C-0.0559202 7.43587 -0.125842 6.80658 0.219168 6.37532C0.564178 5.94406 1.19347 5.87414 1.62473 6.21914L5.87755 9.6214L12.2475 2.34151Z" fill="#7ED321"/>
</svg>

`;
export default class IconCheckMark extends React.PureComponent {
    static propTypes = {
        color: PropTypes.string,
    };

    render() {
        let data = SVG_DATA;
        if (this.props.color) {
            data = data.replace('#7ED321', this.props.color);
        }
        return <SVGIcon svgData={data} />;
    }
}
