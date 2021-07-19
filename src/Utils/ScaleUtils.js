import { Dimensions } from 'react-native';
import Utils from './Utils';

const { width, height } = Dimensions.get('window');
const [shortDimension, longDimension] = width < height ? [width, height] : [height, width];

//Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 360;
const guidelineBaseHeight = 720;

const guidelineBaseWidthIpad = 768;
const guidelineBaseHeightIpad = 1024;

export const isTablet = () => {
    if (shortDimension >= 720) return true;
    return false;
};

export const scale = (sizeiPhone, sizeIpad) => {
    if (!Utils.isNumber(sizeIpad)) sizeIpad = sizeiPhone;
    if (isTablet()) return (shortDimension / guidelineBaseWidthIpad) * sizeIpad;
    return (shortDimension / guidelineBaseWidth) * sizeiPhone;
};

export const moderateScale = (sizeiPhone, sizeIpad, factor = 0.5) => {
    if (!Utils.isNumber(sizeIpad)) sizeIpad = sizeiPhone;
    const size = isTablet() ? sizeIpad : sizeiPhone;
    return size + (scale(sizeiPhone, sizeIpad) - size) * factor;
};

export const s = scale;
export const ms = moderateScale;

export const verticalScale = size => (longDimension / guidelineBaseHeight) * size;
export const vs = verticalScale;

export const resize = (sizeiPhone, sizeiPad) => isTablet() ? (sizeiPad || sizeiPhone) : sizeiPhone;
export const resizeRotation = (isPortrait, sizeiPhone, sizeiPad, sizeiPad2) => {
    return ms(sizeiPhone, isPortrait ? sizeiPad : sizeiPad2)
}

export const rs = resize;
export const rsr = resizeRotation;
