const projectDetails = [
  {
    "name": "Project name goes here",
    "description": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi", "Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."],
    "featured_image": "./images/project-1-featured.svg",
    "alternative_images": ["./images/project-1-small-1.svg", "./images/project-1-small-2.svg", "./images/project-1-small-3.svg", "./images/project-1-small-4.svg"],
    "technologies": ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    "link_version": "https://zilola-nazarova.github.io/zilola-portfolio/",
    "link_source": "https://github.com/Zilola-Nazarova/zilola-portfolio"
  },
  {
    "name": "Project name goes here",
    "description": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi", "Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."],
    "featured_image": "./images/project-2-featured.svg",
    "alternative_images": ["./images/project-2-small-1.svg", "./images/project-2-small-2.svg", "./images/project-2-small-3.svg", "./images/project-2-small-4.svg"],
    "technologies": ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    "link_version": "https://zilola-nazarova.github.io/zilola-portfolio/",
    "link_source": "https://github.com/Zilola-Nazarova/zilola-portfolio"
  },
  {
    "name": "Project name goes here",
    "description": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi", "Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."],
    "featured_image": "./images/project-3-featured.svg",
    "alternative_images": ["./images/project-3-small-1.svg", "./images/project-3-small-2.svg", "./images/project-3-small-3.svg", "./images/project-3-small-4.svg"],
    "technologies": ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    "link_version": "https://zilola-nazarova.github.io/zilola-portfolio/",
    "link_source": "https://github.com/Zilola-Nazarova/zilola-portfolio"
  },
  {
    "name": "Project name goes here",
    "description": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi", "Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."],
    "featured_image": "./images/project-4-featured.svg",
    "alternative_images": ["./images/project-4-small-1.svg", "./images/project-4-small-2.svg", "./images/project-4-small-3.svg", "./images/project-4-small-4.svg"],
    "technologies": ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    "link_version": "https://zilola-nazarova.github.io/zilola-portfolio/",
    "link_source": "https://github.com/Zilola-Nazarova/zilola-portfolio"
  },
  {
    "name": "Project name goes here",
    "description": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi", "Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."],
    "featured_image": "./images/project-5-featured.svg",
    "alternative_images": ["./images/project-5-small-1.svg", "./images/project-5-small-2.svg", "./images/project-5-small-3.svg", "./images/project-5-small-4.svg"],
    "technologies": ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    "link_version": "https://zilola-nazarova.github.io/zilola-portfolio/",
    "link_source": "https://github.com/Zilola-Nazarova/zilola-portfolio"
  },
  {
    "name": "Project name goes here",
    "description": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi", "Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."],
    "featured_image": "./images/project-6-featured.svg",
    "alternative_images": ["./images/project-6-small-1.svg", "./images/project-6-small-2.svg", "./images/project-6-small-3.svg", "./images/project-6-small-4.svg"],
    "technologies": ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    "link_version": "https://zilola-nazarova.github.io/zilola-portfolio/",
    "link_source": "https://github.com/Zilola-Nazarova/zilola-portfolio"
  }
]

const projects=document.querySelectorAll('.work-card');
for(let i = 0;i < projects.length; i +=1) {
  const card=document.createElement('div');
  card.id=`project-${i}`;
  card.classList.add("project-details");

  const closeBtn=document.createElement('a');
  closeBtn.innerHTML='<img src="./images/popup-close.png">';
  card.appendChild(closeBtn);

  const projectName=document.createElement('h2');
  projectName.textContent=projectDetails[i].name;
  projectName.classList.add("");
  card.appendChild(projectName);

  const technologies=document.createElement('ul');
  technologies.innerHTML=`<li>${projectDetails[i].technologies[0]}</li>
  <li>${projectDetails[i].technologies[1]}</li>
  <li>${projectDetails[i].technologies[2]}</li>`
  technologies.classList.add("");
  card.appendChild(technologies);

  const projectImage=document.createElement('img');
  projectImage.src=projectDetails[i].featured_image;
  projectImage.classList.add("");
  card.appendChild(projectImage);

  for(let j = 0;j < projectDetails[i]["description"].length;j +=1) {
    const projectDecription=document.createElement('p');
    projectDecription.textContent=projectDetails[i].description[j];
    card.appendChild(projectDecription);
  }

  const liveBtn=document.createElement('a');
  liveBtn.textContent="See live";
  liveBtn.href=projectDetails[i].link_version;
  liveBtn.classList.add("");
  card.appendChild(liveBtn);

  const sourceBtn=document.createElement('a');
  sourceBtn.textContent="See source";
  sourceBtn.href=projectDetails[i].link_source;
  sourceBtn.classList.add("");
  card.appendChild(sourceBtn);
  
  document.body.appendChild(card);
}