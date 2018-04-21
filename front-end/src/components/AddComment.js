import React, {Component} from 'react'

import '../styles/AddComment.css'

import {Button, Input} from 'semantic-ui-react'

import ReactDOM from 'react-dom'

class AddComment extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            comment:{
                id:'',
                text:'',
                author:'',
            }
        }
        this.state.author = this.props.username;
    }

    handleChange = (e) =>{
        const comment = this.state.comment;
        comment.text = e.target.value;
        comment.id = this.props.lastIndex + 1

        this.forceUpdate();
    }

    handlePostComment = (comment, id) =>{
        comment.username = this.state.author;
        this.props.postComment(comment, id - 1)
        ReactDOM.findDOMNode(this.refs.form).value = "";
    }

    render(){
        return(
            <div className="add-comment">
                <Input focus ref="form" className="add-comment-input" type="text" placeholder="Add Comment..." onChange={this.handleChange}/>

                <Button inverted color='blue' onClick={this.handlePostComment.bind(this, this.state.comment, this.props.question.id)}  className="add-comment-btn">Submit</Button>

            </div>
        );
    }
}

export default AddComment
