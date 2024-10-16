function toggleCollapse(heading) 
{
    let content = heading.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
}
document.addEventListener("DOMContentLoaded", () => {
    const headings = document.querySelectorAll("h1, h2, h3");
    headings.forEach(heading => {
        heading.addEventListener('click', () => toggleCollapse(heading));
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const toc = document.getElementById("hi");
    const tocList = document.createElement("ul");
    const headings = document.querySelectorAll("h1, h2");
    headings.forEach((heading, index) => {
        const tocItem = document.createElement("li");
        const tocLink = document.createElement("a");
        tocLink.href = "#" + heading.innerText.replace(/\s/g, '');
        tocLink.innerText = heading.innerText;
        heading.id = heading.innerText.replace(/\s/g, '');
        tocItem.appendChild(tocLink);
        tocList.appendChild(tocItem);
    });
    toc.appendChild(tocList);
});
