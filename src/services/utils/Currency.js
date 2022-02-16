import {View, Text} from 'react-native';
import React from 'react';

const Currency = ({number}) => {
  const number_string = number.toString();
  const changes = number_string.length % 3;
  let rupiah = number_string.substr(0, changes);
  const thousands = number_string.substr(changes).match(/\d{3}/g);

  if (thousands) {
    const separator = changes ? '.' : '';
    rupiah += separator + thousands.join('.');
  }
  return <Text>Rp{rupiah} </Text>;
};

export default Currency;
