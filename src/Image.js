
// variable definitions

allImages = []

let imageDisplay = document.getElementById('image')
let likesCounter = document.getElementById('likes')

// functional logic

function localizeAndRenderImage(){
    localizeImage().then(renderlocalImage)
}


function localizeImage(){
    imageAdapter.showImage().then(res => {
        renderlocalImage(res.url, res.like_count)
        renderComments(res.comments)
    })
}

function renderlocalImage(imgURL, like_count){
    imageDisplay.setAttribute('src', `${imgURL}`)
    likesCounter.innerText = `${like_count}`
}

function optLikeRender(){
    let newNum = parseInt(likesCounter.innerText) + 1
    likesCounter.innerText = newNum
}

// Abandoned class constructors here

// class Image {

//     constructor(name, url,like_count, comments){
//         this.name = name;
//         this.url = url;
//         this.like_count = like_count;
//         this.comments = comments;
//         allImages.push(this)

//     }
  

// }
