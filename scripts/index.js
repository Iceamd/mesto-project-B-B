//profile
const profile=document.querySelector('.prpfile');
const profileName=document.querySelector('.profile__title');
const profileAbout=document.querySelector('.profile__subtitle');
const addButton=document.querySelector('.profile__add-button');
const editButton=document.querySelector('.profile__edit-profile');
//profile
const popups=document.querySelectorAll('.popup');
const popupProfile=document.querySelector('.popup_edit-profile');
const profileForm=popupProfile.querySelector('.popup__form');
const popupCard=document.querySelector('.popup_add-card');
const cardForm=document.querySelector('.popup__form');
const popupPhoto=document.querySelector('.popup_image');
const picturePopup=popupPhoto.querySelector('.popup__picture');
const descriptionPopup=popupPhoto.querySelector('.figure__quote');

//form
const formProfileEdit=popupProfile.querySelector('.popup__form');

//template
const cardContainer=document.querySelector('.elements__container');
const cardTemplate=document.querySelector('.element').content;

function openPopup(popup) {
  popup.classList.add('popup_opened');
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}
function openedCardPopup(element){
  picturePopup.src=element.src;
  picturePopup.alt=element.alt;
  descriptionPopup.textContent=element.alt;
  openPopup(popupPhoto);
}
function deleteCard(cardElement){
  cardElement.remove();
}

function editProfile(evt){
  evt.preventDefault();
  profileName.textContent-profileForm.name.value;
  profileAbout.textContent-profileForm.job.value;
  closePopup(popupProfile);
}

function cardProfile(evt){
  evt.preventDefault(); 
  const linkImage= cardForm.text.value;
  const nameImage= cardForm.url.value;
  const newCard=createCard(nameImage, linkImage);  
  cardContainer.prepend(newCard);
  cardForm.text.value='';
  cardForm.url.value='';
}

function createCard(name, link) {
const cardElement=cardTemplate.querySelector('.card').cloneNode(true);
const cardImage=cardElement.querySelector('.element__foto"');
cardImage.src= link;
cardImage.alt= name;
cardElement.querySelector('.element__text').textContent = name;
cardImage.addEventListener('click', evt =>{
  openedCardPopup(cardImage);
})
cardElement.querySelector('.element__heart').addEventListener('click', evt=> {
  evt.target.classList.toggle('element__heart_active');
});
cardElement.querySelector('.element__delete"').addEventListener('click', evt=> {
 deleteCard(cardElement);
});
}

addButton.addEventListener('click', evt => {
  openPopup(popupCard);
});

editButton.addEventListener('click', evt => {
  formProfileEdit.name.value=profileName.textContent;
  formProfileEdit.job.value=profileAbout.textContent;
  openPopup(popupProfile);
});

popups.forEach(popup => {
  popup.addEventListener('click', evt => {
    evt.target.classList.contains('popup__close') ? closePopup(popup): false;
})
});

initialCards.forEach(card => {
  const newCard=createCard(card.name, card.link);
  cardContainer.prepend(newCard);
})

profileForm.addEventListener('submit', editProfile);
cardForm.addEventListener('submit', cardProfile);

//Я уже очень сильно запутался.Не понимаю почему не рабоает. Помогите плиз