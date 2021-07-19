import React, { useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useApp } from '../../../AppProvider';
import ViewHorizontalCenter from '../../../Components/View/ViewHorizontalCenter';
import { ms } from '../../../Utils/ScaleUtils';
import { StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import TouchablePlatform from '../../../Components/TouchablePlatform';
import { bookDoctorStore } from '../../../Stores/BookDoctorStore';
import { CONSULT_TYPE } from '../../../Commons/Constanst';
import { Observer } from 'mobx-react-lite';
import { autorun } from 'mobx';
import AppStyle from "../../../Utils/AppStyle";

const HEIGHT = ms(50);
const WIDTH = ms(300);
export default function ConsultTypeSwitch() {
    const navi = useNavigation();
    const { colors } = useApp();

    const refViewSwitch = useRef();
    const refTitle1 = useRef();
    const refTitle2 = useRef();

    function handlePress(type) {
        bookDoctorStore.updateConsultType(type);
        // bookDoctorStore.updateConsultType2(type);
    }

    function focusEffect() {
        const left = bookDoctorStore.consultType === CONSULT_TYPE.VIDEO ? WIDTH / 2 : 0;
        refViewSwitch.current?.transitionTo({ translateX: left });
        const colorDeactive = colors.textColor;
        const colorActive = colors.main;
        if (bookDoctorStore.consultType === CONSULT_TYPE.VIDEO) {
            refTitle1.current?.transitionTo({ color: colorDeactive });
            refTitle2.current?.transitionTo({ color: colorActive });
        } else if (bookDoctorStore.consultType === CONSULT_TYPE.DOCTOR) {
            refTitle1.current?.transitionTo({ color: colorActive });
            refTitle2.current?.transitionTo({ color: colorDeactive });
        }
    }

    useEffect(() => {
        const dispose = autorun(() => {
            focusEffect();
        });

        return () => dispose();
    });

    return (
        <Observer>
            {() => {
                return (
                    <ViewHorizontalCenter style={{ width: WIDTH, height: HEIGHT + 50 }}>
                        <View style={{ ...StyleSheet.absoluteFill, alignItems: 'center', justifyContent: 'center', zIndex: -2 }}>
                            <View
                                style={{
                                    width: WIDTH,
                                    height: HEIGHT - 10,
                                    backgroundColor: colors.lightBlue,
                                    borderRadius: ms(10),
                                }}
                            />
                        </View>
                        <View style={{ ...StyleSheet.absoluteFill, justifyContent: 'center', zIndex: -1 }}>
                            <Animatable.View
                                ref={refViewSwitch}
                                useNativeDriver={true}
                                style={{
                                    position: 'absolute',
                                    width: ms(150),
                                    height: HEIGHT,
                                    backgroundColor: colors.white,
                                    borderRadius: ms(10),
                                    ...AppStyle.shadow
                                }}
                            />
                        </View>
                        <TouchablePlatform style={style.touch} onPress={() => handlePress(CONSULT_TYPE.DOCTOR)}>
                            <Animatable.Text ref={refTitle1}>{'Doctor'}</Animatable.Text>
                        </TouchablePlatform>
                        <TouchablePlatform style={style.touch} onPress={() => handlePress(CONSULT_TYPE.VIDEO)}>
                            <Animatable.Text ref={refTitle2}>{'Video Consult'}</Animatable.Text>
                        </TouchablePlatform>
                    </ViewHorizontalCenter>
                );
            }}
        </Observer>
    );
}

const style = StyleSheet.create({
    touch: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
});
