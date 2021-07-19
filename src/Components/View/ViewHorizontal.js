import PropsTypes from 'prop-types';
import React from 'react';
import { View, ViewPropTypes } from 'react-native';

const ViewHorizontal = props => {
    let viewStyle = {
        flexDirection: 'row',
    };

    if (props.flex1) {
        viewStyle = {
            flex: 1,
            ...viewStyle,
        };
    }

    if (props.backgroundColor) {
        viewStyle = {
            backgroundColor: props.backgroundColor,
            ...viewStyle,
        };
    }
    return (
        <View {...props} style={[viewStyle, props.style]}>
            {props.children}
        </View>
    );
};

ViewHorizontal.propTypes = {
    style: ViewPropTypes.style,
    flex1: PropsTypes.bool,
    spaceBetween: PropsTypes.bool,
    spaceAround: PropsTypes.bool,
    backgroundColor: PropsTypes.any,
};

export default ViewHorizontal;
