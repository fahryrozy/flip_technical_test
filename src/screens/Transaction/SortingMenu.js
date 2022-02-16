import {Modal, StyleSheet, View, FlatList} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';

import {selectSortOption, sortModal} from '../../store/actions/trxAction';
import Radio from '../../components/RadioButton';

const SortingMenu = ({visible}) => {
  const dispatch = useDispatch();
  const option = [
    {label: 'URUTKAN', value: ''},
    {label: 'Nama A-Z', value: 'beneficiary_name', order: 'ASC'},
    {label: 'Nama Z-A', value: 'beneficiary_name', order: 'DESC'},
    {label: 'Tanggal Terbaru', value: 'created_at', order: 'ASC'},
    {label: 'Tanggal Terlama', value: 'created_at', order: 'DESC'},
  ];

  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={visible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <FlatList
              data={option}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <Radio
                  changeValue={() => {
                    dispatch(sortModal(false));
                    dispatch(selectSortOption(item));
                  }}
                  text={item.label}
                />
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    height: '45%',
    width: '94%',
    borderRadius: 2,
    alignSelf: 'center',
    backgroundColor: '#fff',
    padding: 30,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default SortingMenu;
