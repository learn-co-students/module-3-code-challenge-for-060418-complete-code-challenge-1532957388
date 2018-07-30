document.addEventListener('DOMContentLoaded', function() {

  // variable definitions
  
  let likeButton =  document.getElementById('like_button')
  let theForm = document.getElementById('comment_form')

  // event listeners
  
  likeButton.addEventListener('click', function(){
    console.log('clicked')
    imageAdapter.postLike().then(localizeImage)
    
  })
  
  theForm.addEventListener('submit', function(event){
    event.preventDefault()
    // console.log(event.target[0].value)
    imageAdapter.postComment(event.target[0].value).then(optCommentRender(event.target[0].value))
    event.target[0].value = ""
  })

  // functions to run
  
  
  localizeImage()

})

// this currently has comments optimistically rendered and likes pessimistically rendered

