
// variable definitions

let commentBox = document.getElementById('comments')

// functional logic

function renderComments(commentArr){
    let commentHTML = commentArr.map( function(element){
        return `<li>${element.content}</li><br>`
    } ).join("")
    commentBox.innerHTML = commentHTML
}

function optCommentRender(unSavedComment) {
    commentBox.innerHTML += `<li>${unSavedComment}</li><br>`
}


// class Comment {
  
// }
