# Add async functions

## Bad Code Practice
```javascript
function getBearData() {
  var url = `${baseUrl}?${new URLSearchParams(params).toString()}`;
  fetch(url)
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      var wikitext = data.parse.wikitext['*'];
      extractBears(wikitext); // No need to handle promises here
    });
}

/* why bad?
-> code gets hard to read if you have multiple .then going into deeper/nested sections
-> error handling is much easier especiall yif you have to handle erros after each .then with async you can handle all errors with try/catch */
```


## Good Code Practice
```javascript
async function getBearData() {
  const url = `${baseUrl}?${new URLSearchParams(params).toString()}`;
  try{
    const res = await fetch(url);
    const data = await res.json();

    const wikitext = data.parse.wikitext['*'];
    extractBears(wikitext);
  }
  catch(error){
    console.error(error);
  }
}

/* why good?
-> simplifies asynchronous code which is easier to read and understand
-> try/catch easier and more structured
-> less nested layers*/
```
