function getRepositories(){
  const req = XMLHttpResquest();
  req.open('GET', `https://api.github.com/users/${username}/repos`);
  req.send('');
  
}