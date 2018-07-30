document.addEventListener('DOMContentLoaded', function() {

  const imageId = 13 //Enter your assigned imageId here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  const imageDiv = document.getElementById('image')

  const imageNameDiv = document.getElementById('name')

  const likesSpan = document.getElementById('likes')

  const commentsList = document.getElementById('comments')

  const commentInput = document.getElementById('comment_input')

  const rootDiv = document.getElementById('image_content')

  rootDiv.addEventListener("click", function(event){
    switch(event.target.dataset.action){
      case "like":
      incrementLikeHTML()
      postLikeBackend()
      break;

      case "post-comment":
      event.preventDefault()
      postCommmentFrontEnd(commentInput.value)
      postCommentBackEnd(commentInput.value)
      break;

      case "delete-comment":
      event.preventDefault()
      deleteCommentFrontEnd(event.target.dataset.commentId)
      deleteCommentBackEnd(event.target.dataset.commentId)
    }
  })

fetchPage()
incrementLikeHTML()

function deleteCommentBackEnd(commentId){
  return fetch('https://randopic.herokuapp.com/comments/' + commentId, {
    method: 'DELETE'
  })
}

function deleteCommentFrontEnd(commentId){
  const commentDiv = document.getElementById(commentId)
  commentDiv.innerHTML = ""

}

function postCommentBackEnd(commentContent){
  return fetch('https://randopic.herokuapp.com/comments', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      image_id: 13,
      content: commentContent
    })
  })
}

function postCommmentFrontEnd(comment){
  commentsList.innerHTML += `
  <br>
  <div class="comment" id=${comment.id}><li><p>${comment}</p></li><button class="button" data-action="delete-comment">delete</button>
  </div>
  `
}

function postLikeBackend(){
  return fetch('https://randopic.herokuapp.com/likes', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      image_id: 13
    })
  })
}

function incrementLikeHTML(){
  const currentLikeAmount = parseInt(likesSpan.innerText)
  likesSpan.innerText = currentLikeAmount + 1
}

function fetchPage(){
  return fetch('https://randopic.herokuapp.com/images/13').then(resp => resp.json()).then(resp => {imageDiv.src = resp.url; imageNameDiv.innerText = resp.name; likesSpan.innerText = resp.like_count; commentsList.innerHTML =  generateCommentHTML(resp.comments)} )
}

function generateCommentHTML(commentsArr){
  return commentsArr.map(commentObj =>
    `
    <br>
    <div class="comment" id=${commentObj.id}>
    <li><p>${commentObj.content}</p></li><button class="button" data-action="delete-comment" data-comment-id=${commentObj.id}>delete</button>
    </div>
    `
  ).join("")
}
})
