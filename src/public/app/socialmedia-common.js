//building in components but on jquery
$(()=>{
    
    $('#navbar').load('./components/navbar.html',loginIfNeeded) //callback cos otherwise it may get called before navbar is loaded
    $('#content').load('./components/all-posts.html')
    $('#footer').load('./components/footer.html')


     
})

function loginIfNeeded(){
    function updateUserNameInNav(user){
        $('#nav-username').text(user)
    }
    window.currentUser = window.localStorage.user ? JSON.parse(window.localStorage.user) : null;
    if(!currentUser){
        $.post('/api/users',{},(user) =>{
            if(user)
            {
                window.localStorage.user = JSON.stringify(user.username)
                alert('registered current user as '+window.localStorage.user)
                currentUser = user
            }
            
        })
    }
    else{
        alert("resuming session as "+currentUser.username)
    }
    updateUserNameInNav(currentUser.username)
}
