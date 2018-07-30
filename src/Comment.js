

let commentBox = document.getElementById('comments')


function renderComments(commentArr){
    let commentHTML = commentArr.map( function(element){
        return `<li>${element.content}</li><br>`
    } ).join("")
    commentBox.innerHTML = commentHTML
}


// class Comment {
  
// }
