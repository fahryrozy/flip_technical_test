import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {style} from './style';

import Currency from '../../services/utils/Currency';
import IndoDate from '../../services/utils/IndoDate';

const TransactionList = ({data, onPress}) => {
  return (
    <TouchableOpacity style={style.transactionListContainer} onPress={onPress}>
      <View
        style={
          data.status == 'SUCCESS'
            ? style.transactionListSuccess
            : style.transactionListPending
        }></View>
      <View style={style.transactionListBody}>
        <View style={style.leftTransactionInfo}>
          <Text style={style.infoBank}>
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
          <Text style={style.receipient}>{data.beneficiary_name}</Text>
          <Text style={style.trxInfo}>
            <Currency number={data.amount} />
            <FontAwesome name="circle" size={8} />
            <IndoDate dateInput={data.completed_at.split(' ')[0]} />
          </Text>
        </View>
        <View style={style.rightTransactionInfo}>
          <View style={style.rightTransactionInfo}>
            {data.status == 'SUCCESS' ? (
              <View style={style.successButton}>
                <Text style={{color: '#fff'}}>Berhasil</Text>
              </View>
            ) : (
              <View style={style.pendingButton}>
                <Text style={{color: '#000'}}>Pengecekan</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TransactionList;
