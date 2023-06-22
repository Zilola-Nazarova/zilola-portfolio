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

const inputArray = document.getElementById('send-message');

if (storageAvailable('localStorage')) {
  if (localStorage.length < 1) {
    populateStorage();
  } else {
    setInputValues();
  }
} else {
}
// const formData = { name: nameInput.value, email: emailInput.value, body: bodyInput.value, }; 
const formData = {};
// for (let i = 0; i < inputArray.length - 1; i++) {
//   let formData[key] = inputArray[i];
//   key.value = "";
// }

for (let i = 0; i < inputArray.length - 1; i++) {
  const elem = inputArray[i];
  formData[elem.name] = elem.value;
  inputArray[i].onkeypress = populateStorage;
  // setInputValues();
}

function populateStorage() {
  localStorage.setItem('data', JSON.stringify(formData));
  
}

console.log(localStorage);
// console.log(formData);

// function setInputValues() {
//   for (let i = 0; i < inputArray.length - 1; i++) {
//     const putValue = localStorage.getItem(inputArray[i].name);
//  inputArray[i].value = putValue;
//   }
// }


