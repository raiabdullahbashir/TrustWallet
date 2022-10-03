import {StyleSheet, Text, View, Image, Switch, ScrollView} from 'react-native';

import React, {useState} from 'react';
import styles from './styles';
import ETH from '../../../assets/ETH.png';
import BNB from '../../../assets/BNB.png';

const AddToken = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.rowView}>
          <Image source={ETH} />
          <View style={styles.buttonTextView}>
            <Text style={styles.buttonText}>Ethereum</Text>
          </View>
          <Switch
            trackColor={{false: '#8C8C8C', true: '#74B2F3'}}
            thumbColor={isEnabled ? '#3275BB' : '#C8C8C8'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.line} />
        <View style={styles.rowView}>
          <Image source={BNB} />
          <View style={styles.buttonTextView}>
            <Text style={styles.buttonText}>BNB</Text>
          </View>
          <Switch
            trackColor={{false: '#8C8C8C', true: '#74B2F3'}}
            thumbColor={isEnabled ? '#3275BB' : '#C8C8C8'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.line} />
        <View style={styles.rowView}>
          <Image source={ETH} />
          <View style={styles.buttonTextView}>
            <Text style={styles.buttonText}>Ethereum</Text>
          </View>
          <Switch
            trackColor={{false: '#8C8C8C', true: '#74B2F3'}}
            thumbColor={isEnabled ? '#3275BB' : '#C8C8C8'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.line} />
        <View style={styles.rowView}>
          <Image source={BNB} />
          <View style={styles.buttonTextView}>
            <Text style={styles.buttonText}>BNB</Text>
          </View>
          <Switch
            trackColor={{false: '#8C8C8C', true: '#74B2F3'}}
            thumbColor={isEnabled ? '#3275BB' : '#C8C8C8'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.line} />
        <View style={styles.rowView}>
          <Image source={ETH} />
          <View style={styles.buttonTextView}>
            <Text style={styles.buttonText}>Ethereum</Text>
          </View>
          <Switch
            trackColor={{false: '#8C8C8C', true: '#74B2F3'}}
            thumbColor={isEnabled ? '#3275BB' : '#C8C8C8'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.line} />
        <View style={styles.rowView}>
          <Image source={BNB} />
          <View style={styles.buttonTextView}>
            <Text style={styles.buttonText}>BNB</Text>
          </View>
          <Switch
            trackColor={{false: '#8C8C8C', true: '#74B2F3'}}
            thumbColor={isEnabled ? '#3275BB' : '#C8C8C8'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.line} />
        <View style={styles.rowView}>
          <Image source={ETH} />
          <View style={styles.buttonTextView}>
            <Text style={styles.buttonText}>Ethereum</Text>
          </View>
          <Switch
            trackColor={{false: '#8C8C8C', true: '#74B2F3'}}
            thumbColor={isEnabled ? '#3275BB' : '#C8C8C8'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.line} />
        <View style={styles.rowView}>
          <Image source={BNB} />
          <View style={styles.buttonTextView}>
            <Text style={styles.buttonText}>BNB</Text>
          </View>
          <Switch
            trackColor={{false: '#8C8C8C', true: '#74B2F3'}}
            thumbColor={isEnabled ? '#3275BB' : '#C8C8C8'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.line} />
        <View style={styles.rowView}>
          <Image source={ETH} />
          <View style={styles.buttonTextView}>
            <Text style={styles.buttonText}>Ethereum</Text>
          </View>
          <Switch
            trackColor={{false: '#8C8C8C', true: '#74B2F3'}}
            thumbColor={isEnabled ? '#3275BB' : '#C8C8C8'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.line} />
        <View style={styles.rowView}>
          <Image source={BNB} />
          <View style={styles.buttonTextView}>
            <Text style={styles.buttonText}>BNB</Text>
          </View>
          <Switch
            trackColor={{false: '#8C8C8C', true: '#74B2F3'}}
            thumbColor={isEnabled ? '#3275BB' : '#C8C8C8'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.line} />
        <View style={styles.rowView}>
          <Image source={ETH} />
          <View style={styles.buttonTextView}>
            <Text style={styles.buttonText}>Ethereum</Text>
          </View>
          <Switch
            trackColor={{false: '#8C8C8C', true: '#74B2F3'}}
            thumbColor={isEnabled ? '#3275BB' : '#C8C8C8'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.line} />
        <View style={styles.rowView}>
          <Image source={BNB} />
          <View style={styles.buttonTextView}>
            <Text style={styles.buttonText}>BNB</Text>
          </View>
          <Switch
            trackColor={{false: '#8C8C8C', true: '#74B2F3'}}
            thumbColor={isEnabled ? '#3275BB' : '#C8C8C8'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.line} />
        <View style={styles.rowView}>
          <Image source={ETH} />
          <View style={styles.buttonTextView}>
            <Text style={styles.buttonText}>Ethereum</Text>
          </View>
          <Switch
            trackColor={{false: '#8C8C8C', true: '#74B2F3'}}
            thumbColor={isEnabled ? '#3275BB' : '#C8C8C8'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.line} />
        <View style={styles.rowView}>
          <Image source={BNB} />
          <View style={styles.buttonTextView}>
            <Text style={styles.buttonText}>BNB</Text>
          </View>
          <Switch
            trackColor={{false: '#8C8C8C', true: '#74B2F3'}}
            thumbColor={isEnabled ? '#3275BB' : '#C8C8C8'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.line} />
        <View style={styles.rowView}>
          <Image source={ETH} />
          <View style={styles.buttonTextView}>
            <Text style={styles.buttonText}>Ethereum</Text>
          </View>
          <Switch
            trackColor={{false: '#8C8C8C', true: '#74B2F3'}}
            thumbColor={isEnabled ? '#3275BB' : '#C8C8C8'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.line} />
        <View style={styles.rowView}>
          <Image source={BNB} />
          <View style={styles.buttonTextView}>
            <Text style={styles.buttonText}>BNB</Text>
          </View>
          <Switch
            trackColor={{false: '#8C8C8C', true: '#74B2F3'}}
            thumbColor={isEnabled ? '#3275BB' : '#C8C8C8'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.line} />
        <View style={styles.rowView}>
          <Image source={ETH} />
          <View style={styles.buttonTextView}>
            <Text style={styles.buttonText}>Ethereum</Text>
          </View>
          <Switch
            trackColor={{false: '#8C8C8C', true: '#74B2F3'}}
            thumbColor={isEnabled ? '#3275BB' : '#C8C8C8'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.line} />
        <View style={styles.rowView}>
          <Image source={BNB} />
          <View style={styles.buttonTextView}>
            <Text style={styles.buttonText}>BNB</Text>
          </View>
          <Switch
            trackColor={{false: '#8C8C8C', true: '#74B2F3'}}
            thumbColor={isEnabled ? '#3275BB' : '#C8C8C8'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.line} />
      </ScrollView>
    </View>
  );
};

export default AddToken;
