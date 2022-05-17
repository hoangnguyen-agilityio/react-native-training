import React, { FC, useState } from 'react';
import { Text, View } from 'react-native';
import FullWidthBtn from '../../components/Button';

import { TextField } from 'rn-material-ui-textfield';

import styles from './styles';
import CheckBox from '@react-native-community/checkbox';

const SignIn: FC = () => {
  const [username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [isRemember, setIsRemember] = useState(false);

  return (
    <View style={styles.root}>
      <View>
        <Text style={styles.title}>Hello</Text>
        <Text style={styles.desc}>Let's Learn More About Plants</Text>
      </View>

      {/* sign in form */}
      <View style={styles.SignInForm}>
        <View>
          <TextField
            label="Username"
            value={username}
            onChangeText={text => setUsername(text)}
            labelTextStyle={{
              color: 'black',
            }}
            tintColor="#2DDA93"
          />
        </View>
        <View style={styles.formField}>
          <TextField
            secureTextEntry
            label="Password"
            value={Password}
            onChangeText={text => setPassword(text)}
            labelTextStyle={{
              color: 'black',
            }}
            tintColor="#2DDA93"
          />
        </View>
        <View style={styles.flexRow}>
          <View style={styles.checkBoxWrapper}>
            <CheckBox
              value={isRemember}
              onValueChange={setIsRemember}
              style={{ marginLeft: 0 }}
            />
            <Text style={styles.smallText}>Remember me</Text>
          </View>
          <Text style={styles.smallText}>Forgot Password?</Text>
        </View>

        <FullWidthBtn text="LOGIN" onPress={() => {}} />
      </View>
      <Text style={{ ...styles.smallText, ...styles.formField }}>
        Don’t Have Account? <Text style={styles.SignInLink}>Sign Up</Text>
      </Text>
    </View>
  );
};

export default SignIn;
