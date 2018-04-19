const BASE_URL = 'http://localhost:8000/api';

module.exports = {
   
  getBooks(success){
    fetch(`${BASE_URL}/catalog/`)
      .then(response => response.json())
      .then(success)
  },

  createBook(data, success){
    fetch(`${BASE_URL}/catalog/`, {
      'method': 'POST',
      'body': JSON.stringify(data) 
    })
      .then(response => response.json())
      .then(success)
  },

  getTopics(success){
    fetch(`${BASE_URL}/topics/`)
      .then(response => response.json())
      .then(success)
  },

  getComments(id, success){
    fetch(`${BASE_URL}/topics/${id}/comments`)
      .then(response => response.json())
      .then(success)
  },
  
  createComment(data, topic_id, success){
    fetch(`${BASE_URL}/topics/${topic_id}/comments/`, {
      'method': 'POST',
      'body': JSON.stringify(data) 
    })
      .then(response => response.json())
      .then(success)
  },
/*
  deleteTodo(id, success){
    fetch(`${BASE_URL}/todos/${id}/`, {
      'method': 'DELETE'
    })
      .then(response => response.json())
      .then(success)
  }
*/
}