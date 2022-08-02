
const popupProfile = document.querySelector('#popup-profile');
const profileCloseBtn = popupProfile.querySelector('.popup__close');
const popupName = popupProfile.querySelector('#popup-name');
const popupDescription = popupProfile.querySelector('#popup-description');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const profileForm = popupProfile.querySelector('.popup__form');
const cardElements = document.querySelectorAll('.element');

const imageClose = document.querySelector('#image-close');
const popupImage = document.querySelector('#popup-big-image');
const popupPicture = popupImage.querySelector('.popup-image__picture');
const popupCaption = popupImage.querySelector('.popup-image__caption');


const profileOpenBtn = document.querySelector('.profile__edit-button');

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

profileOpenBtn.addEventListener('click', function (evn) {
    openPopup(popupProfile);
    popupName.value = profileName.textContent;
    popupDescription.value = profileDescription.textContent;
})


profileCloseBtn.addEventListener('click', function (evn) {
    closePopup(popupProfile);
})


profileForm.addEventListener('submit', function (evn) {
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



profileButton.addEventListener('click', function (evt) {
    openPopup(popupCard);
})


btnPopupCardClose.addEventListener('click', function (evt) {
    closePopup(popupCard);
})

function removeCard(evn) {
    const localTrash = evn.target;
    const localCard = localTrash.closest('.element')
    localCard.remove();
}

function toggleLike (evn) {
    const localLike = evn.target;
    localLike.classList.toggle('element__heart_active');
}

function showImage(evn) {
    const link = evn.target.getAttribute('src');
    popupCaption.textContent = title.textContent;
    popupPicture.setAttribute('src', link);
    popupPicture.setAttribute('alt', title.textContent); 
    const card = evn.target.closest('.element');
    const title = card.querySelector('.element__text');
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
    localLike.addEventListener('click', toggleLike);


    const localPicture = newCard.querySelector('.element__foto');
    localPicture.addEventListener('click', showImage);

    return newCard;
}



popupFormCard.addEventListener("submit", function (evn) {
    const newCard = createCard(popupNameCard.value, popupImageCard.value);
    elements.prepend(newCard);
    evn.preventDefault();
    closePopup(popupCard);
    evt.target.reset()
});



initialCards.forEach(card => {
    const newCard = createCard(card.name, card.link);
    elements.append(newCard);
})


imageClose.addEventListener('click', function (evn) {
    closePopup(popupImage);
})



