/* eslint-disable consistent-return */
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException
      // everything except Firefox
      && (e.code === 22
        // Firefox
        || e.code === 1014
        // test name field too, because code might not be present
        // everything except Firefox
        || e.name === 'QuotaExceededError'
        // Firefox
        || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      // acknowledge QuotaExceededError only if there's something already stored
      && storage
      && storage.length !== 0
    );
  }
}

function setFormValues() {
  const currentName = localStorage.getItem('name');
  const currentEmail = localStorage.getItem('email');
  const currentMessage = localStorage.getItem('message');

  document.getElementById('user-name').value = currentName;
  document.getElementById('user-email').value = currentEmail;
  document.getElementById('user-message').value = currentMessage;
}

function populateStorage() {
  localStorage.setItem('name', document.getElementById('user-name').value);
  localStorage.setItem('email', document.getElementById('user-email').value);
  localStorage.setItem('message', document.getElementById('user-message').value);
  setFormValues();
}

if (storageAvailable('localStorage')) {
  if (localStorage.length < 1) {
    populateStorage();
  } else {
    setFormValues();
  }
} else {
  return false;
}

document.getElementById('user-name').onchange = populateStorage;
document.getElementById('user-email').onchange = populateStorage;
document.getElementById('user-message').onchange = populateStorage;