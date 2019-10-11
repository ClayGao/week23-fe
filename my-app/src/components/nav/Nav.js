import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const DateInfo = ({currentWeather, currentTime}) => {
  return (
    <span  className="date-info">
    {currentWeather.map(data=>(
      <React.Fragment>
        <li>{currentTime.toDateString()}</li>
        <li>T: {(Number(data.MinT)+Number(data.MaxT))/2}°C</li>
        <li>Rain: {data.PoP}%</li>
      </React.Fragment>
    ))}
    </span>
  )
}

const Tab = ({ label, to, exact }) => {
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
      const {isMove, weatherData} = this.props
      const currentWeather = weatherData.filter(data => (
        currentTime.getHours() >= 12 && currentTime.getHours() < 18) ? 
        data.time ===  '今早' :  data.time ===  '今晚'
      )
      return (
        <nav className={isMove ? "window-is-Moving" : "window-UnMoving"}>
            <ul>
                <Tab exact={true} to="/" label="Home" />
                <Tab to="/about" label="About" />
                <Tab to="/list" label="List" />
                <Tab to="/write" label="Write" />
                <DateInfo currentWeather={currentWeather} currentTime={currentTime}/>
            </ul>
        </nav>
      )
  }
}


export default Nav








