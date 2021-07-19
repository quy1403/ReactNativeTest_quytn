import React from 'react';
import { Platform, View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import { useApp } from '../../AppProvider';
import { ms } from '../../Utils/ScaleUtils';
import ViewHorizontalCenter from '../View/ViewHorizontalCenter';
import IconBack from '../Icons/IconBack';
import MainText from '../Texts';
import TouchablePlatform from '../TouchablePlatform';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const dAndroid = Platform.OS === 'android';

function NavigationBar(props) {
    const { colors } = useApp();
    const navigation = useNavigation();
    const height = ms(47, 62);
    const inset = useSafeAreaInsets();
    if (props.renderCustom) {
        return (
            <>
                <View style={{ backgroundColor: colors.main, height: !dAndroid ? inset.top : 0 }} />
                <ViewHorizontalCenter
                    spaceBetween={true}
                    style={{
                        width: '100%',
                        height: height,
                        backgroundColor: colors.main,
                    }}
                >
                    {props.renderCustom()}
                </ViewHorizontalCenter>
            </>
        );
    }
    return (
        <>
            <View style={{ backgroundColor: colors.white, height: !dAndroid ? inset.top : 0 }} />
            <ViewHorizontalCenter spaceBetween={true} style={{ width: '100%', height: height, backgroundColor: colors.white }}>
                <ViewHorizontalCenter style={{ flex: 1, justifyContent: 'flex-start' }}>
                    <TouchablePlatform
                        style={{ paddingHorizontal: ms(16), paddingVertical: 10 }}
                        onPress={() => {
                            if (props.onPressBackButton) {
                                props.onPressBackButton();
                                return;
                            }

                            navigation.goBack();
                        }}
                    >
                        <IconBack color={colors.main}/>
                    </TouchablePlatform>
                </ViewHorizontalCenter>
                <MainText size={ms(20, 24)} semiBold>
                    {props.title}
                </MainText>
                <ViewHorizontalCenter style={{ flex: 1, justifyContent: 'flex-end' }}>
                    {props.renderRightComponent ? props.renderRightComponent() : null}
                </ViewHorizontalCenter>
            </ViewHorizontalCenter>
        </>
    );
}

NavigationBar.propTypes = {
    style: ViewPropTypes.style,
    backgroundColor: PropTypes.any,
    width: PropTypes.number,
    height: PropTypes.number,
    renderRightComponent: PropTypes.func,
    renderCustom: PropTypes.func,
    onPressBackButton: PropTypes.func,
    title: PropTypes.string,
};

NavigationBar = React.memo(NavigationBar);
export default NavigationBar;
