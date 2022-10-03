import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  line: {
    backgroundColor: '#E7E7E7',
    height: 0.5,
    width: '100%',
  },
  checkBox: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '30%',
    width: '10%',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  contButton: {
    height: '20%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  termsText: {
    color: '#3275BB',
    marginLeft: '0%',
    fontSize: 16,
  },
  termsView: {
    height: '25%',
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomView: {
    height: '40%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  topView: {
    height: '60%',
    width: '100%',

    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  privacy: {
    color: '#818181',
    fontSize: 16,
  },
  button: {
    height: '50%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  buttonParentView: {
    height: '26%',
    width: '100%',
    marginTop: '5%',
    borderWidth: 1.5,
    borderColor: '#F2F2F2',
    borderRadius: 12,
  },
  text: {
    color: '#545454',
    fontSize: 14,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: '5%',
    paddingVertical: '8%',
  },
});

export default styles;
