function loadPosts(){
    let postsContainer = $('#posts-container')
    $.get('/api/posts',(posts) => {
        for(let post of posts){
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
        }   
    })
}