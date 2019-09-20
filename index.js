function getRepositories(){
  let input = document.getElementById('username').value;
  const req = new XMLHttpResquest();
  req.addEventListener('load', displayRepositories);
  req.open('GET', `https://api.github.com/users/${username}/repos`);
  req.send();
}