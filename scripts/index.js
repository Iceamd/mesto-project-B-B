
const popupProfile = document.querySelector('#popup-profile');
const btnPopupClose = popupProfile.querySelector('.popup__close');
const popupName = popupProfile.querySelector('#popup-name');
const popupDescription = popupProfile.querySelector('#popup-description');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const popupButton = document.querySelector('.popup__button');
const popupForm = popupProfile.querySelector('.popup__form');
const cardElements = document.querySelectorAll('.element');

const imageClose = document.querySelector('#image-close');
const popupImage = document.querySelector('#popup-big-image');
const popupPicture = popupImage.querySelector('.popup-image__picture');
const popupCaption = popupImage.querySelector('.popup-image__caption');


const btnPopupOpen = document.querySelector('.profile__edit-button');

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

btnPopupOpen.addEventListener('click', function (evn) {
    openPopup(popupProfile);
    popupName.value = profileName.textContent;
    popupDescription.value = profileDescription.textContent;
})


btnPopupClose.addEventListener('click', function (evn) {
    closePopup(popupProfile);
})


popupForm.addEventListener('submit', function (evn) {
    profileName.textContent = popupName.value;
    profileDescription.textContent = popupDescription.value;
    evn.preventDefault();
    closePopup(popupProfile);
})


const popupCard = document.querySelector('#popup-card');
const btnPopupCardClose = popupCard.querySelector('.popup__close');
const popupFormCard = popupCard.querySelector('.popup__form');
const popupNameCard = popupCard.querySelector('#popup-name-card');
const popupImageCard = popupCard.querySelector('#popup-image');

const profileButton = document.querySelector('.profile__add-button');
const cardTemplate = document.querySelector('#card-template');

const elements = document.querySelector('.elements');



profileButton.addEventListener('click', function (evn) {
    openPopup(popupCard);

    popupNameCard.value = '';
    popupImageCard.value = '';

})


btnPopupCardClose.addEventListener('click', function (evn) {
    closePopup(popupCard);
})


function removeCard(evn) {
    const localTrash = evn.target;
    const localCard = localTrash.parentElement;
    localCard.remove();
}

function addLike(evn) {
    const localLike = evn.target;
    localLike.classList.toggle('element__heart_active');
}

function showImage(evn) {
    const link = evn.target.getAttribute('src');
    popupPicture.setAttribute('src', link);
    const title = evn.target.parentElement.querySelector('.element__text');
    popupCaption.textContent = title.textContent;
    openPopup(popupImage);
}


function createCard(descr, img) {
    const templateContent = cardTemplate.content;
    const newCard = templateContent.querySelector('.element').cloneNode(true);

    const elementImage = newCard.querySelector('.element__foto');
    const elementTitle = newCard.querySelector('.element__text');

    elementTitle.textContent = descr;
    elementImage.setAttribute('src', img);
    elementImage.setAttribute('alt', 'фото ' + descr);


    const localTrash = newCard.querySelector('.element__delete');
    localTrash.addEventListener('click', removeCard);


    const localLike = newCard.querySelector('.element__heart');
    localLike.addEventListener('click', addLike);


    const localPicture = newCard.querySelector('.element__foto');
    localPicture.addEventListener('click', showImage);

    return newCard;
}


popupFormCard.addEventListener('submit', function (evn) {
    const newCard = createCard(popupNameCard.value, popupImageCard.value);
    elements.prepend(newCard);


evn.preventDefault();
closePopup(popupCard);
})

initialCards.forEach(card => {
    const newCard = createCard(card.name, card.link);
    elements.append(newCard);
})


imageClose.addEventListener('click', function (evn) {
    closePopup(popupImage);
})



