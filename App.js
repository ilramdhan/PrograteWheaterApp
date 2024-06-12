import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY } from './src/constant';
import { View, Text, StyleSheet, ActivityIndicator, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import WeatherSearch from './src/components/weatherSearch';
import WeatherInfo from './src/components/weatherInfo';

const App = () => {
  const [weatherData, setWeatherData] = useState();
  const [status, setStatus] = useState('');

  const searchWeather = (location) => {
    setStatus('loading');
    Keyboard.dismiss();
    axios
      .get(`${BASE_URL}?q=${location}&appid=${API_KEY}`)
      .then((response) => {
        const data = response.data;
        data.visibility /= 1000;
        data.visibility = data.visibility.toFixed(2);
        data.main.temp -= 273.15;
        data.main.temp = data.main.temp.toFixed(2);
        setWeatherData(data);
        setStatus('success');
      })
      .catch((error) => {
        setStatus('error');
      });
  };

  const renderComponent = () => {
    switch (status) {
      case 'loading':
        return <ActivityIndicator size="large" color="#00f" />;
      case 'success':
        return <WeatherInfo weatherData={weatherData} />;
      case 'error':
        return <Text style={styles.errorText}>Something went wrong. Please try again with a correct city name.</Text>;
      default:
        return null;
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.header}>Weather App</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.avoidingView}
        >
          <WeatherSearch searchWeather={searchWeather} />
        </KeyboardAvoidingView>
        <ScrollView contentContainerStyle={styles.resultContainer}>
          {renderComponent()}
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 40, // Menambah jarak dari atas
  },
  avoidingView: {
    marginBottom: 10, // Mengatur jarak dari elemen di bawahnya
  },
  resultContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default App;
