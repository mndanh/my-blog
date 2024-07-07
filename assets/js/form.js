document.getElementById('blog-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const blogEntry = { username, title, content, date: new Date().toLocaleString() };
    saveBlogEntry(blogEntry);
    window.location.href = 'blog.html';
});
