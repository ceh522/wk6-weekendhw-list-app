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

  const name = document.createElement('ul');
  name.textContent = `Name: ${form.name.value}`;
  fibresListItem.appendChild(name);

  const typeOfFibre = document.createElement('ul');
  typeOfFibre.textContent = `Type of fibre: ${form.typeOfFibre.value}`;
  fibresListItem.appendChild(typeOfFibre);

  const properties = document.createElement('ul');
  properties.textContent = `Properties: ${form.properties.value}`;
  fibresListItem.appendChild(properties);

  const coloursAvailable = document.createElement('ul');
  coloursAvailable.textContent = `Colours Available: ${form.coloursAvailable.value}`;
  fibresListItem.appendChild(coloursAvailable);

  const stapleLength = document.createElement('ul');
  stapleLength.textContent = `Staple Length: ${form.stapleLength.value}`;
  fibresListItem.appendChild(stapleLength);

  return fibresListItem;
};

const handleDeleteAllClick = function (event) {
  const fibresList = document.querySelector('#fibres-list');
  fibresList.innerHTML = '';
};
