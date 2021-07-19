import React from 'react';
import { useApp, useMergeState } from '../../../AppProvider';
import SearchBar from '../../../Components/SearchBar';
import { ms } from '../../../Utils/ScaleUtils';
import TouchablePlatform from '../../../Components/TouchablePlatform';
import MainText from '../../../Components/Texts';
import { bookDoctorStore } from '../../../Stores/BookDoctorStore';
import ChooseTimeModal from '../ChooseTimeModal';
import { Observer } from 'mobx-react-lite';
import Icon2ArrowDown from '../../../Components/Icons/Icon2ArrowDown';

export default function ChooseTime() {
    const { colors } = useApp();

    function handleOnPress() {
        bookDoctorStore.setVisibleChooseTimeModal(true);
    }

    function renderChooseTime() {
        return (
            <TouchablePlatform onPress={handleOnPress} style={{ padding: ms(10), flexDirection: 'row', alignItems: 'center', backgroundColor: colors.yellow, borderRadius: ms(5) }}>
                <Observer>
                    {() => {
                        let stringTimeSelected = 'Now';
                        if (bookDoctorStore.selectedDateIndex !== 0 || bookDoctorStore.selectedTimeIndex !== 0) {
                            stringTimeSelected =
                                bookDoctorStore.dateDataList[bookDoctorStore.selectedDateIndex].title +
                                ' ' +
                                bookDoctorStore.timeDataList[bookDoctorStore.selectedTimeIndex].title;
                        }
                        return <MainText style={{marginRight: ms(10)}}>{stringTimeSelected}</MainText>;
                    }}
                </Observer>

                <Icon2ArrowDown color={colors.main}/>
            </TouchablePlatform>
        );
    }

    return (
        <TouchablePlatform
            style={{ marginVertical: ms(10) }}
            onPress={() => {
                bookDoctorStore.setVisibleAddReasonModal(true);
            }}
        >
            <SearchBar style={{ height: ms(50) }} rightView={renderChooseTime()} />
            <ChooseTimeModal />
        </TouchablePlatform>
    );
}
