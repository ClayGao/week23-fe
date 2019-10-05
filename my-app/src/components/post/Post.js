import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';
import { getSinglePost } from '../../WebAPI'

class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postData: [], 
        }
    }
 
    handlePostData = () => {
        const listId = this.props.match.params.listId
        getSinglePost(listId)
            .then(resp => {
                this.setState({
                    postData: resp.data
                })
            })
    }

    componentDidMount() {
        this.handlePostData()
    }
    
    render(){
        const { postData } = this.state
        return (
            <div  className="board">
                <div key={postData.id} 
                    className="single-post" >        
                    <div className="single-post-title">
                        {postData.title}
                    </div>
                    <ReactMarkdown 
                        className="single-post-text" 
                        source={postData.body ? postData.body : "Loading..."} 
                    />
                    <div className="single-post-editor">
                        {"Author: " + (postData.author ? postData.author : "Noname")}
                    </div>
                </div>
            </div>
        )
    }
 }


export default Post