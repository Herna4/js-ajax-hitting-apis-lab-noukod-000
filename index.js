function getRepositories(){
  let input = document.getElementById('username').value;
  const req = new XMLHttpResquest();
  req.addEventListener('load', displayRepositories);
  req.open('GET', `https://api.github.com/users/${username}/repos`);
  req.send();
}

function displayCommits(){
  let commits= JSON.parse(this.responseText);
  // console.log(commits);

  const commitList =
  `<ul>
    ${commits.map(commit => `
      <li>
        ${commit.commit.author.name}
        ${commit.author.login}
        ${commit.commit.message}
      </li>
        `).join('')}
    </ul>`
    document.getElementById('details').innerHTML = commitList;
}

function displayBranches(){
  let branches= JSON.parse(this.responseText)
  const branchlist =
  `
  <ul>
    ${branches.map(branch => `
      <li>
        ${branch.name}
      </li>`).join('')}
  </ul>`
  document.getElementById('details').innerHTML = branchlist
}

function getBranches(el){
  let username = document.querySelector('input').value;
  let repository = el.dataset.repo;
  let url = `https://api.github.com/repos/${username}/${repository}` + `/branches`
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayBranches);
  req.open('GET', url);
  req.send();
}

function displayRepositories(){
  
}
