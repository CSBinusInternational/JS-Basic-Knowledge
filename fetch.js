import fetch from 'node-fetch';

// In practice, async is used alongside the fetch() function
async function fetchExample() {
    // fetch() has only one parameter and that is the URL, and it returns a promise which will
    // resolve into a response
    let response = await fetch('http://example.com/');       // Here, I tried to fetch example.com

    // The response object has a few properties, and below are 2 of them

    // response.status will return a status code, 200 means the web page exists and it is able to be accessed
    // 400 means web page is non-existent and 500 means there is a error on the server side
    console.log(response.status);

    // response.statusText is just response.status in text form
    console.log(response.statusText);

    // Here I put an if statement when the status is 200, then I can look at the contents of the html
    if (response.status === 200) {
        let data = await response.text();   // text() is a function used in responses to get the contents of the html
        console.log(data);  // Output the html into the console
    }
}

fetchExample();