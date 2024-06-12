import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

const CustomTextInput = ({ text, onChange, multiline = false, placeholder, numberOfLines }) => (
  <View style={styles.container}>
    <TextInput
      multiline={multiline}
      numberOfLines={numberOfLines}
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChange}
      defaultValue={text}
      autoCapitalize="none"
      autoCorrect={false}
      underlineColorAndroid="transparent"
      clearButtonMode="while-editing"
    />
  </View>
);

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  container: {
    marginVertical: 10,
  },
});

export default CustomTextInput;
