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

  getUsers(success){
    fetch(`${BASE_URL}/users/`)
      .then(response => response.json())
      .then(success)
  },

  createUser(data, success){
    fetch(`${BASE_URL}/users/`, {
      'method': 'POST',
      'body': JSON.stringify(data) 
    })
      .then(response => response.json())
      .then(success)
  },

  getMyBooks(id, success){
    fetch(`${BASE_URL}/users/${id}/books/`)
      .then(response => response.json())
      .then(success)
  },

  createTuple(id, data, success){
    fetch(`${BASE_URL}/users/${id}/books/`, {
      'method': 'POST',
      'body': JSON.stringify(data) 
    })
      .then(response => response.json())
      .then(success)
  },
  
  deleteTuple (user_id, book_id, success) {
    fetch(`${BASE_URL}/users/${user_id}/books/${book_id}/`, {
      'method': 'DELETE'
    })
      .then(response => response.json())
      .then(success)
  },

  updateUser(user_id, data, success) {
    fetch(`${BASE_URL}/users/${user_id}`, {
      'method': 'PUT',
      'body': JSON.stringify(data) 
    })
      .then(response => response.json())
      .then(success)
  }

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