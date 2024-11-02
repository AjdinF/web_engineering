# Web Engineering Coding Playground Template

This repository is designed as the foundation for coding playgrounds in the Web Engineering course. It offers a structured space for experimenting with and mastering various web development technologies and practices. 
The project is based on [this](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/Accessibility_troubleshooting) repository from MDN.

The project introduces a lot of code smells for you to tackle. 
**Lets get coding!**

## Submission Details and Deadlines
* Coding playgrounds are **individual** work
* There will be 2 serparate submissions:
  * [Base Playgrounds](#base-coding-playgrounds): Submission Deadline **03.11.2024**
  * [Extended Playgrounds](#extended-coding-playgrounds): Submission Deadline **16.01.2025**
* The playgrounds will be guided through in our sessions - still there will be distance work!
* Use this base template to create your project repository.
* Each playground is linked in the corresponding course section.
* You can find the submissions at the bottom of the Moodle course.
  

## Features

- Wonderful UI-design :heart_eyes:
- Loads bear data using [Wikipedia API](https://www.mediawiki.org/wiki/API:Main_page) :bear:
  - Original Wikipedia Page can be found [here](https://en.wikipedia.org/wiki/List_of_ursids)
- Worst JS coding practices :cold_sweat:
- No Build and Dependency Management at all :fire:



# Base Coding Playgrounds

## K.O. Criteria
* No JS Frameworks allowed to solve the base coding playgrounds (e.g. Vue.js, Angular, React, Svelte,...) - don't panic we will come to them!
* No CSS Libraries allowed (e.g. Bootstrap, Material, Tailwind, ...)

## Submission
Submit your coding repository link in Moodle. Send me an invitation to your repository if it is set to private:
> GitHub: leonardo1710
> 
> GitLab: leon.freudenthaler@fh-campuswien.ac.at

## 1. JS Playground (10 Pts.)
The provided base project template contains some bugs and bad JS coding practices for you to fix in your first playground. Take a look into the component files and get a grasp of the inner workings of the provided project.
> **ATTENTION: After finishing the JS Playground please create a commit or branch and link it below. Otherwise it is not possible to grade your 1. submission, since we will switch to TypeScript afterwards!**
> 
> **This is my JS Playground commit/branch:** [<LINK_TO_YOUR_COMMIT>](https://github.com/AjdinF/web_engineering/tree/task1_jsplayground).

**Tasks:**
Fix application code and answer the questions:
* (2) Adapt the code to use ``async/await`` instead of the ``then()``-callback hell and refactor the functions to use arrow function syntax instead of ``function()``-syntax.
* (2) Add proper error handling to the code using ``try/catch`` and provide useful error messages to the users. Additionally, check the image URL availability before rendering the images in HTML. Provide placeholder images if the given URL does not exist.
* (1) Extract the range value from the provided Wikitext (response from the API). Examine the provided Wikitext format inside `extractBears` function. 
* (1) Split the code into separate modules with regards to clean separation of concerns.
* (1) Eliminate all other bad coding practices you can find. 
* (3) Answer the following questions and provide some examples inside the ``Readme.md`` file. 

>  **What bad coding practices did you find? Why is it a bad practice and how did you fix it?**

**Exchange var with const** --> [Exchange_var_with_const](./code_practices/exchange_var_with_const.md).

**Add try and catch** --> [Add_try_and_catch](./code_practices/add_try_catch.md).

**Add Async function** -->[Add_async_functions](./code_practices/add_async_functions.md).

## 2. Dependency- and Build Management Playground (10 Pts.)
Build the application with ``npm`` and a build and a dependency management tool of your choice (e.g. [Vite](https://vitejs.dev/), [Webpack](https://webpack.js.org/), or others). 

Here are some additional resources: [Package Management and Bundling](https://github.com/leonardo1710/WebEngineeringSDE/wiki/2-Package-Management,-Build-Management-and-Modules), [Vite Tutorial](https://github.com/leonardo1710/WebEngineeringSDE/wiki/2.1-Vite-Web-Application-Setup), [Webpack Tutorial](https://github.com/leonardo1710/WebEngineeringSDE/wiki/2.2-Webpack-Web-Application-Setup).

**Tasks:**
* (1) Integrate `npm` and a build management tool into your project.
* (2) Configure your project to use Typescript as your primary development language and adapt the code and file extensions respectively.
* (2) Use ESLint and Prettier inside your project - rulesets can be found below.
* (1) Keep your builds clear and add dependencies to the right build (e.g. do not add dev dependencies inside the production build and vice versa).
* (1) Define the following tasks within `npm scripts`:
  * `dev`: starts the development server
  * `build`: runs the typescript compiler and bundles your application - bundling depends on your chosen build tool (e.g. Vite, Webpack) but typically bundles multiple files into one, applies optimizations like minification and obfuscation and outputs final results to a `dist` or `build` directory.
  * `lint`: runs ESLint on all  `.js` and `.ts` files in your projects `/src` directory
  * `lint:fix`: runs and also fixes all issues found by ESLint
  * `format`: formats all `.js` and `.ts` files in your projects `/src` directory
  * `format:check`: checks if the files in the `/src` directory are formatted according to Prettier's rules.
* (1) Configure a pre-commit hook that lints and formats your code using [husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/lint-staged/lint-staged). A tutorial can be found [here](https://dev.to/shashwatnautiyal/complete-guide-to-eslint-prettier-husky-and-lint-staged-fh9).
* (2) Answer the question at the end of this section inside ``Readme.md`` file: 


**ESLint Configurations**

Use ESLint configs [standard-with-typescript](https://www.npmjs.com/package/eslint-config-standard-with-typescript) and [TypeScript ESLint Plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin).
Your `.eslintrc` file should have the following extensions:
```.eslintrc.yml
...
extends:
  - standard-with-typescript
  - plugin:@typescript-eslint/recommended
  - plugin:prettier/recommended
  - prettier
...
```
 
**Prettier Configurations**

Apply the following ruleset for Prettier:
``` .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "tabWidth": 2,
  "printWidth": 80
}
```

>  **What improvements in your codebase were introduced by using TS instead of JS? Name at least 3 and explain why.**

**01. Seperation of Prod (dist) and Dev Builds** 
* Dist is usually optimized for production in order to reduce file size and improve load times. --> better performance
* The development on the other side for example is also improved: no need to reload the full page, improved debugging and testing, etc.

**02. Use of Linters and formatters**
* Linters help to catch potential erros during development before the code is run --> unused variables, unreachable code, or type mismatches identified easily
* Prettier enforces a consistend code style across the codebase. Useful when more people are working on the same code so that you have better structure inside.

**03. Use of dependency- & build managment tool**
* clearer feedback and better IDE support
* faster Server starts and efficient hot module replacement
* automtic tree shaking an dcode splitting for smaller bundle sizes
* early detection of errors and safer refactoring


## 3.	CI/CD Pipeline Playground (5 Pts.)
Implementation of a CI/CD pipeline to automate the development and deployment process – write automated tests.

Here are some additional resources: [GitHub Actions Tutorial](https://github.com/leonardo1710/WebEngineeringSDE/wiki/3.2-CI-CD-Pipeline-with-Github-Pages-and-Github-Actions) and [GitHub Actions Docs](https://docs.github.com/en/actions).

**Tasks:**
* (1.5) Write at least 2 meaningful unit tests (use [Vitest](https://vitest.dev/) or [Jest](https://jestjs.io/)) for your project and configure the following tasks in ``npm scripts``:
  * `test`: runs all files that include `.test.` or `.spec.`, e.g.: `example.test.ts`
  * `test:coverage`: runs tests like `test` but also creates a test coverage report
* (1) Configure **2 Workflows** in GitHub Actions, one for development and one for deployment:
  * Create a `development` branch inside your repository
  * (1) Development Workflow should at least test and lint your code when developers push to branch `development`
  * (1) Deployment Workflow is triggered when developers push into `main` branch. It should at least test, lint and build your source code. Afterwards the build artifacts of your application should be automatically deployed to Github Pages (or another hosting provider of your choice). 
* (0.5) Reuse existing workflows or jobs whenever possible! 

## 4.	Accessibility Playground (5 Pts.)
You might have noticed that the base project has a number of accessibility issues - your task is to explore the existing site and fix them.
Use the tools presented in our accessibility workshop to test the accessibility in your project.

**(0.5) Color** 

Test the current color contrast (text/background), report the results of the test, and then fix them by changing the assigned colors.

* I had several errors regarding the color in the Wave Tool.
* Therefore I decided to change the colors to be:
  * appeling to the eye
  * avoiding Red/Green to begin with
  * choose colors that represent bears and wildlife
  * light colors but not bright to be easier to read
* I had main issues also with the Links as they were not readable on dark background --> decided to have same background as the article itself.

**(0.5) Semantic HTML**

Report on what happens when you try to navigate the page using a screen reader. Fix those navigation issues.

* Main issue with the Screen reader is that if you only use the TAB for navigation it starts ate nav bar instead of the main header and also does not read the articel but jumps to the next audio and afterwards to the related links.
* I used the tabindex in order to set the correct order and also exchanged the text with headers and paragraphs in order that it used already the hierarchy


**(0.5) Audio** 

The ``<audio>`` player isn't accessible to hearing impaired (deaf) people — can you add some kind of accessible alternative for these users?

* Here I added a transcription of what was said in the audio directly below in order that also impaired people can read what is said in the audio.
* other than that there are no other audios that would require an transcription

**(1) Forms** 
  * The ``<input>`` element in the search form at the top could do with a label, but we don't want to add a visible text label that would potentially spoil the design and isn't really needed by sighted users. Fix this issue by adding a label that is only accessible to screen readers.
  * The two ``<input>`` elements in the comment form have visible text labels, but they are not unambiguously associated with their labels — how do you achieve this? Note that you'll need to update some of the CSS rule as well.

* for the first part of this task i added an aria-label that is read by the screen reader in order that blind people know what they have to do here.
* for the second part of the question i just added "For=name" in the label and that is assosiated with the id=name of the input element

**(0.5) Comment section**

The show/hide comment control button is not currently keyboard-accessible. Can you make it keyboard accessible, both in terms of focusing it using the tab key, and activating it using the return key?

* i created a toggleComments.js file focusing on showing and hiding the comment section using the return key or space key.
* then i made some small adaptions to my comment section and also added the script at the end of the html.

**(1) The table**

The data table is not currently very accessible — it is hard for screen reader users to associate data rows and columns together, and the table also has no kind of summary to make it clear what it shows. Can you add some features to your HTML to fix this problem?

* here i only changed the aria-label to explain what the content of the table is.
* i also changed the first row into headers making it more visible and clear.

**(1) More Findings**

* I changed the article style. it was plain text and not put in a hierarchy (h1, h2, h3, h4, ...) so i changed this for the whole page.
* i also changed some stylings in order to avoid any errors due to low contrast
* i added alt text on the pictures.
* i increased the sice of the links to make them better visible.

# Extended Coding Playgrounds
Please create a new independent Repository for these playgrounds and submit a link to it in the Moodle submission. 
Additionally, provide a description of how to start your frontend and backend services inside the `README.md`.

## Submission
Submit your coding repository link in Moodle. Send me an invitation to your repository if it is set to private:
> GitHub: leonardo1710
> 
> GitLab: leon.freudenthaler@fh-campuswien.ac.at

## 5. Migrate to a Frontend Framework (10 pts.)
In this playground you will migrate your application to a frontend framework of your choice.

**Tasks**:
* Migrate your application to a frontend framework of your choice (e.g. React, Angular, Vue.js, Svelte,...)
  * All previous features should still work
  * The application still should use build and dependency management
* Adapt your `npm scripts` if necessary

## 6. Integrate a Backend Framework (10 pts.)
In this playground you will use a backend framework of your choice and connect it with an API to your frontend application. 

**Tasks**:
* (3) Setup a backend framework of your choice
* (2) Create an API your frontend will be connected to (REST, GraphQL, gRPC, you choose...)
* (2) Your backend should now request the bear data from presented Wikipedia API
* (3) Replace the frontend Wikipedia API calls with calls to your backend - the functionality of your frontend should work as before!
* (Optional): you may want to introduce some sort of caching layer for Wikipedia API requests


## 7. Containerize your application (10 pts.)
Dockerize your frontend and backend applications. It should be possible to start all services in the corresponding mode (development, production) with a single command (e.g. use Docker Compose for this).

**Tasks**:
* (6) Create **multi-stage Dockerfiles** for your applications (depending on your frameworks):
  * The frontend Dockerfile should: 1. run the app in a development environment 2. build the app 3. serve build artefacts over Nginx
  * The backend Dockerfile should: 1. run the app in a development environment 2. build the app if there is a build step in your framework (optional) 3. serve the app 
* (4) Create two docker-compose files to orchestrate you applications in ``development`` and ``production`` mode:
  * Define ports and dependencies
  * Define corresponding stage (development, production)
  * Use environment variables if possible
* Your application should start with the following commands:
  * Development: `docker-compose -f docker-compose.yml up --build`
  * Production: `docker-compose -f docker-compose.prod.yml up --build`