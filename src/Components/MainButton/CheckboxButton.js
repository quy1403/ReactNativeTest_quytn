import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View, ViewPropTypes } from 'react-native';
import MainButton from './index';
import { ms, rs } from '../../Utils/ScaleUtils';
import IconTick from '../Icons/IconTick';
import MainText from '../Texts';

CheckboxButton.propTypes = {
    parentColor: PropTypes.string,
    childColor: PropTypes.string,
    isChecked: PropTypes.bool,
    circle: PropTypes.bool,
    title: PropTypes.string,
    renderContent: PropTypes.func,
    textSize: PropTypes.number,
    textHeight: PropTypes.number,
    textProps: PropTypes.object,
    textStyle: ViewPropTypes.style,
    style: ViewPropTypes.style,
    onPress: PropTypes.func,
};

CheckboxButton.defaultProps = {
    parentColor: '#EB5A43',
    childColor: '#EB5A43',
    isChecked: false,
    circle: true,
    title: '',
    renderContent: null,
    textSize: ms(16, 16),
    textHeight: ms(19, 19),
    textProps: {},
    textStyle: {},
    style: {},
    onPress: () => {},
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 0,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    border: {
        width: rs(20, 26),
        height: rs(20, 26),
        borderWidth: rs(1, 1),
        borderRadius: rs(20, 26),
        marginRight: ms(8, 12),
        alignItems: 'center',
        justifyContent: 'center',
    },
    square: {
        width: ms(20, 24),
        height: ms(20, 24),
        borderWidth: ms(1.5, 1.5),
        borderRadius: ms(2, 2),
        marginRight: ms(16, 14.2),
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle: {
        width: rs(12, 14),
        height: rs(12, 14),
        borderRadius: rs(12, 14),
    },
});

function CheckboxButton(props) {
    const {
        parentColor,
        childColor,
        isChecked,
        circle,
        title,
        renderContent,
        textSize,
        textHeight,
        textProps,
        textStyle,
        style,
        onPress,
    } = props;

    return (
        <MainButton normal activeOpacity={0.8} style={{ ...styles.container, ...style }} onPress={onPress}>
            {circle ? (
                <View style={{ ...styles.border, borderColor: isChecked ? childColor : parentColor }}>
                    {isChecked && <View style={{ ...styles.circle, backgroundColor: childColor }} />}
                </View>
            ) : (
                <View style={{ ...styles.square, borderColor: isChecked ? childColor : parentColor }}>
                    {isChecked && <IconTick color={childColor} />}
                </View>
            )}
            {renderContent ? (
                renderContent()
            ) : (
                <MainText size={textSize} lineHeight={textHeight} style={textStyle} {...textProps}>
                    {title}
                </MainText>
            )}
        </MainButton>
    );
}
export default React.memo(CheckboxButton);
