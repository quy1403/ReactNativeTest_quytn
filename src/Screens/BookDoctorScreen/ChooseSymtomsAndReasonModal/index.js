import React from 'react';
import { useApp, useMergeState } from '../../../AppProvider';
import ChooseSymtomsAndReason from '../ChooseSymtomsAndReason';
import { BottomModal, SlideAnimation } from 'react-native-modals';
import { Platform, View } from 'react-native';
import { ms } from '../../../Utils/ScaleUtils';
import { bookDoctorStore } from '../../../Stores/BookDoctorStore';
import { Observer } from 'mobx-react-lite';
import AddSymptom from "./AddSymptom";
import MainText from "../../../Components/Texts";

export default function ChooseSymtomsAndReasonModal() {
    const { colors } = useApp();

    const [state, setState] = useMergeState({
        visible: true,
    });
    return (
        <Observer>
            {() => (
                <BottomModal
                    disableSwipe={Platform.OS === 'ios'}
                    rounded={false}
                    visible={bookDoctorStore.visibleAddReasonModal}
                    swipeDirection={['right']}
                    modalAnimation={new SlideAnimation({ slideFrom: 'bottom' })}
                    style={{ alignItems: 'center', justifyContent: 'flex-end' }}
                    onSwipeOut={() => bookDoctorStore.setVisibleAddReasonModal(false)}
                    onTouchOutside={() => bookDoctorStore.setVisibleAddReasonModal(false)}
                    onHardwareBackPress={() => bookDoctorStore.setVisibleAddReasonModal(false)}
                >
                    <View style={{ height: ms(500), padding: ms(10) }}>
                        <AddSymptom />
                        <ChooseSymtomsAndReason />
                    </View>
                </BottomModal>
            )}
        </Observer>
    );
}
