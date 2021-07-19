import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, ViewPropTypes } from 'react-native';
import { useApp } from '../../AppProvider';
import { ms } from '../../Utils/ScaleUtils';
import MainText from '../Texts';
import TouchablePlatform from '../TouchablePlatform';
import ViewShadow from '../View/ViewShadow';

MainButton.propTypes = {
    disabled: PropTypes.bool,
    title: PropTypes.string,
    shadow: PropTypes.bool,
    white: PropTypes.bool,
    normal: PropTypes.bool,
    outline: PropTypes.bool,
    children: PropTypes.any,
    textColor: PropTypes.string,
    textSize: PropTypes.number,
    textHeight: PropTypes.number,
    textStyle: ViewPropTypes.style,
    textProps: PropTypes.object,
    style: ViewPropTypes.style,
    onPress: PropTypes.func,
    notViewShadow: PropTypes.bool,
};

MainButton.defaultProps = {
    disabled: false,
    title: '',
    shadow: false,
    white: false,
    normal: false,
    outline: false,
    children: null,
    textColor: null,
    textSize: ms(16),
    textHeight: ms(19),
    textStyle: {},
    textProps: {},
    style: {},
    onPress: () => {},
    notViewShadow: false,
};

const styles = StyleSheet.create({
    no_shadow: {
        elevation: 0,
        shadowOpacity: 0,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: ms(1.5, 1.5),
        borderRadius: ms(4, 4),
    },
});

function MainButton(props) {
    const {
        disabled,
        title,
        shadow,
        white,
        normal,
        outline,
        children,
        textColor,
        textSize,
        textHeight,
        textStyle,
        textProps,
        style,
        onPress,
    } = props;
    const { colors } = useApp();

    const getBackgroundColor = () => {
        if (disabled) return colors.darkGray;
        if (normal) return 'transparent';
        if (white || outline) return colors.white;
        return colors.main;
    };

    const getTextColor = () => {
        if (textColor) return textColor;
        if (disabled) return colors.textWhite;
        if (normal) return colors.textColor;
        if (white || outline) return colors.textMainColor;
        return colors.textWhite;
    };

    const content = (
        <TouchablePlatform
            {...props}
            disabled={disabled}
            onPress={onPress}
            style={{
                ...styles.button,
                borderColor: colors.main,
                borderWidth: outline ? ms(1) : 0,
                backgroundColor: getBackgroundColor(),
                paddingVertical: ms(8, 12) + (outline ? 0 : ms(1)),
                ...style,
            }}
        >
            {children ? (
                children
            ) : (
                <MainText
                    semiBold
                    centerAlign
                    color={getTextColor()}
                    size={textSize}
                    lineHeight={textHeight}
                    style={{ ...textStyle }}
                    {...textProps}
                >
                    {title}
                </MainText>
            )}
        </TouchablePlatform>
    );

    if (props.notViewShadow) return content;
    return <ViewShadow style={{ ...(shadow ? null : styles.no_shadow) }}>{content}</ViewShadow>;
}

export default React.memo(MainButton);
