import PropTypes from 'prop-types';
import React from 'react';
import { Text, ViewPropTypes } from 'react-native';
import { useApp } from '../../AppProvider';
import { ms } from '../../Utils/ScaleUtils';

const MAIN_TEXT_FONT = 'SegoeUi';

MainText.propTypes = {
    color: PropTypes.string,
    colorRed: PropTypes.bool,
    colorBlue: PropTypes.bool,
    colorWhite: PropTypes.bool,
    colorPrimary: PropTypes.bool,
    colorDarkGray: PropTypes.bool,
    colorLightGray: PropTypes.bool,
    bold: PropTypes.bool,
    light: PropTypes.bool,
    italic: PropTypes.bool,
    semiBold: PropTypes.bool,
    centerAlign: PropTypes.bool,
    size: PropTypes.number,
    lineHeight: PropTypes.number,
    numberOfLines: PropTypes.number,
    underline: PropTypes.bool,
    noTranslate: PropTypes.bool,
    style: ViewPropTypes.style,
    children: PropTypes.any,
    replaceKey: PropTypes.string,
    replaceValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

MainText.defaultProps = {
    color: null,
    colorRed: false,
    colorBlue: false,
    colorWhite: false,
    colorPrimary: false,
    colorDarkGray: false,
    colorLightGray: false,
    bold: false,
    light: false,
    italic: false,
    semiBold: false,
    centerAlign: false,
    size: ms(14, 18),
    lineHeight: null,
    numberOfLines: null,
    underline: false,
    noTranslate: false,
    style: {},
    children: '',
    replaceKey: null,
    replaceValue: null,
};

function MainText(props) {
    const {
        bold,
        light,
        italic,
        semiBold,
        color,
        colorRed,
        colorBlue,
        colorWhite,
        colorPrimary,
        colorLightGray,
        colorDarkGray,
        centerAlign,
        size,
        lineHeight,
        numberOfLines,
        underline,
        noTranslate,
        style,
        children,
        replaceKey,
        replaceValue,
    } = props;
    const { colors, translate } = useApp();

    const getColor = () => {
        if (color) return color;
        if (colorRed) return colors.textRed;
        if (colorBlue) return colors.textBlue;
        if (colorWhite) return colors.textWhite;
        if (colorWhite) return colors.textWhite;
        if (colorPrimary) return colors.textMainColor;
        if (colorDarkGray) return colors.textDarkGray;
        if (colorLightGray) return colors.textLightGray;
        return colors.textColor;
    };

    const getFontFamily = () => {
        if (bold) return '-Bold';
        if (light) return '-Light';
        if (italic) return '-Italic';
        if (semiBold) return '-SemiBold';
        return '';
    };

    let textStyle = {
        color: getColor(),
        fontSize: size,
        // fontFamily: MAIN_TEXT_FONT + getFontFamily(),
        lineHeight: size * 1.25,
        textAlign: centerAlign ? 'center' : 'left',
        textDecorationLine: underline ? 'underline' : 'none',
        ...style,
    };

    if (bold) textStyle.fontWeight = 'bold';

    const getContent = () => {
        if (noTranslate) return children;
        const text = translate(children) || children;
        if (replaceKey !== null && replaceValue !== null) return text.replace(`{${replaceKey}}`, replaceValue + '');
        return text;
    };

    return (
        <Text {...props} allowFontScaling={false} style={textStyle} numberOfLines={numberOfLines}>
            {getContent()}
        </Text>
    );
}

export default React.memo(MainText);
