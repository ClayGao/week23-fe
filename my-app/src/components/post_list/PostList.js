import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { getPosts } from '../../WebAPI'

class PostList extends Component {
    constructor(props) {
        super(props)
        /*
        this.state = {
            postListData: [], 
        }
        */
    }
 
    handlePostListData = () => {
        this.props.getPostList()
        /*
        getPosts()
            .then(resp => {
                this.setState({
                    postListData: resp.data.reverse(),
                })
            })
            */
    }
 
    componentDidMount() {
        this.handlePostListData()
    }
    
    render(){
        //const {postListData} = this.state
        const {history, postListData} = this.props
        console.log(this.props)
        return (
            <div className="board">
            <div className="page-title">
                Articles
            </div>
            {postListData.map(card => (
                <div key={card.id} 
                    className="post" 
                    onClick={() => { 
                        history.push('/list/id=' + card.id)
                    }}>
                    <div className="post-title">
                        {card.title}
                    </div>
                    <div className="post-text">
                        {card.body}
                    </div>
                    <div className="post-editor">
                        Author: {card.author ? card.author : "Noname"}
                    </div>
                </div>
            ))}
            </div>
        )
    }
 }


export default PostList