// variables
console.log('adapter linked')
const imageId = 7 //Enter your assigned imageId here

const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

const likeURL = `https://randopic.herokuapp.com/likes/`

const commentsURL = `https://randopic.herokuapp.com/comments/`

//adapter object

let imageAdapter = generateAdapter(imageURL)



function generateAdapter(apiLink){

    return{
        showImage: function(){
            return fetch(apiLink).then(res => res.json())
        },

        postLike: function(){
            let postConfig = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    image_id: `${imageId}`
                })
            }            

            return fetch(likeURL, postConfig).then(res => res.json())
        },


        postComment: function(content){
            let postConfig = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    image_id: `${imageId}`,
                    content: `${content}`
                })
            }

            return fetch(commentsURL, postConfig).then(res => res.json())
        }
    }

}