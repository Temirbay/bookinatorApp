import React, {Component} from 'react'

import '../styles/Discussions.css'

import Question from '../components/Question.js'

import { NavLink } from 'react-router-dom'

class Discussions extends React.Component {

  constructor (props) {
    super (props);

    this.state = {
      questions:[
        {
          id: 1,
          question:'Harry Potter Short Description',
          visibility:'false',
          comments:[{
            id: 1,
            author: 'Ginny Weasley',
            text: 'Boys running through the wall'
          },
          {
            id: 2,
            author: 'Harry Potter',
            text: 'Flying on bloom'
          }
          ]
        },
        {
          id: 2,
          question:'Where to find book',
          visibility:'false',
          comments:[{
            id: 1,
            author: 'Anonymous',
            text: 'I have this book'
          },
          {
            id: 2,
            author: 'Harry Potter',
            text: 'Here the address ...'
          }
          ]
        },
        {
          id: 3,
          question:'Who want to exchange to ... book',
          visibility:'false',
          comments:[{
            id: 1,
            author: 'Some guy',
            text: 'I can give you ...'
          }
          ]
        }
      ]
    }
  }

  handleClick = (id) => {
    const questions = this.state.questions;
    questions.map((question) => {
      question.visibility = 'false'
    })
    questions[id - 1].visibility = 'true';
    this.forceUpdate();
  }

  createComment = (comment, id) => {
    const newComments = this.state.questions[id].comments.slice();
    newComments.push(comment);

    const question = this.state.questions;
    question[id].comments = newComments;

    question[id].comments.map((item) =>{
      console.log("comment.text = " + item.text + item.id);
    })
    this.state.questions[id].comments.map((item)=>{
      console.log(item.text);
    })
    this.setState({questions:question});
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
                        handleCreateComment={this.createComment}
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
