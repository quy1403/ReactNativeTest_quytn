import React from 'react';
import { View } from 'react-native';

type PropsType = {
    style?: string,
    flex1?: boolean,
    backgroundColor?: any,
};
export default function ViewVerticalCenterAll(props: PropsType) {
    let viewStyle = {
        justifyContent: 'center',
        alignItems: 'center',
    };
    if (props.flex1) {
        viewStyle = {
            flex: 1,
            ...viewStyle,
        };
    }
    if (props.backgroundColor) {
        viewStyle = {
            backgroundColor: props.backgroundColor,
            ...viewStyle,
        };
    }
    return (
        <View {...props} style={[viewStyle, props.style]}>
            {props.children}
        </View>
    );
}
