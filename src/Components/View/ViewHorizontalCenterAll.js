import React from 'react';
import { View } from 'react-native';

//** DEFAULT WEIGHT = 500, SIZE=15
//*** SU DUNG     <MainText weight={400} centerAlign colorLightGray lineHeight={100}>{'HELLO'}</MainText>
type PropsType = {
    style?: string,
    flex1?: boolean,
    between?: boolean,
    backgroundColor?: any,
};
export default function ViewHorizontalCenterAll(props: PropsType) {
    let viewStyle = {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    };

    if (props.flex1) {
        viewStyle = {
            flex: 1,
            ...viewStyle,
        };
    }

    if (props.between) {
        viewStyle = {
            justifyContent: 'space-between',
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
