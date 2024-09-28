# Exchange "var" with "const"

## Bad Code Practice
```javascript
var baseUrl = "https://en.wikipedia.org/w/api.php";
var title = "List_of_ursids";
/* Why bad? 
-> "var" are usually declared in a specific scope, therefore it could cause issues with scope that goes deeper
-> "var" gives the possibility to redeclare the variable (e.g., const cannot be changed or overwritten)*/
```

## Good Code Practice
```javascript
const baseUrl = "https://en.wikipedia.org/w/api.php";
const title = "List_of_ursids";

/* Why good?
-> "Const" prevents the variable being redeclared or altered.
-> issues with nested scopes will not be frequent anymore too */
```
