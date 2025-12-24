let likes = 0;

function likeProject() {
    likes++;
    document.getElementById("likeCount").innerText = "Likes: " + likes;
}

function sendMail() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let mailLink = `mailto:sakshi@example.com
        ?subject=Portfolio Contact from ${name}
        &body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    window.location.href = mailLink;
}
