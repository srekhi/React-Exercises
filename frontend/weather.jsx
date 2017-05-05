// api.openweathermap.org/data/2.5/weather?q=SanFrancisco
// cfcf447eed0224408283d6b7eda0f589
import React from 'react';

class Weather extends React.Component{
  constructor(props) {
    super();
    this.state = {};
    this.APIKey = "cfcf447eed0224408283d6b7eda0f589";
  }

  componentDidMount(){
    var lat;
    var long;
    const location = navigator.geolocation.getCurrentPosition((res) =>{
        lat = res.coords.latitude;
        long = res.coords.longitude;


    console.log(lat, long);
    if (lat) {
      let xmlHTTP = new XMLHttpRequest();
      xmlHTTP.open('GET', `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${this.APIKey}`);
      xmlHTTP.responseType = 'json';
      xmlHTTP.onload = () => {
        console.log(xmlHTTP);
        if (xmlHTTP.status >= 200 && xmlHTTP.status < 400) {
          // debugger;
          let response = xmlHTTP.response;
           let temp = (response.main.temp - 273) *(9/5) + 32;

          this.setState({ city: response.name, temperature: temp});
          console.log(response);
        }
      };
      xmlHTTP.send();

      // console.log(location);

    }
  });
  }

  render(){
    //response.city, response.location

    return(<div className="weather-box">
      <h1>city: {this.state.city}</h1>
      <h1>temp: {this.state.temperature}</h1>
    </div>);
  }


}

export default Weather;
