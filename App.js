import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import DateTime from 'react-native-customize-selected-date'
import _ from 'lodash'
const App = () => {
  const [time, setTime] = useState('')
  function onChangeDate(date) {
    alert(date)
  }

  function renderChildDay(day) {
    if (_.includes(['2018-11-15', '2018-12-10', '2018-12-20'], day)) {
      return <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={styles.icLockRed} />
    }
    if (_.includes(['2018-11-16', '2018-12-12', '2018-12-21', '2018-12-18'], day)) {
      return <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={styles.icLockRed} />
    }
  }
  return (
    <View style={styles.container}>
      <DateTime
        date={time}
        changeDate={(date) => onChangeDate(date)}
        format='YYYY-MM-DD'
        renderChildDay={(day) => renderChildDay(day)}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  icLockRed: {
    width: 13 / 2,
    height: 9,
    position: 'absolute',
    top: 2,
    left: 1
  }
});
export default App;
