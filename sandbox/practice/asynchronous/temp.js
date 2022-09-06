

let api_key = "0Q4FmHumIiWSfHrwHGbmBSh5T4tCWf1Z";
let url = "https://api.giphy.com/v1/gifs/translate?api_key=0Q4FmHumIiWSfHrwHGbmBSh5T4tCWf1Z&s=cats";
fetch(url, {
    mode: 'cors'
}).then(function(response) {
    console.log(response.json());
})
.catch(function(err) {
  // Error :(
});

