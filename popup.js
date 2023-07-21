const projectDetails = [
  {
    name: 'Project name goes here',
    description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi', 'Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'],
    featured_image: './images/project-1.png',
    alternative_images: ['./images/details-popup/project-1-small-1.svg', './images/details-popup/project-1-small-2.svg', './images/details-popup/project-1-small-3.svg', './images/details-popup/project-1-small-4.svg'],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    link_version: 'https://zilola-nazarova.github.io/capstone-project-module-1/',
    link_source: 'https://github.com/Zilola-Nazarova/capstone-project-module-1',
  },
  {
    name: 'Project name goes here',
    description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi', 'Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'],
    featured_image: './images/details-popup/project-2-featured.svg',
    alternative_images: ['./images/details-popup/project-2-small-1.svg', './images/details-popup/project-2-small-2.svg', './images/details-popup/project-2-small-3.svg', './images/details-popup/project-2-small-4.svg'],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    link_version: 'https://zilola-nazarova.github.io/zilola-portfolio/',
    link_source: 'https://github.com/Zilola-Nazarova/zilola-portfolio',
  },
  {
    name: 'Project name goes here',
    description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi', 'Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'],
    featured_image: './images/details-popup/project-3-featured.svg',
    alternative_images: ['./images/details-popup/project-3-small-1.svg', './images/details-popup/project-3-small-2.svg', './images/details-popup/project-3-small-3.svg', './images/details-popup/project-3-small-4.svg'],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    link_version: 'https://zilola-nazarova.github.io/zilola-portfolio/',
    link_source: 'https://github.com/Zilola-Nazarova/zilola-portfolio',
  },
  {
    name: 'Project name goes here',
    description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi', 'Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'],
    featured_image: './images/details-popup/project-4-featured.svg',
    alternative_images: ['./images/details-popup/project-4-small-1.svg', './images/details-popup/project-4-small-2.svg', './images/details-popup/project-4-small-3.svg', './images/details-popup/project-4-small-4.svg'],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    link_version: 'https://zilola-nazarova.github.io/zilola-portfolio/',
    link_source: 'https://github.com/Zilola-Nazarova/zilola-portfolio',
  },
  {
    name: 'Project name goes here',
    description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi', 'Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'],
    featured_image: './images/details-popup/project-5-featured.svg',
    alternative_images: ['./images/details-popup/project-5-small-1.svg', './images/details-popup/project-5-small-2.svg', './images/details-popup/project-5-small-3.svg', './images/details-popup/project-5-small-4.svg'],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    link_version: 'https://zilola-nazarova.github.io/zilola-portfolio/',
    link_source: 'https://github.com/Zilola-Nazarova/zilola-portfolio',
  },
  {
    name: 'Project name goes here',
    description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi', 'Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'],
    featured_image: './images/details-popup/project-6-featured.svg',
    alternative_images: ['./images/details-popup/project-6-small-1.svg', './images/details-popup/project-6-small-2.svg', './images/details-popup/project-6-small-3.svg', './images/details-popup/project-6-small-4.svg'],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    link_version: 'https://zilola-nazarova.github.io/zilola-portfolio/',
    link_source: 'https://github.com/Zilola-Nazarova/zilola-portfolio',
  },
];

for (let i = 0; i < projectDetails.length; i += 1) {
  const workSection = document.getElementById('work-section');
  const card = document.createElement('div');
  card.classList.add('work-card', `w${i + 1}`);

  const projectPreview = document.createElement('img');
  projectPreview.src = projectDetails[i].featured_image;
  projectPreview.classList.add('project-preview');
  card.appendChild(projectPreview);

  const workInfo = document.createElement('div');
  workInfo.classList.add('work-info');

  const cardProjectName = document.createElement('p');
  cardProjectName.textContent = projectDetails[i].name;
  cardProjectName.classList.add('poppins', 'project-name', 'white');
  workInfo.appendChild(cardProjectName);

  const cardTechnologies = document.createElement('ul');
  cardTechnologies.innerHTML = `<li>${projectDetails[i].technologies[0]}</li>
  <li>${projectDetails[i].technologies[1]}</li>
  <li>${projectDetails[i].technologies[2]}</li>`;
  cardTechnologies.classList.add('poppins', 'dark-blue', 'category-list');
  workInfo.appendChild(cardTechnologies);

  const seeProject = document.createElement('a');
  seeProject.textContent = 'See this project';
  seeProject.href = '#';
  seeProject.classList.add('see-project', 'white', 'poppins');
  workInfo.appendChild(seeProject);

  card.appendChild(workInfo);
  workSection.appendChild(card);
}

for (let i = 0; i < projectDetails.length; i += 1) {
  const popupCard = document.createElement('div');
  popupCard.id = `project-${i}`;
  popupCard.classList.add('project-details');

  const closeBtn = document.createElement('a');
  closeBtn.innerHTML = '<img src="./images/details-popup/ic_cross.svg">';
  closeBtn.classList.add('popup-close');
  popupCard.appendChild(closeBtn);

  const projectName = document.createElement('h2');
  projectName.textContent = projectDetails[i].name;
  projectName.classList.add('poppins', 'dark-blue');
  popupCard.appendChild(projectName);

  const technologies = document.createElement('ul');
  technologies.innerHTML = `<li>${projectDetails[i].technologies[0]}</li>
  <li>${projectDetails[i].technologies[1]}</li>
  <li>${projectDetails[i].technologies[2]}</li>`;
  technologies.classList.add('poppins', 'dark-blue');
  popupCard.appendChild(technologies);

  const imageBox = document.createElement('div');
  imageBox.classList.add('image-box');
  const featuredImage = document.createElement('img');
  featuredImage.src = projectDetails[i].alternative_images[0]; // eslint-disable-line
  featuredImage.classList.add('featured');
  imageBox.appendChild(featuredImage);
  for (let j = 0; j < projectDetails[i].alternative_images.length; j += 1) {
    const smallImage = document.createElement('img');
    smallImage.src = projectDetails[i].alternative_images[j];
    smallImage.classList.add('small-image');
    imageBox.appendChild(smallImage);
  }
  const nextImage = document.createElement('button');
  nextImage.innerHTML = '<img src="./images/details-popup/Vector_5.svg">';
  nextImage.href = '#';
  nextImage.classList.add('next-image');
  imageBox.appendChild(nextImage);
  const previousImage = document.createElement('button');
  previousImage.innerHTML = '<img src="./images/details-popup/Vector_4.svg">';
  previousImage.href = '#';
  previousImage.classList.add('previous-image');
  imageBox.appendChild(previousImage);
  popupCard.appendChild(imageBox);

  const projectDiv = document.createElement('div');
  projectDiv.classList.add('project-div');
  popupCard.appendChild(projectDiv);

  for (let j = 0; j < projectDetails[i].description.length; j += 1) {
    const projectDecription = document.createElement('p');
    projectDecription.textContent = projectDetails[i].description[j];
    projectDecription.classList.add('poppins', 'dark-blue');
    projectDiv.appendChild(projectDecription);
  }

  const liveBtn = document.createElement('a');
  liveBtn.textContent = 'See live';
  liveBtn.href = projectDetails[i].link_version;
  liveBtn.classList.add('poppins', 'dark-blue', 'popup-link');
  projectDiv.appendChild(liveBtn);

  const sourceBtn = document.createElement('a');
  sourceBtn.textContent = 'See source';
  sourceBtn.href = projectDetails[i].link_source;
  sourceBtn.classList.add('poppins', 'dark-blue', 'popup-link');
  projectDiv.appendChild(sourceBtn);

  const previousProject = document.createElement('a');
  previousProject.textContent = 'Previous project';
  previousProject.href = '#';
  previousProject.classList.add('poppins', 'dark-blue', 'navigate-project', 'previous');
  projectDiv.appendChild(previousProject);

  const nextProject = document.createElement('a');
  nextProject.textContent = 'Next project';
  nextProject.href = '#';
  nextProject.classList.add('poppins', 'dark-blue', 'navigate-project', 'next');
  projectDiv.appendChild(nextProject);

  document.body.appendChild(popupCard);
}

const projectBtn = document.querySelectorAll('.see-project');
for (let i = 0; i < projectBtn.length; i += 1) {
  projectBtn[i].addEventListener('click', () => {
    const projectPopup = document.getElementById(`project-${i}`);
    projectPopup.classList.toggle('visible');
    const restOfThePage = document.querySelectorAll('header, footer, section');
    for (let i = 0; i < restOfThePage.length; i += 1) {
      restOfThePage[i].classList.toggle('unvisible');
    }
  });
}

const closeProjectBtn = document.querySelectorAll('.project-details .popup-close');
for (let i = 0; i < closeProjectBtn.length; i += 1) {
  closeProjectBtn[i].addEventListener('click', () => {
    const projectPopup = document.getElementById(`project-${i}`);
    projectPopup.classList.toggle('visible');
    const restOfThePage = document.querySelectorAll('header, section, footer');
    for (let i = 0; i < restOfThePage.length; i += 1) {
      restOfThePage[i].classList.toggle('unvisible');
    }
  });
}

const navigateNext = document.querySelectorAll('.next');
const navigatePrevious = document.querySelectorAll('.previous');
for (let i = 0; i < projectDetails.length; i += 1) {
  navigateNext[i].addEventListener('click', () => {
    const projectPopup = document.getElementById(`project-${i}`);
    projectPopup.classList.toggle('visible');
    const nextProject = document.getElementById(`project-${(i + 1) % 6}`);
    nextProject.classList.toggle('visible');
  });

  navigatePrevious[i].addEventListener('click', () => {
    const projectPopup = document.getElementById(`project-${i}`);
    projectPopup.classList.toggle('visible');
    const previousProject = document.getElementById(`project-${Math.abs((i - 1) % 6)}`);
    previousProject.classList.toggle('visible');
  });
}