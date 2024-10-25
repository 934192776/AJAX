// JS Challenge 1 Import Axios to this page, Axios on GitHub

// JS Challenge 2 Given the API https://jsonplaceholder.typicode.com/, get the comments (/comments) and log the API response

// JS Challenge 3 Log the first comment email from the API response
function displayUsername(response) {
  console.log(response);
  console.log(response.data);
}

let apiUrl = "https://jsonplaceholder.typicode.com/comments";

axios.get(apiUrl).then(displayUsername);
