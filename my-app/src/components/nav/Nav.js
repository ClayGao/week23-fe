import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function Tab({ label, to, exact }) {
    return (
      <Route
        path={to}
        exact={exact}
        children={({ match }) => (
          <li className={match ? "active" : ""}>
            <Link className="link" to={to}>{label}</Link>
          </li>
        )}
      />
    );
  }

class Nav extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
      this.props.getWeatherAPI()
    }

    render(){
      const currentTime = new Date()
      const {isMove, weatherData, isLoadingGetWeatherData} = this.props
      console.log(this.props)
      return (
        <nav className={isMove ? "window-is-Moving" : "window-UnMoving"}>
            <ul>
                <li>
                    Blue Orange
                </li>
                <Tab exact={true} to="/" label="Home" />
                <Tab to="/about" label="About" />
                <Tab to="/list" label="List" />
                <Tab to="/write" label="Write" />
                <li className="date">{currentTime.toDateString()}</li>
                <li className="date">{isLoadingGetWeatherData ? 'Loading':'ok'}</li>
            </ul>
            <div className="single-post-text">      
                  {weatherData.map(data => (
                      <ul> 
                          <li>Weather: {data.Wx}</li>
                          <li>Feel like: {data.CI}</li>
                          <li>Temp: {(Number(data.MinT)+Number(data.MaxT))/2}</li>
                          <li>Rainy: {data.PoP}</li>
                      </ul>
                  ))}
              </div>
        </nav>
      )
  }
}


export default Nav








