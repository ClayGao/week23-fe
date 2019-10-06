import React, {Component} from 'react';

class PostList extends Component {
    constructor(props) {
        super(props)
    }
 
    componentDidMount() {
        this.props.getPostList()
    }
    
    render(){
        const {history, isLoadingGetPosts, postListData} = this.props
        return (
            <div className="board">
            <div className="page-title">
                Articles
            </div>
            {isLoadingGetPosts ? 
            <div className="loading">
                Loading... 
            </div>:
            postListData.map(card => (
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