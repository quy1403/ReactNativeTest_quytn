import React from 'react';
import { useApp, useMergeState } from '../../../AppProvider';
import { Modal, SlideAnimation } from 'react-native-modals';
import { Dimensions, Platform, TextInput, View } from 'react-native';
import { ms } from '../../../Utils/ScaleUtils';
import MainButton from '../../../Components/MainButton';
import { bookDoctorStore } from '../../../Stores/BookDoctorStore';
import Utils from '../../../Utils/Utils';
import { Observer } from 'mobx-react-lite';

export default function AddPatientModal() {
    const { colors } = useApp();

    const [state, setState] = useMergeState({
        visible: true,
        text: '',
    });
    return (
        <Observer>
            {() => (
                <Modal
                    disableSwipe={Platform.OS === 'ios'}
                    rounded={false}
                    visible={bookDoctorStore.visibleAddPatientModal}
                    swipeDirection={['right']}
                    modalAnimation={new SlideAnimation({ slideFrom: 'top' })}
                    style={{ alignItems: 'center', justifyContent: 'flex-start' }}
                    onSwipeOut={() => bookDoctorStore.setVisibleAddPatientModal(false)}
                    onTouchOutside={() => bookDoctorStore.setVisibleAddPatientModal(false)}
                    onHardwareBackPress={() => bookDoctorStore.setVisibleAddPatientModal(false)}
                >
                    <View
                        style={{
                            padding: ms(10),
                            height: ms(200),
                            width: Dimensions.get('window').width,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <View style={{ backgroundColor: colors.lightBlue, padding: ms(10), borderRadius: ms(5), margin: ms(10) }}>
                            <TextInput
                                style={{ paddingVertical: 0, width: ms(200) }}
                                placeholder={'Enter...'}
                                value={state.text}
                                onChangeText={text => setState({ text: text })}
                            />
                        </View>
                        <MainButton
                            title={'ADD'}
                            style={{ width: ms(200) }}
                            onPress={() => {
                                if (!Utils.isString(state.text)) {
                                    return;
                                }
                                bookDoctorStore.addNewPatient(state.text);
                                setState({ text: '' });
                            }}
                        />
                    </View>
                </Modal>
            )}
        </Observer>
    );
}
