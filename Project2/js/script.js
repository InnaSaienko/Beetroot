"use strict";

const btnNextPage = document.getElementById('btn_next-page');
const targetSection = document.querySelector('.what-we-do');
const navBar = document.querySelector('.navigation-top');
let modal = document.getElementById("myModal");
let modalImg = document.getElementById("modalImg");
const galleryImages = document.querySelectorAll(".g-item__img");
let span = document.getElementsByClassName("close")[0];
const btnMoreDetails = document.querySelector(".btn-more-details");
const textParagraph = document.querySelector(".text");
const btnSeeMore = document.querySelector(".btn-see-more");
const imgGallery = document.querySelectorAll(".section__gallery .g-item__img");

btnNextPage.addEventListener('click', function () {
  targetSection.scrollIntoView({ behavior: 'smooth' });
});

window.addEventListener('scroll', function () {
  if (window.scrollY > 0) {
    navBar.classList.add('scrolled');
  } else {
    navBar.classList.remove('scrolled');
  }
});

document.querySelectorAll('.g-item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.classList.add('zoom-in');
  });
  item.addEventListener('mouseleave', () => {
    item.classList.remove('zoom-in');
  });
});

window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

function displayModal(event) {
  modal.style.display = "block";
  modalImg.src = event.target.src;
}

function closeModal() {
  modal.style.display = "none";
}

galleryImages.forEach(function (image) {
  image.addEventListener("click", displayModal);
});

let currentIndex = 1;
const totalImages = 11;

btnSeeMore.addEventListener("click", function () {
  const basePath = "assets/img_gallery/";
  currentIndex = (currentIndex % totalImages) + 1;

  imgGallery.forEach((img, index) => {
    let imgIndex = (currentIndex + index - 1) % totalImages + 1;
    img.src = `${basePath}${imgIndex}.png`;
  });
});

function moreDetails() {
  const textarea = document.createElement("textarea");
  textarea.className = "textArea";
  textarea.value = textParagraph.textContent;
  textParagraph.replaceWith(textarea);
  textarea.focus();

  function handleEscapeKey(event) {
    if (event.key === "Escape") {
      event.preventDefault();
      textParagraph.textContent = textarea.value;
      textarea.replaceWith(textParagraph);
      document.removeEventListener("keydown", handleEscapeKey);
    }
  }

  document.addEventListener("keydown", handleEscapeKey);
}

btnMoreDetails.addEventListener("click", moreDetails);
span.addEventListener("click", closeModal);

let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById('map'), {
    center: { lat: 48.464717, lng: 35.046183 },
    zoom: 10,
    disableDefaultUI: true,
    styles: [
      { elementType: 'geometry', stylers: [{ color: '#f5f5f5' }] },
      { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
      { elementType: 'labels.text.fill', stylers: [{ color: '#616161' }] },
      { elementType: 'labels.text.stroke', stylers: [{ color: '#f5f5f5' }] },
      {
        featureType: 'administrative.land_parcel',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#bdbdbd' }]
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{ color: '#eeeeee' }]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#757575' }]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{ color: '#e5e5e5' }]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#9e9e9e' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#ffffff' }]
      },
      {
        featureType: 'road.arterial',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#757575' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#dadada' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#616161' }]
      },
      {
        featureType: 'road.local',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#9e9e9e' }]
      },
      {
        featureType: 'transit.line',
        elementType: 'geometry',
        stylers: [{ color: '#e5e5e5' }]
      },
      {
        featureType: 'transit.station',
        elementType: 'geometry',
        stylers: [{ color: '#eeeeee' }]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#c9c9c9' }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#9e9e9e' }]
      }
    ]
  });
  // var marker = new google.maps.Marker({
  //     position: { lat: 48.464717, lng: 35.046183 }, // Example: New York City
  //     map: map,
  //     icon: {
  //       path: google.maps.SymbolPath.CIRCLE,
  //       scale: 3,
  //       fillColor: '#8A2BE2', // Violet color
  //       fillOpacity: 1,
  //       strokeWeight: 0
  //     }
  //   });
}
initMap();