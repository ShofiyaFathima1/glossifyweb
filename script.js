document.querySelectorAll('.toggle-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const icon = header.querySelector('i');

    if (content.style.display === 'block') {
      content.style.display = 'none';
      icon.classList.remove('fa-chevron-up');
      icon.classList.add('fa-chevron-down');
    } else {
      document.querySelectorAll('.toggle-content').forEach(c => c.style.display = 'none');
      document.querySelectorAll('.toggle-header i').forEach(i => {
        i.classList.remove('fa-chevron-up');
        i.classList.add('fa-chevron-down');
      });
      content.style.display = 'block';
      icon.classList.remove('fa-chevron-down');
      icon.classList.add('fa-chevron-up');
    }
  });
});
