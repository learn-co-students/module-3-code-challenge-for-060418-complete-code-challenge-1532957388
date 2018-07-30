document.addEventListener('DOMContentLoaded', function() {
  const imageId = 1
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`
  const apiUrl = 'https://randopic.herokuapp.com/images/1'
  const imageContainer = document.getElementById('image_card')
  const ulContainer = document.getElementById('comments')

  function index() {
    fetch(apiUrl).then(response=>response.json()).then(data=>iterateOverData(data))
  }

  function iterateOverData(data) {
    let html = `<div id="image-container" class="container">
      <div class="row" id="image_content">
        <div class="card col-md-4"></div>
        <div id="image_card" class="card col-md-4">
            <img src="${data.url}" id="image" data-id/>
            <h4 ${data.name} id="name"></h4>
            <span>Likes:
              <span id="likes">${data.like_count}</span>
            </span>
            <button data-like-button="like" id="like_button">Like</button>
            <form id="comment_form">
              <input id="comment_input" type="text" name="comment" placeholder="Add Comment"/>
              <input id="submit-button-id" type="submit" value="Submit"/>
            </form>
        </div>
        <div class="card col-md-4"></div>
      </div>
    </div>`

    imageContainer.innerHTML += html

    data.comments.map(obj=>showHTML(obj))
  }

  function showHTML(obj) {
    let comments = `
            <ul id="comments">
              <li>${obj.content}</li>
            </ul>`

    ulContainer.innerHTML += comments
  }


  index()

  imageContainer.addEventListener('click', event => {
    event.preventDefault()
    if (event.target.dataset.likeButton === 'like') {
      // console.log(event.target)
    }
  })

  // function likeFeature(id) {
  //   const postConfig = {
  //     method: 'POST',
  //     body: JSON.stringify(
  //       {image_id: id}),
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     }
  //   }
  //   return fetch('https://randopic.herokuapp.com/likes', postConfig).then(response=>response.json())
  // }


})
