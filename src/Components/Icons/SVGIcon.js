import PropTypes from 'prop-types';
import React from 'react';
import { SvgXml } from 'react-native-svg';

export class SVGIcon extends React.PureComponent {
    static propTypes = {
        svgData: PropTypes.string.isRequired,
    };

    render() {
        return <SvgXml xml={this.props.svgData} {...this.props} />;
    }
}
