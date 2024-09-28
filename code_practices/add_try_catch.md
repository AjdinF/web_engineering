# Add Try and catch if you have fetch

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
-> in case the fetch fails, you do not have any error handling implemented
-> if you do not get error messages back, debugging is much more difficult */
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
-> with try and catch the fetch will give you the error back in case the call fails
-> debugging much easier*/
```
