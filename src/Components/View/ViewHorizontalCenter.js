import PropTypes from 'prop-types';
import React from 'react';
import { Animated, View, ViewPropTypes } from 'react-native';

//** DEFAULT WEIGHT = 500, SIZE=15
//*** SU DUNG     <MainText weight={400} centerAlign colorLightGray lineHeight={100}>{'HELLO'}</MainText>
const ViewHorizontalCenter = props => {
    let viewStyle = {
        flexDirection: 'row',
        alignItems: 'center',
    };

    if (props.flex1) {
        viewStyle = {
            flex: 1,
            ...viewStyle,
        };
    }

    if (props.spaceBetween) {
        viewStyle = {
            justifyContent: 'space-between',
            ...viewStyle,
        };
    }

    if (props.spaceAround) {
        viewStyle = {
            justifyContent: 'space-around',
            ...viewStyle,
        };
    }

    if (props.backgroundColor) {
        viewStyle = {
            backgroundColor: props.backgroundColor,
            ...viewStyle,
        };
    }

    if (props.width) {
        viewStyle = {
            width: props.width,
            ...viewStyle,
        };
    }

    if (props.height) {
        viewStyle = {
            width: props.height,
            ...viewStyle,
        };
    }

    if (props.animated)
        return (
            <Animated.View {...props} style={[viewStyle, props.style]}>
                {props.children}
            </Animated.View>
        );
    return (
        <View {...props} style={[viewStyle, props.style]}>
            {props.children}
        </View>
    );
};

ViewHorizontalCenter.propTypes = {
    style: ViewPropTypes.style,
    flex1: PropTypes.bool,
    animated: PropTypes.bool,
    spaceBetween: PropTypes.bool,
    spaceAround: PropTypes.bool,
    backgroundColor: PropTypes.any,
    width: PropTypes.number,
    height: PropTypes.number,
};

export default ViewHorizontalCenter;
