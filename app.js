//Get our data from API
// - get the link

//Display our data

//https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

const galleryApp = {};

galleryApp.APIurl = "https://api.unsplash.com/photos";
galleryApp.APIkey = "eXlwp7WDZh1qmTbQ-IM--mg-GGbME4PnIWe4343AJsw";

const ulElm = document.querySelector(".gallery");

galleryApp.getPhotos = () => {
    const url = new URL(galleryApp.APIurl);
    url.search = new URLSearchParams({
        client_id: galleryApp.APIkey,
    });
    // console.log(url);
    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {

        //call the display data f(x):
        galleryApp.displayPhotos(data)
    })
}

galleryApp.displayPhotos = (APIdata) => {
    console.log(APIdata);
    const ulElm = document.querySelector(".gallery");

    APIdata.forEach(obj => {
        const liElm = document.createElement("li");
        const image = document.createElement("img");

        image.src = obj.urls.regular;
        image.alt = obj.alt_description;

        liElm.appendChild(image);

        ulElm.appendChild(liElm)
    });
}
galleryApp.init = () => {
    galleryApp.getPhotos();
}

galleryApp.init();

