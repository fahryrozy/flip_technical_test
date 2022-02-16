import React, {useState, useRef, useEffect} from 'react';
import {Text, TextInput, View, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {style} from './style';
import TransactionList from './TransactionList';
import {getLisTRX} from '../../store/actions/trxAction';
import SearchBar from './SearchBar';

const TransactionScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const trx = useSelector(state => state.transaction.trx);
  const [filteredData, setFilteredData] = useState(null);
  const sortOption = useSelector(state => state.transaction.sortOption);

  useEffect(() => {
    dispatch(getLisTRX());
  }, []);

  useEffect(() => {
    sorted_data();
  }, [sortOption]);

  const data = Object.keys(trx).map(item => {
    return trx[item];
  });

  const filter_data = query => {
    const keys = [
      'beneficiary_name',
      'sender_bank',
      'beneficiary_bank',
      'amount',
    ];
    if (query) {
      const regex = new RegExp(query.toLowerCase(), 'g');
      const filtered = data.filter(item =>
        keys.some(key => String(item[key]).toLowerCase().match(regex)),
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(null);
    }
  };

  const sorted_data = () => {
    const {value, order} = sortOption;
    const xdata =
      order == 'ASC'
        ? data.sort((a, b) => {
            return a[value] > b[value] ? 1 : b[value] > a[value] ? -1 : 0;
          })
        : data.sort((a, b) => {
            return b[value] > a[value] ? 1 : a[value] > b[value] ? -1 : 0;
          });
    return xdata;
  };

  return (
    <View style={style.container}>
      <SearchBar onSearch={filter_data} />
      <FlatList
        style={style.transactionContainer}
        data={filteredData ? filteredData : sorted_data()}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TransactionList
            data={item}
            onPress={() => navigation.navigate('Detail', {data: item})}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
export default TransactionScreen;
