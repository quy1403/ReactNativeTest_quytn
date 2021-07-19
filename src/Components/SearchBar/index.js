import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, ViewPropTypes } from 'react-native';
import { useApp } from '../../AppProvider';
import { ms } from '../../Utils/ScaleUtils';
import IconSearch from '../Icons/IconSearch';

SearchBar.propTypes = {
    filter: PropTypes.bool,
    style: ViewPropTypes.style,
    onOpenFilter: PropTypes.func,
    onSubmit: PropTypes.func,
};

SearchBar.defaultProps = {
    filter: false,
    style: {},
    onOpenFilter: () => {},
    onSubmit: () => {},
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    background: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderRadius: ms(4),
    },

    input: {
        flex: 1,
        paddingVertical: 0,
        borderBottomWidth: 0,
    },
});

function SearchBar(props) {
    const { style, onSubmit } = props;
    const { colors } = useApp();

    const [keyword, setKeyword] = useState('');

    return (
        <View style={{ ...styles.container, ...style }}>
            <View style={{ ...styles.container, flex: 1 }}>
                <View style={{ backgroundColor: colors.lightBlue, ...styles.background }} />
                <IconSearch style={{ marginHorizontal: ms(8) }} />
                <TextInput
                    value={keyword}
                    style={styles.input}
                    onChangeText={setKeyword}
                    placeholder={'Add Symptoms'}
                    onFinishEditing={(keyword) => onSubmit(keyword)}
                />
                {props.rightView}
            </View>
        </View>
    );
}
export default React.memo(SearchBar);
