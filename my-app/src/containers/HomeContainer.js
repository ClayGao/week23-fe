import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { getPosts, getWeather } from '../WebAPI'
import Home from '../components/home'
import * as actions from '../actions'
import { connect } from 'react-redux'

const HomeContainer = props => {
    return <Home {...props} />
}

const mapStateToProps = state => {
    return {
        //isLoadingGetPosts: state.getPostsReducer.isLoadingGetPosts,
        postListData: state.getPostsReducer.postListData,
        weatherData: state.getWeatherReducer.weatherData,
        isLoadingGetWeatherData: state.getWeatherReducer.isLoadingGetWeatherData
    }
}

const mapDispatchToProps = dispatch => {
    return {             
        getPostList: () => {
            dispatch(actions.getPosts())
            getPosts().then(resp => {
                dispatch(actions.getPostsSuccess(resp.data))
            })
        },
        getWeatherAPI: () => {
            dispatch(actions.getWeatherData())
            getWeather().then(resp => {
                let Weather = []
                const weatherJSON = resp.data.cwbopendata.dataset.location[0].weatherElement
                for(var i = 0; i < 3; i++){
                     Weather.push(
                        {
                            Wx: weatherJSON[0].time[i].parameter.parameterName,
                            MaxT: weatherJSON[1].time[i].parameter.parameterName,
                            MinT: weatherJSON[2].time[i].parameter.parameterName,
                            CI: weatherJSON[3].time[i].parameter.parameterName,
                            PoP: weatherJSON[4].time[i].parameter.parameterName
                        }
                     ) 
                }
                dispatch(actions.getWeatherDataSuccess(Weather))
            })
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeContainer))