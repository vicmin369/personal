// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active')
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      //active navbar links
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });
  // sticky header
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  // remove toggle icon and navbar when click navbar links (scroll)
  menuIcon.classList.remove('bx-x')
  navbar.classList.remove('active')
}
// animation footer on scroll

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Cegah pengiriman formulir biasa

  // Ambil data dari formulir
  const fullname = document.querySelector('input[placeholder="Fullname"]').value;
  const email = document.querySelector('input[placeholder="Email Address"]').value;
  const mobileNumber = document.querySelector('input[placeholder="Mobile Number"]').value;
  const   
 mailSubject = document.querySelector('input[placeholder="Mail Subject"]').value;
  const message = document.querySelector('textarea[placeholder="Your Message"]').value;

  // Buat URL WhatsApp
  const phoneNumber = "6281234567890"; // Ganti dengan nomor WhatsApp Anda
  const whatsappMessage = `Formulir Baru:\n\n*Nama:* ${fullname}\n*Email:* ${email}\n*Nomor HP:* ${mobileNumber}\n*Subjek:* ${mailSubject}\n*Pesan:* ${message}`;

  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // Redirect pengguna
  window.location.href = whatsappURL;
});
