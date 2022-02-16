import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {style} from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SortingMenu from './SortingMenu';
import {useSelector, useDispatch} from 'react-redux';
import {sortModal} from '../../store/actions/trxAction';

const SearchBar = ({onSearch}) => {
  const dispatch = useDispatch();
  const [searchQuery, setsearchQuery] = useState('');
  const modalVisible = useSelector(state => state.transaction.sortModal);
  return (
    <View style={style.searchPanel}>
      <View style={style.searchLogo}>
        <Text>
          <Ionicons name="search" size={20} color="#eee" />
        </Text>
      </View>
      <View style={style.searchText}>
        <TextInput
          color="black"
          value={searchQuery}
          placeholder="Cari nama, bank, atau nominal"
          placeholderTextColor="#C5C5C5"
          onChangeText={val => {
            onSearch(val);
            setsearchQuery(val);
          }}
        />
      </View>
      <SortingMenu visible={modalVisible} />
      <TouchableOpacity
        style={style.sortButton}
        onPress={() => {
          dispatch(sortModal(!modalVisible));
          onSearch('');
          setsearchQuery('');
        }}>
        <Text style={style.sortingLabel}>
          URUTKAN
          <Ionicons name="chevron-down" size={15} color="#fa6837" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
