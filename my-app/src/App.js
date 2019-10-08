import React, {Component} from 'react';
import './scss/App.scss';
import Nav from './components/nav'
import PostList from './containers/PostListContainer'
import Post from './containers/PostContainer'
import About from './components/about'
import Write from './components/write'
import Home from './containers/HomeContainer'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



class App extends Component {
  constructor(props) {
      super(props)
      this.state = {
          scrollY : window.scrollY
      }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scroll);
  }

  componentWillUnmount(){
    window.removeEventListener("scroll", this.scroll);
  }
  
  scroll = () => {
      this.setState({
        scrollY : window.scrollY
      })
  }

  render() {
      const {scrollY} = this.state
      return (
        <Router basename="/week23/my-app/build">
          <div className="App">
              <Nav isMove={scrollY}/>
              <div className="wrapper"> 
              <Switch> 
                  <Route path="/" exact component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/list" exact component={PostList} />
                  <Route path="/list/id=:listId" component={Post} />
                  <Route path="/write" exact component={Write} /> 
              </Switch>
              </div>
          </div>
        </Router>
      )
  }
}

export default App;
