document.addEventListener('DOMContentLoaded', function() {

  const imageId = 20 //Enter your assigned imageId here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  let numLikes = document.getElementById("likes")

  const commentList = document.getElementById("comments")
  const commentFormInput = document.getElementById("comment_input")

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`
// conditionals
  document.addEventListener("click", function(event){
    switch(event.target.dataset.action){
      case "like": 
        event.preventDefault();
        incrementLikes()
        break;
      case "comment":
        event.preventDefault();
        createComment()
        break;
      case "delete":
        event.preventDefault();
    }
  })
// create a new comment and post it
  function createComment(){
    const newList = document.createElement("LI")
    newList.innerText = commentFormInput.value
    commentList.appendChild(newList)
    commentFormInput.value = ""
    postComment(newList)
  }
// render all comments
  function renderCommentsFromDatabase(commentText){
    const newList = document.createElement("LI")
    newList.innerText = commentText
    commentList.appendChild(newList)
  }
// post comment request
  function postComment(listItem){
    console.log(listItem.innerText)
    fetch(commentsURL, {
      method: "POST",
      body: JSON.stringify(
        {
          image_id: 20,
          content: listItem.innerText
        },   
      ),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }

// fetch json object from database
  function index(){
    return fetch(imageURL).then(response => response.json())
  }
// increment likes in the dom and then sends a post request
  function incrementLikes(){
    let parsedNum = parseInt(numLikes.innerHTML)
    parsedNum++
    numLikes.innerHTML = parsedNum
    postLikes()
  }
// post request
  function postLikes(){
    fetch(likeURL, {
      method: "POST",
      body: JSON.stringify(
        {
          image_id: 20
        }
      ),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }
// retrieves likes from index object and puts them in dom
  function getNumOfLikes(){
    index().then(data => data.like_count).then(like_count => numLikes.innerHTML = like_count)
  }
// retrieves comments from index object and renders in dom
  function getAllComments(){
    index().then(data => data.comments).then(array => array.map(element => element.content).forEach(content => renderCommentsFromDatabase(content))) 
  }
// loads the dom
  index()
  getNumOfLikes()
  getAllComments()
  // setNumOfLikes()

})

