import React, {Component} from 'react'

import '../styles/Question.css'

import AddComment from './AddComment.js'

class Question extends React.Component{

    constructor(props){
        super(props);

    }

    handleClick = (comment, id) =>{
        this.props.handleCreateComment(comment, id)
    }

    render(){
        const questionComments = this.props.question.comments.map((comment, index) =>{
            return(
                <div key={index}>
                    <h1 className="comment-by-user-name">{comment.username}</h1>
                    <p className="comment">{comment.text}</p>
                </div>
            );
        })
        if (this.props.question.visibility == 'true') {
            return(
                <div className="question">
                    <h2 className="question-detail">{this.props.question.question}</h2>
                    <ul className="comment-list">{questionComments}</ul>
                    <div>
                        <AddComment postComment={this.handleClick}
                                    lastIndex={this.props.lastIndex}
                                    question={this.props.question}
                                    username={this.props.username}/>
                    </div>
                </div>
            );
        }else{
            return(
                <div>
                </div>
            );
        }
    }
}

export default Question;
