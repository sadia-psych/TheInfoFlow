// Handle form submission
document.getElementById('subscribe-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    alert(`Thank you for subscribing, ${email}!`);
    document.getElementById('subscribe-form').reset();
  });