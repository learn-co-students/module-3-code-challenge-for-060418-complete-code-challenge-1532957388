
allImages = []

let imageDisplay = document.getElementById('image')
let likesCounter = document.getElementById('likes')



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
