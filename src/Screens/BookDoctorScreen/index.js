import { ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import NavigationBar from '../../Components/NavigationBar';
import AppStyle from '../../Utils/AppStyle';
import { useApp } from '../../AppProvider';
import ConsultTypeSwitch from './ConsultTypeSwitch';
import ChooseSymtomsAndReason from './ChooseSymtomsAndReason';
import ChooseSymtomsAndReasonModal from './ChooseSymtomsAndReasonModal';
import { ms } from '../../Utils/ScaleUtils';
import ViewVerticalCenterAll from '../../Components/View/ViewVerticalCenterAll';
import ChooseTime from './ChooseTime';
import ChoosePatient from './ChoosePatient';
import MainButton from '../../Components/MainButton';
import { bookDoctorStore } from '../../Stores/BookDoctorStore';
import _ from 'lodash';
import { CONSULT_TYPE } from '../../Commons/Constanst';

export default function BookDoctorScreen() {
    const navi = useNavigation();
    const { color } = useApp();

    function onPressNext() {
        const patientList = _.filter(bookDoctorStore.patientList, { checked: true });
        const symptomList = _.filter(bookDoctorStore.symptomList, { checked: true });

        let stringTimeSelected = 'Now';
        if (bookDoctorStore.selectedDateIndex !== 0 || bookDoctorStore.selectedTimeIndex !== 0) {
            stringTimeSelected =
                bookDoctorStore.dateDataList[bookDoctorStore.selectedDateIndex].title +
                ' ' +
                bookDoctorStore.timeDataList[bookDoctorStore.selectedTimeIndex].title;
        }
        const formData =
            '* SELECTED CONSULT TYPE: ' +
            (bookDoctorStore.consultType === CONSULT_TYPE.DOCTOR ? 'DOCTOR' : 'VIDEO') +
            '\n* SELECTED PATIENT LIST: ' +
            JSON.stringify(patientList) +
            '\n* SELECTED TIME: ' +
            stringTimeSelected +
            '\n* SELECTED SYMTOM LIST: ' +
            JSON.stringify(symptomList);

        alert(formData);
    }

    return (
        <>
            <NavigationBar title={'Book a Doctor'} />
            <ScrollView style={[AppStyle.flex1, { backgroundColor: 'white' }]} contentContainerStyle={{ padding: ms(10) }}>
                <ViewVerticalCenterAll>
                    <ConsultTypeSwitch />
                </ViewVerticalCenterAll>
                <ChoosePatient />
                <ChooseTime />
                <ChooseSymtomsAndReason />
                <ChooseSymtomsAndReasonModal />

                <MainButton title={'Next'} onPress={onPressNext} />
            </ScrollView>
        </>
    );
}
