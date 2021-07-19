export const lightColors = {
    //** main app color
    main: '#009285',

    //** app colors
    white: '#ffffff',
    black: '#393939',
    lightGray: '#A4A4A4',
    darkGray: '#707070',
    lightOrange: '#FEF1EF',
    green: '#009E0F',
    red: '#D90000',
    blue: '#2B78E4',
    lightBlue: '#dfefff',
    border: '#39393939',
    yellow: '#ffa000',

    //** colors of text
    textMainColor: '#EB5A43',
    textWhite: '#ffffff',
    textColor: '#393939',
    textLightGray: '#A4A4A4',
    textDarkGray: '#707070',
    textOrange: '#DE7804', // DE7804
    textGreen: '#009E0F',
    textRed: '#D90000',
    textBlue: '#2B78E4',
    textDisable: 'rgba(57, 57, 57, 0.38)',

    //** colors of textInput
    textInputColor: '#ffffff',
    placeholderInputColor: '#ffffff',
    textInputUnderlineColor: '#ffffff',

    //** line colors
    lineColor: '#CFCFCF',
    //**
    backgroundColor: '#ffffff',
};

export const darkColors = {
    ...lightColors,
};

const modeApp = {
    lightColors: lightColors,
    darkColors: darkColors,
};

export function colorsApp(colorMode) {
    return modeApp[colorMode];
}

export default lightColors;
