document.getElementById('blog-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const blogEntry = {
        username: username,
        title: title,
        content: content
    };

    let blogEntries = JSON.parse(localStorage.getItem('blogEntries')) || [];
    blogEntries.unshift(blogEntry);
    localStorage.setItem('blogEntries', JSON.stringify(blogEntries));

    window.location.href = 'blog.html';
});
