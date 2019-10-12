import React, {Component,} from 'react';
import shallowEqual from 'shallowequal'
import './scss/App.scss';
import Nav from './containers/NavContainer'
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
          scrollY:false
      }
  }

  scroll = () => {
    if(window.scrollY) {
      this.setState({
        scrollY : true
      })
    } else {
      this.setState({
        scrollY : false
      })
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scroll);
  }

  componentWillUnmount(){
    window.removeEventListener("scroll", this.scroll);
  }
  
  /*
  shouldComponentUpdate(nextProps, nextState){
      return !shallowEqual(this.state.scrollY, nextState.scrollY)
  }
  */

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
