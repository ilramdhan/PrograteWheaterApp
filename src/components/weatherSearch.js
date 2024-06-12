import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import CustomTextInput from './customTextInput';

const WeatherSearch = ({ searchWeather }) => {
  const [location, setLocation] = useState('');

  return (
    <View style={styles.container}>
      <CustomTextInput
        placeholder="Enter city name"
        numberOfLines={1}
        text={location}
        onChange={setLocation}
      />
      <View style={styles.buttonWrapper}>
        <Button title="Search" onPress={() => searchWeather(location)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10, // Mengatur jarak dari elemen di bawahnya
  },
  buttonWrapper: {
    marginTop: 10,
  },
});

export default WeatherSearch;
