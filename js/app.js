document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit)

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick)
});

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const fibreStocklistItem = createStocklistItem(event.target);
  const fibreStocklist = document.querySelector)('#fibre-stocklist');
  fibreStocklist.appendChild(fibreStocklistItem);

  event.target.reset();
};

const createfibreStocklistItem = function (form) {
  const fibreStocklistItem = document.createElement('li');
  fibreStocklistItem.classList.add('fibre-stocklist-item');

  const name = document.createElement('h2');
  name.textContent = form.name.value;
  fibreStocklist.appendChild(name);

  const typeOfFibre = document.createElement('h3');
  typeOfFibre.textContent = form.typeOfFibre.value;
  typeOfFibre.appendChild(typeOfFibre);

  const properties = document.createElement('h4');
  properties.textContent = form.properties.value;
  properties.appendChild(properties);

  const coloursAvailable = document.createElement('h5');
  coloursAvailable.textContent = form.coloursAvailable.value;
  coloursAvailable.appendChild(coloursAvailable);

  const stapleLength = document.createElement('h6');
  stapleLength.textContent = form.stapleLength.value;
  stapleLength.appendChild(stapleLength);

  return fibreStocklistItem;
};

const handleDeleteAllClick = function (event) {
  const fibreStocklist = document.querySelector('#fibre-stocklist');
  fibreStocklist.innerHTML = '';
};
