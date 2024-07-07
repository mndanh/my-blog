function saveBlogEntry(entry) {
    let entries = localStorage.getItem('blogEntries');
    if (!entries) {
        entries = [];
    } else {
        entries = JSON.parse(entries);
    }
    entries.push(entry);
    localStorage.setItem('blogEntries', JSON.stringify(entries));
}

function getBlogEntries() {
    let entries = localStorage.getItem('blogEntries');
    if (!entries) {
        return [];
    }
    return JSON.parse(entries);
}
