document.addEventListener('DOMContentLoaded', function () {
    const avatar = document.querySelector('#avatar');
    const name = document.querySelector('#name');
    const username = document.querySelector('#username');
    const repositories = document.querySelector('#repositories');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const githubLink = document.querySelector('#github-link');

    fetch('https://api.github.com/users/VinnMac')
    .then(function(resp) {

        if (!resp.ok) {
            throw new Error(`Usuário não encontrado`);
        }
        return resp.json();
    })
    .then(function(json) {
        avatar.src = json.avatar_url;
        githubLink.href = json.html_url;
        name.innerText = json.name;
        username.innerText = json.login;
        repositories.innerText = json.public_repos;
        followers.innerText = json.followers;
        following.innerText = json.following;
    })
    .catch(function(error) {
        alert(error.message);
    })
})