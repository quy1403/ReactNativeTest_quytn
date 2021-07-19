import {action, makeObservable, observable} from 'mobx';
import {CONSULT_TYPE} from '../Commons/Constanst';
import Utils from '../Utils/Utils';
import dayjs from 'dayjs';

export class BookDoctorStore {
    consultType = CONSULT_TYPE.DOCTOR;
    symptomList = [
        {name: 'Symp 1', checked: false},
        {name: 'Symp 2', checked: false},
        {name: 'Symp 3', checked: false},
        {name: 'Symp 4', checked: false},
    ];
    patientList = [
        {name: 'Patient 1', checked: false},
        {name: 'Patient 2', checked: false},
        {name: 'Patient 3', checked: false},
        {name: 'Patient 4', checked: false},
    ];

    visibleAddPatientModal = false;
    visibleAddReasonModal = false;
    visibleChooseTimeModal = false;

    dateDataList = [];
    timeDataList = [];
    selectedDate = dayjs();
    selectedDateIndex = 0;
    selectedTime = 'Now';
    selectedTimeIndex = 0;

    constructor() {
        makeObservable(this, {
            consultType: observable,
            symptomList: observable,
            patientList: observable,
            visibleAddPatientModal: observable,
            visibleAddReasonModal: observable,
            visibleChooseTimeModal: observable,
            selectedDateIndex: observable,
            selectedTimeIndex: observable,
            dateDataList: observable,
            timeDataList: observable,

            updateConsultType: action,
            checkSymptom: action,
            checkPatient: action,
            addNewPatient: action,
            setVisibleAddPatientModal: action,
            setVisibleAddReasonModal: action,
            setVisibleChooseTimeModal: action,
        });

        this.initDateAndTimeDataList();
    }

    initDateAndTimeDataList() {
        let arr = [];
        for (let i = 0; i < 30; i++) {
            let day = dayjs().add(i, 'day');
            arr.push({day, title: day.format('ddd DD/MM/YYYY').toString()});
        }

        this.dateDataList = arr;

        let arrTime = [];
        arrTime.push({title: 'Now'});
        for (let i = 0; i < 24; i++) {
            arrTime.push({startTime: i, endTime: i + 1, title: i + ':00 - ' + (i + 1) + ':00'});
        }

        this.timeDataList = arrTime;
    }

    updateConsultType(type) {
        this.consultType = type;
    }

    checkSymptom(index) {
        this.symptomList[index].checked = !this.symptomList[index].checked;
    }

    checkPatient(index) {
        this.patientList[index].checked = !this.patientList[index].checked;
    }

    addNewPatient(name) {
        if (!Utils.isString(name)) return;
        this.patientList.push({
            name: name,
            checked: true,
        });
    }

    addSymptom(name) {
        if (!Utils.isString(name)) return;
        this.symptomList.push({
            name: name,
            checked: true,
        });
    }

    setVisibleAddPatientModal(visible) {
        this.visibleAddPatientModal = visible;
    }

    setVisibleAddReasonModal(visible) {
        this.visibleAddReasonModal = visible;
    }

    setVisibleChooseTimeModal(visible) {
        this.visibleChooseTimeModal = visible;
    }

    setVisibleChooseTimeModal(visible) {
        this.visibleChooseTimeModal = visible;
    }

    updateSelectedDateIndex(index) {
        if (Utils.isNumber(index)) this.selectedDateIndex = index;
    }

    updateSelectedTimeIndex(index) {
        if (Utils.isNumber(index)) this.selectedTimeIndex = index;
    }
}

let bookDoctorStore = new BookDoctorStore();
export {bookDoctorStore};

function reInitBookDoctorStore() {
    bookDoctorStore = new BookDoctorStore();
}
export {reInitBookDoctorStore};
