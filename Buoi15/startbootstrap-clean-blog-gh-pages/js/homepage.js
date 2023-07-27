const content_blogs = document.getElementById('content-blogs');
fetch('https://64c25c1deb7fd5d6ebcfb421.mockapi.io/api/v1/blogs',{
    method: 'GET',
})
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err)
    })



const renderBlogs = (blogs) =>{
    let stringHTML = ''
    for (let blog of blogs){
        stringHTML += `
        <div class="post-preview">
            <a href="post.html">
                 <h2 class="post-title">${blog.title}</h2>
                 <h3 class="post-subtitle">${blog.description}</h3>
             </a>
            <p class="post-meta">
                Posted by
                <a href="#!">${blog.author}</a>
                on ${blog.createdAt}
            </p>
        </div>
                   
            <hr class="my-4" />
        `
    }
    content_blogs.innerHTML = stringHTML;
}