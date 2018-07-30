document.addEventListener('DOMContentLoaded', function() {

  // variable definitions
  
  let likeButton =  document.getElementById('like_button')
  let theForm = document.getElementById('comment_form')

  // event listeners
  
  likeButton.addEventListener('click', function(){
    console.log('clicked')
    optLikeRender();
    imageAdapter.postLike()  
  })
  
  theForm.addEventListener('submit', function(event){
    event.preventDefault()
    // console.log(event.target[0].value)
    optCommentRender(event.target[0].value)
    imageAdapter.postComment(event.target[0].value)
    event.target[0].value = ""
  })
  
  localizeImage()

})


