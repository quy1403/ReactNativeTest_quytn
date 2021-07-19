import React from 'react';
import { useApp } from '../../../AppProvider';
import { BottomModal, SlideAnimation } from 'react-native-modals';
import { Dimensions, View } from 'react-native';
import { ms } from '../../../Utils/ScaleUtils';
import { bookDoctorStore } from '../../../Stores/BookDoctorStore';
import { Observer } from 'mobx-react-lite';
import TimePicker from './TimePicker';
import ViewHorizontal from '../../../Components/View/ViewHorizontal';
import MainText from '../../../Components/Texts';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ChooseTimeModal() {
    const { colors } = useApp();
    return (
        <Observer>
            {() => (
                <BottomModal
                    disableSwipe={true}
                    rounded={false}
                    visible={bookDoctorStore.visibleChooseTimeModal}
                    swipeDirection={[]}
                    modalAnimation={new SlideAnimation({ slideFrom: 'bottom' })}
                    style={{ alignItems: 'center', justifyContent: 'flex-end' }}
                    onTouchOutside={() => bookDoctorStore.setVisibleChooseTimeModal(false)}
                    onHardwareBackPress={() => bookDoctorStore.setVisibleChooseTimeModal(false)}
                >
                    <MainText size={ms(16)} style={{ margin: ms(20) }} bold>{'Schedule Appointment'}</MainText>
                    <View
                        style={{
                            padding: ms(10),
                            paddingBottom: useSafeAreaInsets().bottom,
                            backgroundColor: colors.white,
                            width: Dimensions.get('window').width,
                        }}
                    >
                        <ViewHorizontal>
                            <View style={{ flex: 1 }}>
                                <TimePicker
                                    data={bookDoctorStore.dateDataList}
                                    dataKey={'title'}
                                    style={{ height: ms(300) }}
                                    onChange={(info, index) => {
                                        bookDoctorStore.updateSelectedDateIndex(index);
                                    }}
                                    currentIndex={bookDoctorStore.selectedDateIndex}
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <TimePicker
                                    data={bookDoctorStore.timeDataList}
                                    dataKey={'title'}
                                    style={{ height: ms(300) }}
                                    onChange={(info, index) => {
                                        bookDoctorStore.updateSelectedTimeIndex(index);
                                    }}
                                    currentIndex={bookDoctorStore.selectedTimeIndex}
                                />
                            </View>
                        </ViewHorizontal>
                    </View>
                </BottomModal>
            )}
        </Observer>
    );
}
