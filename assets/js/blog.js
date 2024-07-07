document.addEventListener('DOMContentLoaded', function() {
    const entries = getBlogEntries();
    const entriesContainer = document.getElementById('entries');
    entries.forEach(entry => {
        const entryElement = document.createElement('div');
        entryElement.classList.add('entry');
        entryElement.innerHTML = `
            <h2>${entry.title}</h2>
            <p>${entry.content}</p>
            <span>By ${entry.username} on ${entry.date}</span>
        `;
        entriesContainer.appendChild(entryElement);
    });

    const toggleButton = document.getElementById('toggle-theme');
    toggleButton.addEventListener('click', toggleTheme);
});

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}
