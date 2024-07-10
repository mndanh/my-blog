document.addEventListener('DOMContentLoaded', function() {
    const blogEntriesContainer = document.getElementById('blog-entries');
    const blogEntries = JSON.parse(localStorage.getItem('blogEntries')) || [];

    blogEntries.forEach(entry => {
        const entryElement = document.createElement('div');
        entryElement.classList.add('entry');
        entryElement.innerHTML = `
            <h2>${entry.title}</h2>
            <h3>${entry.content}</h3>
            <p class="posted-by">Posted by: ${entry.username}</p>
        `;
        blogEntriesContainer.appendChild(entryElement);
    });
});

document.getElementById('back-button').addEventListener('click', function() {
    window.location.href = 'index.html';
});

