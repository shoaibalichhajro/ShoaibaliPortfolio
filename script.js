
const headers = document.querySelectorAll('.skills-header');
headers.forEach(header => {
  header.addEventListener('click', () => {
    const list = header.nextElementSibling;
    const open = list.style.display === 'flex';
    document.querySelectorAll('.skills-list').forEach(l => l.style.display = 'none');
    if (!open) list.style.display = 'flex';
  });
});

const projectHeaders = document.querySelectorAll('.project-header');
projectHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const details = header.nextElementSibling;
    const open = details.style.display === 'block';
    document.querySelectorAll('.project-details').forEach(d => d.style.display = 'none');
    if (!open) details.style.display = 'block';
  });
});
