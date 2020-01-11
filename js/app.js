document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
});

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const fibresListItem = createfibresListItem(event.target);
  const fibresList = document.querySelector('#fibres-list');
  fibresList.appendChild(fibresListItem);

  event.target.reset();
};

const createfibresListItem = function (form) {
  const fibresListItem = document.createElement('li');
  fibresListItem.classList.add('fibres-list-item');

  const name = document.createElement('h2');
  name.textContent = form.name.value;
  fibresListItem.appendChild(name);

  const typeOfFibre = document.createElement('h3');
  typeOfFibre.textContent = form.typeOfFibre.value;
  fibresListItem.appendChild(typeOfFibre);

  const properties = document.createElement('h4');
  properties.textContent = form.properties.value;
  fibresListItem.appendChild(properties);

  const coloursAvailable = document.createElement('h5');
  coloursAvailable.textContent = form.coloursAvailable.value;
  fibresListItem.appendChild(coloursAvailable);

  const stapleLength = document.createElement('h6');
  stapleLength.textContent = form.stapleLength.value;
  fibresListItem.appendChild(stapleLength);

  return fibresListItem;
};

const handleDeleteAllClick = function (event) {
  const fibresList = document.querySelector('#fibres-list');
  fibresList.innerHTML = '';
};
