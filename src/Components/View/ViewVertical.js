import PropsType from 'prop-types';
import React from 'react';
import { View, ViewPropTypes } from 'react-native';

const ViewVertical = props => {
    let viewStyle = {};

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

ViewVertical.propTypes = {
    style: ViewPropTypes.style,
    flex1: PropsType.bool,
    backgroundColor: PropsType.any,
};

export default ViewVertical;
