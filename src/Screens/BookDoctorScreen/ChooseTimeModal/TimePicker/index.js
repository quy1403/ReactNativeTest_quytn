import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { Animated, Platform, StyleSheet, View, ViewPropTypes } from 'react-native';

import { useApp } from "../../../../AppProvider";
import MainText from "../../../../Components/Texts";
import { ms } from "../../../../Utils/ScaleUtils";

TimePicker.propTypes = {
  data: PropTypes.array.isRequired,
  dataKey: PropTypes.string.isRequired,
  currentIndex: PropTypes.number,
  style: ViewPropTypes.style,
  onChange: PropTypes.func,
};

TimePicker.defaultProps = {
  data: [],
  dataKey: null,
  currentIndex: 0,
  style: {},
  onChange: () => {},
};

const ITEM_HEIGHT = Math.round(ms(20, 24) + ms(14, 18) * 2);

const styles = StyleSheet.create({
  item: {
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: ms(16),
  },
  border: {
    left: 0,
    right: 0,
    height: ms(1),
    opacity: 0.2,
    position: 'absolute',
  },
});

function TimePicker(props) {
  const { data, dataKey, currentIndex, style, onChange } = props;
  const { colors } = useApp();
  const scrollY = useRef(new Animated.Value(0)).current;
  const list = [...data];
  list.push({ dataKey: '' });
  list.push({ dataKey: '' });
  list.push({ dataKey: '' });
  list.push({ dataKey: '' });
  list.push({ dataKey: '' });
  list.push({ dataKey: '' });

  const _onScroll = Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
    useNativeDriver: true,
    listener: ev => {
      const offset = ev.nativeEvent.contentOffset.y;
      if (offset % ITEM_HEIGHT === 0) {
        let index = offset / ITEM_HEIGHT;
        onChange(data[index], index);
      }
    },
  });

  const _renderItem = ({ item, index }) => {
    const scaleAnim = scrollY.interpolate({
      inputRange: [(index - 1) * ITEM_HEIGHT, index * ITEM_HEIGHT, (index + 1) * ITEM_HEIGHT],
      outputRange: [1, ms(20) / ms(16), 1],
      extrapolate: 'clamp',
    });
    const opacityAnim = scrollY.interpolate({
      inputRange: [(index - 1) * ITEM_HEIGHT, index * ITEM_HEIGHT, (index + 1) * ITEM_HEIGHT],
      outputRange: [0.7, 0.9, 0.7],
      extrapolate: 'clamp',
    });
    return (
      <View style={{ ...styles.item }}>
        <Animated.View
          style={{
            opacity: opacityAnim,
            transform: [{ scale: scaleAnim }],
          }}
        >
          <MainText semiBold numberOfLines={1} size={ms(16, 20)} lineHeight={ms(20, 24)}>
            {item[dataKey]}
          </MainText>
        </Animated.View>
      </View>
    );
  };

  const _keyExtractor = (item, index) => item + index;

  const _getItemLayout = (_, index) => ({
    index: index,
    length: ITEM_HEIGHT,
    offset: index * ITEM_HEIGHT,
  });

  const _onMomentumScrollEnd = ev => {
    const index = Math.round(ev.nativeEvent.contentOffset.y / ITEM_HEIGHT);
    onChange(data[index], index);
  };

  return (
    <View style={{ height: ITEM_HEIGHT * 2, ...style }}>
      <View style={{ ...styles.border, top: 0, backgroundColor: colors.main }} />
      <View style={{ ...styles.border, top: ITEM_HEIGHT, backgroundColor: colors.main }} />
      <Animated.FlatList
        data={list}
        bounces={false}
        scrollEnabled={true}
        removeClippedSubviews={true}
        snapToInterval={ITEM_HEIGHT}
        initialScrollIndex={currentIndex}
        showsVerticalScrollIndicator={false}
        renderToHardwareTextureAndroid={true}
        windowSize={10}
        initialNumToRender={5}
        maxToRenderPerBatch={10}
        updateCellsBatchingPeriod={100}
        decelerationRate={Platform.OS === 'ios' ? 'fast' : 0.85}
        onScroll={_onScroll}
        renderItem={_renderItem}
        keyExtractor={_keyExtractor}
        getItemLayout={_getItemLayout}
        // onMomentumScrollEnd={_onMomentumScrollEnd}
      />
    </View>
  );
}
export default React.memo(TimePicker);
