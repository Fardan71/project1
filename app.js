// add new feature -button
const btn = document.createElement('button');
btn.textContent = 'Add New Feature';
btn.addEventListener('click', () => {
  const newFeatureInput = document.createElement('input');
  newFeatureInput.type = 'text';
  newFeatureInput.placeholder = 'Enter new feature name';

  const newFeatureDiv = document.createElement('div');
  newFeatureDiv.appendChild(newFeatureInput);

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    newFeatureDiv.remove();
  });

  newFeatureDiv.appendChild(deleteBtn);

  const featuresList = document.querySelector('#features');
  featuresList.appendChild(newFeatureDiv);
});