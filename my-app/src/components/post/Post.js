import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';
import { getSinglePost } from '../../WebAPI'

class Post extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const postId = this.props.match.params.listId
        this.props.getActiveSinglePost(postId)
    }
    
    render(){
        console.log(this.props)
        const postId = this.props.match.params.listId
        const { singlePostData, isLoadingSinglePost, deleteActiveSinglePost,
             editActiveSinglePost, editingActiveSinglePost, completeEditActiveSinglePost, isEditing } = this.props
        return (
            <div  className="board">
                <div key={singlePostData.id} 
                    className="single-post" > 
                    {!isEditing ? 
                    <>
                    <div className="single-post-title">
                        {singlePostData.title}
                    </div>
                    <ReactMarkdown 
                        className="single-post-text" 
                        source={!isLoadingSinglePost ? singlePostData.body : "Loading..."} 
                    />
                    <div className="single-post-editor">
                        {"Author: " + (singlePostData.author ? singlePostData.author : "Noname")}
                    </div>
                    <div className="single-post-editblock">
                        <p onClick={() => { deleteActiveSinglePost(postId) }}>Delete</p>
                        <p onClick={() => { editActiveSinglePost() }}>Edit</p>
                    </div>
                    </>
                    :
                    <>
                    <form onChange={(e) => {editingActiveSinglePost(e.target.value, e.target.value)}}>
                        <input className="write-article-title" type="text"  defaultValue={singlePostData.title} />
                        <textarea className="write-article-text" defaultValue={singlePostData.body} />
                    </form>
                    <div className="single-post-editor">
                        {"Author: " + (singlePostData.author ? singlePostData.author : "Noname")}
                    </div>
                    <div className="single-post-editblock">
                        
                    </div>
                    </>
                    }       
                </div>
            </div>
        )
    }
 }


export default Post