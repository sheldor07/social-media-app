function loadMyPosts() {
    let postsContainer = $('#posts-container')
    let postCount = 0
    $.get('/api/posts', (posts) => {
        for (let post of posts) {
            console.log(post.user.username)
            if (post.user.username === window.currentUser.username) {
                postsContainer.append(`
           <div class="col-4">
           <div class="card m-2">
           <div class="card-body mx-2">
               <h5 class="card-title">${post.title}</h5>
               <h6 class="card-subtitle mb-2 text-muted">${post.user.username}</h6>
               <p class="card-text">${post.body.substr(0,200)}....</p>
               <a href="#" class="card-link">Read more</a>
               <a href="#" class="card-link">Like</a>
           </div>
           </div>
       </div>`)
                postCount++
            }

        }
        if (postCount == 0) {
            postsContainer.append(`
            <div id='dog-photo-div'>
            <img src='./media/dog-picture.webp' id='dog-photo' >
            <h2>You don't have any posts. Post more!</h2>
            </div>
            `)
        }
    })
}