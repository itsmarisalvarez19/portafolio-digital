
const filters = document.querySelectorAll('.filter');
const works = document.querySelectorAll('.work');
filters.forEach(btn => btn.addEventListener('click', () => {
  filters.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const value = btn.dataset.filter;
  works.forEach(card => {
    card.style.display = value === 'all' || card.dataset.category === value ? 'inline-block' : 'none';
  });
}));
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
},{threshold:.14});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
