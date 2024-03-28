import {StyleSheet} from 'react-native';

export const DetailsContainer = StyleSheet.create({
  Overview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  Introduction: {
    position: 'absolute',
    top: 0,
    zIndex: 1,
    alignItems: 'flex-start',
    borderWidth: 2,
    paddingHorizontal: 45,
    borderRadius: 10,
    padding: 10,
    marginBottom: 5,
    backgroundColor: '#3c5579',
  },
  Text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffe4e1',
  },
  EveryItem: {
    marginVertical: 5,
  },
});
