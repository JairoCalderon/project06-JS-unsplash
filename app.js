//Get our data from API
// - get the link

//Display our data

//https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

const galleryApp = {};

galleryApp.APIurl = "https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY";
galleryApp.APIkey = "eXlwp7WDZh1qmTbQ-IM--mg-GGbME4PnIWe4343AJsw";

galleryApp.getPhotos = () => {
    const url = new URL(galleryApp.APIurl);
    url.search = new URLSearchParams({
        client_id: galleryApp.APIkey,
    });

    console.log(url);
}


galleryApp.init = () => {
    console.log("hello");
    galleryApp.getPhotos();

}


galleryApp.init();


