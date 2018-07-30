
// variable definitions

let commentBox = document.getElementById('comments')

// functional logic

function renderComments(commentArr){
    let commentHTML = commentArr.map( function(element){
        return `<li>${element.content}</li><br>`
    } ).join("")
    commentBox.innerHTML = commentHTML
}
// this sorts comments by ID, but I can't tell how IDs are assigned - if I wanted them in order of creation, I would sort by the 'created_at' attribute, and then map over *that* array to create the commentHTML. ran out of time on this one.


function optCommentRender(unSavedComment) {
    commentBox.innerHTML += `<li>${unSavedComment}</li><br>`
}


// class Comment {
  
// }
