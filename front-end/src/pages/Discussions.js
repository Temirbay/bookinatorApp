import React, {Component} from 'react'

import '../styles/Discussions.css'

import Question from '../components/Question.js'

import client from '../client'

import { NavLink } from 'react-router-dom'

class Discussions extends React.Component {

  constructor (props) {
    super (props);

    this.state = {
      questions: []
    }
  }

  componentDidMount() {
    client.getTopics((topics) => {
      
      let temp = this.state.questions;
      topics.map((topic) => {
          temp.push({
            id: topic.id, 
            question: topic.text, 
            visibility: false, 
            comments: []});
      })
    
      this.setState({questions: temp});
  
      topics.map((topic) => {
        client.getComments(topic.id, (data) => {
          let temp2 = this.state.questions;
          temp2[topic.id-1].comments = data
          
          this.setState({questions: temp2});
        })
      })
    });

  }

  handleClick = (id) => {
    const questions = this.state.questions;
    questions.map((question) => {
      question.visibility = 'false'
    })
    questions[id - 1].visibility = 'true';
    this.forceUpdate();
  }

  handleCreateComment = (comment, id) => {
    console.log(id)
    const data = {
      topicId: id+1,
      username: this.props.username,
      text: comment.text
    }

    console.log(data)

    client.createComment(data, id, (comment) => {});  
    
    const newComments = this.state.questions[id].comments;
    newComments.push(comment);

    const temp = this.state.questions;
    temp[id].comments = newComments;
    this.setState({questions: temp});
  };

  render() {
    const questionsAPI = this.state.questions.map((question, index) => {

        return(
          <div key={index}>
            <div className="question-container" onClick={this.handleClick.bind(this, question.id)}>
              <h3>{question.question}</h3>
            </div>
            <div className="question-detail-container">
              <Question question={question}
                        lastIndex={question.comments.length}
                        handleCreateComment={this.handleCreateComment}
                        username={this.props.username}/>
            </div>
          </div>
        );
    })
    return (
      <div className="discussions">

        <h2> Question List</h2>
        <div>
          <ul className="question-list">{questionsAPI}</ul>
        </div>
      </div>
    );
  }

}

export default Discussions;
