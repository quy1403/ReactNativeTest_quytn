import React, { Component } from 'react';
import { useApp, withAppHook } from '../../../AppProvider';
import { ms } from '../../../Utils/ScaleUtils';
import { LayoutAnimation, StyleSheet, View } from 'react-native';
import { bookDoctorStore } from '../../../Stores/BookDoctorStore';
import { Observer } from 'mobx-react-lite';
import MainText from '../../../Components/Texts';
import TouchablePlatform from '../../../Components/TouchablePlatform';
import IconCheckMark from '../../../Components/Icons/IconCheckmark';
import IconAddNew from '../../../Components/Icons/IconAddNew';
import AppStyle from '../../../Utils/AppStyle';
import _ from 'lodash';

const layoutAnimConfig = {
    duration: 300,
    update: {
        type: LayoutAnimation.Types.easeInEaseOut,
    },
    delete: {
        duration: 100,
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity,
    },
};

function animationLayout() {
    LayoutAnimation.configureNext(layoutAnimConfig);
}

export default function ChooseSymtomsAndReason() {
    const { colors } = useApp();
    return (
        <View style={{ marginVertical: ms(10) }}>
            <Observer>
                {() => {
                    const listSelectedSymtom = _.filter(bookDoctorStore.symptomList, { checked: true });
                    const showTitle = listSelectedSymtom.length > 0 ? true : false;
                    return (
                        <>
                            {showTitle ? (
                                <MainText bold style={style.mainTitle}>
                                    {'Selected symptoms and reasons'}
                                </MainText>
                            ) : null}
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                {bookDoctorStore.symptomList.map((item, index) => {
                                    if (item.checked)
                                        return (
                                            <ChooseItem
                                                checked={item.checked}
                                                name={item.name}
                                                onPress={() => {
                                                    bookDoctorStore.checkSymptom(index);
                                                    animationLayout();
                                                }}
                                            />
                                        );
                                })}
                            </View>
                        </>
                    );
                }}
            </Observer>

            <MainText bold style={style.mainTitle}>
                {'Choose your symptoms and reasons'}
            </MainText>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <Observer>
                    {() => {
                        return (
                            <>
                                {bookDoctorStore.symptomList.map((item, index) => {
                                    if (!item.checked)
                                        return (
                                            <ChooseItem
                                                checked={item.checked}
                                                name={item.name}
                                                onPress={() => {
                                                    bookDoctorStore.checkSymptom(index);
                                                    animationLayout();
                                                }}
                                            />
                                        );
                                })}
                            </>
                        );
                    }}
                </Observer>
            </View>
        </View>
    );
}
const style = StyleSheet.create({
    touch: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    mainTitle: {
        marginVertical: ms(10),
    },
});

class ChooseItem extends Component {
    shouldComponentUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean {
        return false;
    }

    render() {
        const { colors } = this.props.useApp;
        const props = this.props;
        console.log('redner ChooseItem ', props.name);
        return (
            <TouchablePlatform
                onPress={props.onPress}
                style={{
                    padding: ms(10),
                    borderRadius: ms(5),
                    backgroundColor: props.checked? colors.lightBlue :colors.white,
                    margin: ms(5),
                    flexDirection: 'row',
                    ...AppStyle.shadow,
                }}
            >
                <MainText style={{ marginRight: ms(10) }}>{props.name}</MainText>
                {props.checked ? <IconCheckMark /> : <IconAddNew />}
            </TouchablePlatform>
        );
    }
}

ChooseItem = withAppHook(ChooseItem);
