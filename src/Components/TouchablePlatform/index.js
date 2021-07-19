import PropsTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, ViewPropTypes } from 'react-native';

const TouchablePlatform = props => {
    let viewStyle = {};
    if (props.backgroundColor) {
        viewStyle = {
            backgroundColor: props.backgroundColor,
            ...viewStyle,
        };
    }

    if (props.w) viewStyle.width = w;
    if (props.h) viewStyle.height = h;

    return (
        <TouchableOpacity {...props} style={[viewStyle, props.style]} activeOpacity={0.5}>
            {props.children}
        </TouchableOpacity>
    );
};

TouchablePlatform.propTypes = {
    style: ViewPropTypes.style,
    w: PropsTypes.number,
    h: PropsTypes.number,
    backgroundColor: PropsTypes.any,
    onPress: PropsTypes.func.isRequired,
};

export default TouchablePlatform;
