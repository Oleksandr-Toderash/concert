document.querySelector('#poster').addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector('#poster-section').scrollIntoView({ behavior: 'smooth' });
})

document.querySelector('#news').addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector('#news-section').scrollIntoView({ behavior: 'smooth' });
})

document.querySelector('#brief').addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector('#brief-section').scrollIntoView({ behavior: 'smooth' });
})

document.querySelector('#contacts').addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector('#contacts-section').scrollIntoView({ behavior: 'smooth' });
})

document.querySelector('#events').addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector('#events-section').scrollIntoView({ behavior: 'smooth' });
})
