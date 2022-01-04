"use strict";

///////////////
// VARIABLES //
///////////////

const albums = [
  {
    image:
      "https://rocknfolk-cdn.respawn.fr/wp-content/uploads/2021/11/Led-Zeppelin-4-1.jpg",
    name: "led zep 1",
    artist: "led zep",
    label: "rec",
    year: "1982",
    genre: "rock",
    duration: "52",
  },
  {
    image: "https://m.media-amazon.com/images/I/619CcXRfEIL._SL1200_.jpg",
    name: "led zep",
    artist: "led zep 2",
    label: "records",
    year: "1978",
    genre: "rock",
    duration: "52",
  },
  {
    image: "https://m.media-amazon.com/images/I/51SUWsbmnHL.jpg",
    name: "led zep 4",
    artist: "led zep",
    label: "records yo",
    year: "1980",
    genre: "rock",
    duration: "47",
  },
];

// const albumCover = document.querySelector("#image").value;
// const albumName = document.querySelector("#name").value;
// const albumArtist = document.querySelector("#artist").value;
// const albumLabel = document.querySelector("#label").value;
// const albumYear = document.querySelector("#year").value;
// const albumGenre = document.querySelector("#genre").value;
// const albumDuration = document.querySelector("#duration").value;

///////////////
// FONCTIONS //
///////////////

function displayAlbums() {
  albums.forEach((album) => {
    displayAlbum(album);
  });
}

function displayAlbum(album) {
  let index;
  let newAlbum;
  let img;
  for (index = 0; index < albums.length; index++) {
    newAlbum = document.createElement("div");
    newAlbum.setAttribute("data-index", `${index}`);
    img = document.createElement("img");
    img.src = `${album.image}`;
    newAlbum.appendChild(img);
    for (const property in album) {
      if (property !== "image") {
        newAlbum.innerHTML += `${album[property]} <br>`;
      }
    }
  }

  let trash = document.createElement("i");
  trash.classList.add("fas", "fa-trash");

  let pen = document.createElement("i");
  pen.classList.add("fas", "fa-pen");

  newAlbum.appendChild(trash);
  newAlbum.appendChild(pen);
  document.getElementById("albums").appendChild(newAlbum);

	  trash.addEventListener("click", function () {
		newAlbum.remove();
		albums.splice(album, 1);
	  });

  pen.addEventListener("click", function () {
    document.querySelector("#form").dataset.mode = "edit";
    document.querySelector("#image").value = album.image;
    document.querySelector("#name").value = album.name;
    document.querySelector("#artist").value = album.artist;
    document.querySelector("#label").value = album.label;
    document.querySelector("#year").value = album.year;
    document.querySelector("#genre").value = album.genre;
    document.querySelector("#duration").value = album.duration;
  });
}

function edit(elem) {
  let editedAlbum = {};
  elem = albums.find(
    (elem) => elem.name === document.querySelector("#name").value
  );
  console.log(elem);
}

function addAlbum() {
  let album = {};
  album.image = document.querySelector("#image").value;
  album.name = document.querySelector("#name").value;
  album.artist = document.querySelector("#artist").value;
  album.label = document.querySelector("#label").value;
  album.year = document.querySelector("#year").value;
  album.genre = document.querySelector("#genre").value;
  album.duration = document.querySelector("#duration").value;
  albums.push(album);
  displayAlbum(album);
  formReset();
}

function formReset() {
  document.querySelector("#form").reset();
}

//////////
// CODE //
//////////
formReset();
displayAlbums();
document.querySelector("#form").addEventListener("submit", function (event) {
  event.preventDefault();
  if (document.querySelector("#form").dataset.mode == "add") {
    addAlbum();
  } else {
    edit();
    document.querySelector("#form").dataset.mode = "add";
  }
});
