import React from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';

type PropsType = {
    style?: string,
    flex1?: boolean,
    spaceBetween?: boolean,
    spaceAround?: boolean,
    backgroundColor?: any,
    animatable?: any,
};

function ViewVerticalCenter(props: PropsType, ref) {
    let viewStyle = {
        alignItems: 'center',
    };

    if (props.flex1) {
        viewStyle = {
            flex: 1,
            ...viewStyle,
        };
    }

    if (props.spaceBetween) {
        viewStyle = {
            justifyContent: 'space-between',
            ...viewStyle,
        };
    }

    if (props.spaceAround) {
        viewStyle = {
            justifyContent: 'space-around',
            ...viewStyle,
        };
    }

    if (props.backgroundColor) {
        viewStyle = {
            backgroundColor: props.backgroundColor,
            ...viewStyle,
        };
    }

    if (props.animatable)
        return (
            <Animatable.View {...props} style={[viewStyle, props.style]} ref={ref}>
                {props.children}
            </Animatable.View>
        );
    return (
        <View {...props} style={[viewStyle, props.style]} ref={ref}>
            {props.children}
        </View>
    );
}

export default React.forwardRef(ViewVerticalCenter);
