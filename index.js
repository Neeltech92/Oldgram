const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let feedPage = document.getElementById("feed-page")
let postFeed = ""

for (let i=0; i<posts.length; i++) {
   postFeed += `
                <div class="post-info">
                    <img id="account-img" src='${posts[i].avatar}' alt="image of ${posts[i].name}" />
                    <div class="name-loc">
                        <a href="#" id="account-name">${posts[i].name}</a>
                        <a href="#" id="account-location">${posts[i].location}</a>
                    </div>
                </div>
                
                <img class="post-img" src='${posts[i].post}'>
                
                <div class="container">
                    <img class="heart" src="images/icon-heart.png" alt="like button">
                    <img class="comment" src="images/icon-comment.png" alt="comment button">
                    <img class="share" src = "images/icon-dm.png" alt="share button">
                </div>
                
                <div class="post-cap">
                    <p id="likes-count">${posts[i].likes} likes</p>
                    <p id="post-cap"><span>${posts[i].username}</span> ${posts[i].comment}</p>
                </div>
               `
}

feedPage.innerHTML = postFeed