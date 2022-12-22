class SelectedAreas {
  constructor() {
    this.weather = [];
  }

  add(weather) {
    this.weather.push(weather);
  }

  remove(weather) {
    this.weather = this.weather.filter(
      (existingWeather) => existingWeather != weather
    );
  }
}

export default SelectedAreas;
