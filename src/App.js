

// import React, { Component } from 'react'
// import "bootstrap/dist/css/bootstrap.min.css";
// export default class hey extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       weatherResult: null
//     }
//     this.getWeather();
//   }

//   async getWeather() {
//     const API_KEY = "8d3d8588177439173bbe9d3f2cc860b6";
//     const url = `api.openweathermap.org/data/2.5/weather?q={city name}&appid={API_KEY}&units=metric`;
//     let data = await fetch(url)
//     let result = await data.json();
//     console.log(result);
//     this.setState({ weatherResult: result })
//   };

//   getLocation = () => {
//     navigator.geolocation.getCurrentPosition((post) => {
//       this.getWeather(post.coords.longitude, post.coords.latitude)
//     })
//   }

//   render() {
//     if (this.state.weatherResult == null) {
//       return (<div>Loading</div>)

//     }
//     return (
//       <div className="container-fluid text-white my-auto">
//         <div className="container mx-auto my-4 py-4">
//           <div className="row justify-content-center text-center">

//             <h1 className="col-12 display-4 my-2 py-3 text-success">
//               Awesome Weather App
//             </h1>

//             <h2 className="col-12">{this.state.weatherResult.name}</h2>

//             <h3 className="col-12 text-danger">Temperature</h3>

//             <h3 className="col-12">Weather Description</h3>

//           </div>
//         </div>
//       </div>
//     )
//   }
// }




import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";



const  bgImg ={
  Paris:"https://media.cntraveler.com/photos/5cf96a9dd9fb41f17ed08435/master/pass/Eiffel%20Tower_GettyImages-1005348968.jpg",
  "New York":"https://www.beneschlaw.com/images/content/1/4/v1/14735/NewYork-1100x900.jpg"

}
export default class App extends Component {


  constructor(props) {
    super(props)
    this.state = {
      weatherResult: null,
      bg:"https://www.vietnam-briefing.com/news/wp-content/uploads/2019/03/Ho-Chi-Minh-City-1.jpg"
    }
    this.getCurrentWeather("Paris");
  }


  getCurrentWeather = async (city) => {
    let apiKey = "8d3d8588177439173bbe9d3f2cc860b6";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    let data =  await fetch(url)
    let result =  await data.json();
    console.log(result);
    this.setState({weatherResult: result, bg: bgImg[city]})
  
  };

  getLocation = () => {
    navigator.geolocation.getCurrentPosition((post) => {
      this.getWeather(post.coords.longitude, post.coords.latitude)
    })
  }


  render() {
    if(this.state.weatherResult == null){
      return(<div>Loading</div>)

    }
    return (
      <div style={{"backgroundImage":`url(${this.state.bg})`,"height":"100vh"}}>
        <h1>Duy's weather App</h1>
        <h2>{this.state.weatherResult.name}</h2>
        <h3>{this.state.weatherResult.main.temp} C</h3>
        <h3>{this.state.weatherResult.weather[0].description}</h3>
        <button className = "newyork" onClick={() => this.getCurrentWeather("New York")}>New York</button>
        <button className = "Paris" onClick={() => this.getCurrentWeather("Paris")}>Paris</button>
      </div>
    )
  }
}