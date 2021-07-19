import React from 'react';
import { useApp, useMergeState } from '../../../../AppProvider';
import { TextInput, View } from 'react-native';
import { ms } from '../../../../Utils/ScaleUtils';
import MainButton from '../../../../Components/MainButton';
import Utils from '../../../../Utils/Utils';
import { bookDoctorStore } from '../../../../Stores/BookDoctorStore';
import MainText from '../../../../Components/Texts';

export default function AddSymptom() {
    const { colors } = useApp();

    const [state, setState] = useMergeState({
        visible: true,
        text: '',
    });
    return (
        <View>
            <MainText bold style={{ marginVertical: ms(10) }}>
                {'Symptom and condition'}
            </MainText>

            <MainText style={{ marginVertical: ms(5) }}>{'Please spectify your symptom'}</MainText>
            <View style={{ backgroundColor: colors.lightBlue, padding: ms(10), borderRadius: ms(5), marginVertical: ms(10) }}>
                <TextInput
                    style={{ paddingVertical: 0, width: ms(200) }}
                    placeholder={'Symptom...'}
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
                    bookDoctorStore.addSymptom(state.text);
                    setState({ text: '' });
                }}
            />
        </View>
    );
}
