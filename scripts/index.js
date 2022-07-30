const addButton=document.querySelector('.profile__add-button');
const editButton=document.querySelector('.profile__edit-profile');

const popupAll=document.querySelectorAll('.popup');

const formProfile=document.querySelector('.popup__form');
const formInputName=document.querySelector('user-name');
const formInputJob=document.querySelector('user-job');

popupAll.forEach((popup) => {
  popup.addEventListener('click', handleClosePopup);
});

formProfile.addEventListener('submit', handleFormProfileSubmit);