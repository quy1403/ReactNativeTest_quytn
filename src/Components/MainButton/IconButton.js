import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, ViewPropTypes } from 'react-native';
import TouchablePlatform from '../TouchablePlatform';

IconButton.propTypes = {
    icon: PropTypes.object,
    activeOpacity: PropTypes.number,
    style: ViewPropTypes.style,
    onPress: PropTypes.func,
};

IconButton.defaultProps = {
    icon: null,
    activeOpacity: 0.2,
    style: {},
    onPress: () => {},
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

function IconButton(props) {
    const { icon, activeOpacity, style, onPress } = props;

    return (
        <TouchablePlatform activeOpacity={activeOpacity} style={{ ...styles.container, ...style }} onPress={onPress}>
            {icon}
        </TouchablePlatform>
    );
}
export default React.memo(IconButton);
