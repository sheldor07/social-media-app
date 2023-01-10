let navLinks = $('.navbar-nav .nav-link')

navLinks.click((ev)=>{

    let componentUrl = `/components/${$(ev.target).attr('data-component')}.html`
    $('#content').load(componentUrl)
})