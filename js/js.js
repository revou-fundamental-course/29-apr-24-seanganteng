var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Ganti gambar setiap 2 detik
}

function validation() {
    let username = document.getElementById('nama').value;
    console.log(username);
    if (username == '' || username == null) {
        alert('Username Anda Kosong!!')
    }
    let email = document.getElementById('email').value;
    console.log(email);
    if (email == '' || email == null) {
        alert('Alamat Email Anda Kosong!!')
    }
}

document.getElementById('send').addEventListener('click', () => validation())

