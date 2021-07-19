import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View, ViewPropTypes } from 'react-native';

ViewShadow.propTypes = {
    style: ViewPropTypes.style,
    children: PropTypes.any,
};

ViewShadow.defaultProps = {
    style: {},
    children: null,
};

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.16,
        shadowRadius: 2,
        elevation: 2,
    },
});

function ViewShadow(props) {
    const { style, children } = props;

    return <View style={{ ...styles.shadow, ...style }}>{children}</View>;
}
export default React.memo(ViewShadow);
