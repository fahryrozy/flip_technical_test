import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

export default function Radio({changeValue, text}) {
  const dispatch = useDispatch();
  const option = useSelector(state => state.transaction.sortOption);
  return (
    <TouchableOpacity style={radioStyle.btn} onPress={changeValue}>
      <View style={radioStyle.radioUnchecked}>
        {option.label == text && <View style={radioStyle.radioChecked}></View>}
      </View>
      <Text style={radioStyle.txt}>{text}</Text>
    </TouchableOpacity>
  );
}

const radioStyle = StyleSheet.create({
  radioUnchecked: {
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 50,
    width: 20,
    height: 20,
    padding: 3,
  },
  radioChecked: {
    backgroundColor: 'red',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 12,
    width: 12,
    height: 12,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderRadius: 15,
    padding: 15,
    justifyContent: 'flex-start',
  },
  txt: {color: '#000', fontSize: 15, marginHorizontal: 10},
});
