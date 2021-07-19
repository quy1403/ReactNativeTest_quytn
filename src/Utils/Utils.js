import _ from 'lodash';
import { Dimensions, Platform } from 'react-native';

const Utils = {
    log: log => {
        console.log(log || '');
    },
    isNumber: n => {
        return _.isNumber(n);
    },
    isString: n => {
        return _.isString(n);
    },
    isArray: n => {
        return _.isArray(n);
    },
    isBoolean: n => {
        return _.isBoolean(n);
    },
    isInteger: n => {
        return _.isInteger(n);
    },
    isNull: n => {
        return _.isNull(n);
    },
    isObject: n => {
        return _.isObject(n);
    },
    isDate: n => {
        return _.isDate(n);
    },
    isIOS: () => {
        return Platform.OS === 'ios';
    },
    isAndroid: () => {
        return Platform.OS === 'android';
    },
    isIphoneX: () => {
        const dimen = Dimensions.get('window');
        return (
            Platform.OS === 'ios' &&
            !Platform.isPad &&
            !Platform.isTVOS &&
            (dimen.height === 780 ||
                dimen.width === 780 ||
                dimen.height === 812 ||
                dimen.width === 812 ||
                dimen.height === 844 ||
                dimen.width === 844 ||
                dimen.height === 896 ||
                dimen.width === 896 ||
                dimen.height === 926 ||
                dimen.width === 926)
        );
    },
};

export default Utils;
