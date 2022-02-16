import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Clipboard from '@react-native-community/clipboard';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Currency from '../../services/utils/Currency';
import IndoDate from '../../services/utils/IndoDate';

import {style} from '../Detail/style';

const DetailScreen = ({route, navigation}) => {
  const {data} = route.params;
  console.log('data -> ', data);
  const copyToClipboard = text => {
    Clipboard.setString(text);
  };

  return (
    <View style={style.container}>
      <View style={style.title}>
        <Text style={style.titleText}>ID Transaksi : #{data.id}</Text>
        <TouchableOpacity onPress={() => copyToClipboard(data.id)}>
          <Text style={style.copyIcon}>
            {' '}
            <MaterialIcons
              name="content-copy"
              size={18}
              color="#fa6837"
              style={{transform: [{rotateY: '30deg'}]}}
            />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={style.heading}>
        <Text style={style.headingText}>Detail Transaksi</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={style.closeButton}>TUTUP</Text>
        </TouchableOpacity>
      </View>
      <View style={style.content}>
        <View style={style.rowContainer}>
          <Text style={style.bankLabel}>
            {data.sender_bank.length <= 4
              ? data.sender_bank.toUpperCase()
              : data.sender_bank.charAt(0).toUpperCase() +
                data.sender_bank.slice(1)}
            <Ionicons name="arrow-forward" size={18} />
            {data.beneficiary_bank.length <= 4
              ? data.beneficiary_bank.toUpperCase()
              : data.beneficiary_bank.charAt(0).toUpperCase() +
                data.beneficiary_bank.slice(1)}
          </Text>
        </View>
        <View style={style.columnContainer}>
          <View style={style.left}>
            <Text style={style.label}>
              {data.beneficiary_name.toUpperCase()}
            </Text>
            <Text style={style.info}>{data.account_number}</Text>
          </View>
          <View style={style.right}>
            <Text style={style.label}>NOMINAL</Text>
            <Currency number={data.amount} />
          </View>
        </View>
        <View style={style.columnContainer}>
          <View style={style.left}>
            <Text style={style.label}>BERITA TRANSFER</Text>
            <Text style={style.info}>{data.remark}</Text>
          </View>
          <View style={style.right}>
            <Text style={style.label}>KODE UNIT</Text>
            <Text style={style.info}>{data.unique_code}</Text>
          </View>
        </View>
        <View style={style.rowContainer}>
          <Text style={style.label}>WAKTU DIBUAT</Text>
          <Text style={style.info}>
            <IndoDate dateInput={data.completed_at.split(' ')[0]} />
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DetailScreen;
