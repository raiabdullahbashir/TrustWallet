import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import check_box_1 from '../../../assets/check_box_1.png';
import check_box_2 from '../../../assets/check_box_2.png';
import vector from '../../../assets/vector.png';
import styles from './styles';
const Legal = ({navigation}) => {
  const [isChecked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text style={styles.text}>
          Please review the Trust Plus Wallet Terms of Service and Privacy
          Policy.
        </Text>
        <View style={styles.buttonParentView}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.privacy}>Privacy Policy</Text>
            <Ionicons name="chevron-forward" size={20} color="#818181" />
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.privacy}>Terms of Service</Text>
            <Ionicons name="chevron-forward" size={20} color="#818181" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomView}>
        <View style={styles.termsView}>
          <TouchableOpacity
            onPress={() => setChecked(!isChecked)}
            style={styles.checkBox}>
            {isChecked ? (
              <Image source={check_box_1} />
            ) : (
              <ImageBackground
                source={check_box_2}
                resizeMode="contain"
                style={styles.image}>
                <Image source={vector} />
              </ImageBackground>
            )}
          </TouchableOpacity>

          <Text style={styles.termsText}>
            I’ve read and accept the Terms of Service and Privacy Policy.
          </Text>
        </View>
        <TouchableOpacity
          disabled={isChecked}
          onPress={() => navigation.navigate('AddToken')}
          style={[
            styles.contButton,
            {backgroundColor: isChecked ? '#AAAAAA' : '#3275BB'},
          ]}>
          <Text style={styles.buttonText}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Legal;
