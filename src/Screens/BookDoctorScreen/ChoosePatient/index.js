import React, { Component } from 'react';
import { useApp, withAppHook } from '../../../AppProvider';
import { ms } from '../../../Utils/ScaleUtils';
import { LayoutAnimation, StyleSheet, View } from 'react-native';
import { bookDoctorStore } from '../../../Stores/BookDoctorStore';
import { Observer } from 'mobx-react-lite';
import MainText from '../../../Components/Texts';
import TouchablePlatform from '../../../Components/TouchablePlatform';
import IconCheckMark from '../../../Components/Icons/IconCheckmark';
import AppStyle from '../../../Utils/AppStyle';
import IconAddNew from "../../../Components/Icons/IconAddNew";
import AddPatientModal from "../AddPatientModal";

const HEIGHT = ms(50);
const WIDTH = ms(300);
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

export default function ChoosePatient() {
    const { colors } = useApp();

    return (
        <>
            <MainText bold style={style.mainTitle}>{'Choose patient'}</MainText>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <Observer>
                    {() => {
                        return (
                            <>
                              <ChooseItem
                                checked={false}
                                name={'ADD NEW'}
                                isAddNew={true}
                                onPress={() => {
                                  bookDoctorStore.setVisibleAddPatientModal(true)
                                }}
                              />
                                {bookDoctorStore.patientList.map((item, index) => {
                                    return (
                                        <ChooseItem
                                            checked={item.checked}
                                            name={item.name}
                                            onPress={() => {
                                                bookDoctorStore.checkPatient(index);
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

          <AddPatientModal/>
        </>
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

// const ChooseItem = React.memo(props => {
//     const { colors } = useApp();
//     console.log('redner ChooseItem ', props.name);
//     return (
//         <TouchablePlatform
//             onPress={props.onPress}
//             style={{
//                 padding: ms(10),
//                 borderRadius: ms(5),
//                 backgroundColor: colors.main,
//                 margin: ms(5),
//                 flexDirection: 'row',
//             }}
//         >
//             <MainText style={{ marginRight: ms(10) }}>{props.name}</MainText>
//             {props.checked ? <IconCheckMark /> : <IconAddNew />}
//         </TouchablePlatform>
//     );
// });

class ChooseItem extends Component {
    shouldComponentUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean {
        return nextProps.checked !== this.props.checked;
    }

    render() {
        const { colors } = this.props.useApp;
        const props = this.props;
        console.log('ddddd ChooseItem ', props.name);
        return (
            <TouchablePlatform
                onPress={props.onPress}
                style={{
                    padding: ms(10),
                    borderRadius: ms(5),
                    backgroundColor: colors.white,
                    margin: ms(5),
                    // borderColor: colors.main,
                  borderColor: props.checked ? colors.main: 'transparent',
                    borderWidth:ms(1),
                    flexDirection: 'row',
                    ...AppStyle.shadow,
                }}
            >
                <MainText style={{ marginRight: ms(10) }}>{props.name}</MainText>
                {props.isAddNew ? <IconAddNew /> : null}
            </TouchablePlatform>
        );
    }
}

ChooseItem = withAppHook(ChooseItem);
