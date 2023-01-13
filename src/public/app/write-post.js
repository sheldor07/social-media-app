$(() => {
    let postForm = document.getElementById("post-form")
    let postTitle = postForm.elements['post-title']
    let postBody = postForm.elements['post-body']

    let btnSubmit = $('#btn-submit')
    btnSubmit.click(() => {
        $.post('/api/posts', {
                title: postTitle.value,
                body: postBody.value,
                userId:window.currentUser.id,

            })
            .done(function (data) {
                alert("added post");
            })

    })
})