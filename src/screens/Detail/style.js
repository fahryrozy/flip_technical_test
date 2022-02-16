import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'flex-start',
    flexDirection: 'column',
    paddingVertical: 5,
    width: width,
    height: height,
    color: '#000',
  },
  title: {
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    marginTop: 25,
    marginBottom: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
  copyIcon: {
    alignSelf: 'center',
    fontSize: 15,
  },
  heading: {
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    marginTop: 1,
    marginBottom: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headingText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
  },
  closeButton: {
    color: '#fa6837',
    fontWeight: 'bold',
  },
  content: {
    padding: 10,
    marginTop: 2,
    backgroundColor: '#fff',
  },
  rowContainer: {
    paddingVertical: 10,
  },
  columnContainer: {
    paddingVertical: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left: {
    flex: 0.6,
  },
  right: {
    flex: 0.4,
    alignSelf: 'flex-start',
  },
  bankLabel: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
  label: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  info: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
