import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'flex-start',
    flexDirection: 'column',
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: width,
    height: height,
  },
  searchPanel: {
    height: height * 0.075,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingBottom: 1 * 0.1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  searchLogo: {
    flex: 0.75,
  },
  searchText: {
    flex: 7.75,
  },
  sortButton: {
    flex: 3,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  transactionContainer: {
    marginTop: 10,
    flex: 9,
    width: '100%',
  },
  transactionListContainer: {
    height: height * 0.125,
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  transactionListSuccess: {
    backgroundColor: '#51b785',
    width: '3%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  transactionListPending: {
    backgroundColor: '#fa6837',
    width: '3%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  transactionListBody: {
    backgroundColor: '#fff',
    width: '97%',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftTransactionInfo: {
    flex: 7,
  },
  rightTransactionInfo: {
    flex: 3,
  },
  successButton: {
    backgroundColor: '#51b785',
    color: '#fff',
    paddingHorizontal: 2,
    paddingVertical: 2,
    borderRadius: 5,
    alignItems: 'center',
  },
  pendingButton: {
    borderColor: '#fa6837',
    color: '#000',
    borderWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
    alignItems: 'center',
  },
  infoBank: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 18,
  },
  receipient: {
    color: '#000',
    textTransform: 'uppercase',
    fontSize: 15,
  },
  trxInfo: {
    color: '#000',
    fontSize: 12,
  },
  sortingLabel: {
    fontSize: 12,
    color: '#fa6837',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
