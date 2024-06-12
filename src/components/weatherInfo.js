import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const WeatherInfo = ({ weatherData }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>Weather in {weatherData.name}</Text>
      <Text style={styles.temperature}>{weatherData.main.temp} °C</Text>
      <View style={styles.weather}>
        <Image
          source={{ uri: `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png` }}
          style={styles.weatherIcon}
        />
        <Text style={styles.weatherMain}>{weatherData.weather[0].main}</Text>
      </View>
      <Text style={styles.description}>{weatherData.weather[0].description}</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Visibility:</Text>
        <Text style={styles.value}>{weatherData.visibility} km</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Wind Speed:</Text>
        <Text style={styles.value}>{weatherData.wind.speed} m/s</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 1,
    alignItems: 'center',
    marginVertical: 0,
  },
  cityName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  temperature: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#ff3e3e',
  },
  weather: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  weatherIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  weatherMain: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#555',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
  },
});

export default WeatherInfo;
