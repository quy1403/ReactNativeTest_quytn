import PropType from 'prop-types';
import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View, ViewPropTypes } from 'react-native';
import MainButton from './index';
import { useApp } from '../../AppProvider';
import { ms, rs } from '../../Utils/ScaleUtils';
import MainText from '../Texts';

const CONTAINER_WIDTH = rs(36, 49);
const CONTAINER_HEIGHT = rs(20, 27);
const CONTAINER_BORDER = rs(1, 1);
const CONTAINER_SIZE = CONTAINER_WIDTH - CONTAINER_BORDER * 2;
const CIRCLE_WIDTH = rs(16, 21);
const CIRCLE_POSITON = rs(1, 2);
const CIRCLE_SIZE = CIRCLE_WIDTH + CIRCLE_POSITON * 2;
const ANIM_DURATION = 300;

ToggleButton.propTypes = {
    isActive: PropType.bool,
    title: PropType.string,
    subTitle: PropType.string,
    style: ViewPropTypes.style,
    onPress: PropType.func,
};

ToggleButton.defaultProps = {
    isActive: true,
    title: '',
    subTitle: null,
    style: {},
    onPress: () => {},
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 0,
        flexDirection: 'row',
        backgroundColor: 'transparent',
    },
    toggle: {
        marginLeft: ms(22, 22 * 2),
        width: CONTAINER_WIDTH,
        height: CONTAINER_HEIGHT,
        borderWidth: CONTAINER_BORDER,
        borderRadius: CONTAINER_WIDTH,
    },
    circleContainer: {
        height: '100%',
        position: 'absolute',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingHorizontal: CIRCLE_POSITON,
    },
    circle: {
        width: CIRCLE_WIDTH,
        height: CIRCLE_WIDTH,
        borderRadius: CIRCLE_WIDTH,
    },
});

function ToggleButton(props) {
    const { isActive, title, subTitle, style, onPress } = props;
    const { colors } = useApp();
    const position = useRef(new Animated.Value(isActive ? CONTAINER_SIZE : CIRCLE_SIZE)).current;

    const onChangeToggle = () => {
        Animated.timing(position, {
            toValue: isActive ? CONTAINER_SIZE : CIRCLE_SIZE,
            duration: ANIM_DURATION,
            useNativeDriver: !true,
        }).start();
    };

    const colorBorderAnim = position.interpolate({
        inputRange: [CIRCLE_SIZE, CONTAINER_SIZE],
        outputRange: [colors.darkGray, colors.green],
    });

    const colorBackgroundAnim = position.interpolate({
        inputRange: [CIRCLE_SIZE, CONTAINER_SIZE],
        outputRange: [colors.white, colors.green],
    });

    const colorCircleAnim = position.interpolate({
        inputRange: [CIRCLE_SIZE, CONTAINER_SIZE],
        outputRange: [colors.darkGray, colors.white],
    });

    useEffect(() => {
        onChangeToggle();
    }, [isActive]);

    return (
        <MainButton activeOpacity={0.9} onPress={() => onPress && onPress()} style={{ ...styles.container, ...style }}>
            <View style={{ flex: 1 }}>
                <MainText size={ms(12, 18)} lineHeight={ms(20, 27)}>
                    {title}
                </MainText>
                {subTitle && (
                    <MainText colorBlue size={ms(12, 18)} lineHeight={ms(20, 27)}>
                        {subTitle}
                    </MainText>
                )}
            </View>
            <Animated.View style={{ ...styles.toggle, borderColor: colorBorderAnim, backgroundColor: colorBackgroundAnim }}>
                <Animated.View style={{ ...styles.circleContainer, width: position }}>
                    <Animated.View style={{ ...styles.circle, backgroundColor: colorCircleAnim }} />
                </Animated.View>
            </Animated.View>
        </MainButton>
    );
}

export default React.memo(ToggleButton);
