const apikey = "uay-c1PJzrTZu4DRoZ2AJEtEWXj9BSZ4xfawS2fUhjQ";
const count = 30; //number of photos to fetch in one call
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apikey}&count=${count}`;
let images = [];

const loader = document.querySelector("#loader");
const imgContainer = document.querySelector("#img-container");

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    // images.push(...await response.json());
    images = await response.json();
    console.log(images);
    displayPhotos(images);
  } catch (error) {
    console.log(error.message);
  }
}

function displayPhotos(arr) {
  const fragment = document.createDocumentFragment();
  arr.forEach((obj) => {
    const anchor = document.createElement("a");
    const image = document.createElement("img");

    anchor.href = obj.links.html;
    image.src = obj.urls.regular;
    image.alt = obj.urls.regular;
    image.title = obj.alt_description;

    anchor.append(image);
    fragment.append(anchor);
  });
  imgContainer.append(fragment);
}

getPhotos();
