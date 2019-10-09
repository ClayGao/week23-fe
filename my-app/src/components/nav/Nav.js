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
      const {isMove, weatherData} = this.props
      console.log(weatherData)
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
          </ul>
      </nav>
    )
  }
}


export default Nav








