import {View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import MainButton from "../../Components/MainButton";
import {ms} from "../../Utils/ScaleUtils";
import MainText from "../../Components/Texts";
import {reInitBookDoctorStore} from "../../Stores/BookDoctorStore";

export default function HomeScreen() {
    const navi = useNavigation();
    return (
        <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
            <MainText bold style={{marginVertical: ms(10)}}>{'Done by quytn'}</MainText>
            <MainButton
                style={{paddingHorizontal: ms(10)}}
                onPress={() => {
                    reInitBookDoctorStore();
                    navi.navigate('BookDoctorScreen');
                }}
                title={'Start'}
            />
        </View>
    );
}
