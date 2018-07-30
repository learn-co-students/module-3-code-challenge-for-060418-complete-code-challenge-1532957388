document.addEventListener('DOMContentLoaded', function() {

  
  localizeImage()

  let likeButton =  document.getElementById('like_button')
  let theForm = document.getElementById('comment_form')

  likeButton.addEventListener('click', function(){
    console.log('clicked')
    imageAdapter.postLike().then(localizeImage)
    
  })

  theForm.addEventListener('submit', function(event){
    event.preventDefault()
    // console.log(event.target[0].value)
    imageAdapter.postComment(event.target[0].value).then(localizeImage)
    event.target[0].value = ""
  })



})

