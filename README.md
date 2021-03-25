## Quick Points:
- **Make sure your CSS selectors are unique so it would avoid this issue** #36
- **Don't forget that we have a mobile Figma, so make sure you are implementing media queries to appropriately scale the website**
- **Make sure your CSS selectors are unique so it would avoid this issue** #36
- While making your pull request make sure to add in screenshots of what you implemented along with any helpful notes.

## Quick Links:
Links
---
- [The actual figma to reference](https://www.figma.com/file/i3QlbebnZaaKwrQP2x5qe3/Final-Website-Design?node-id=0%3A1) 
- [The mobile figma to reference](https://www.figma.com/file/i3QlbebnZaaKwrQP2x5qe3/Final-Website-Design?node-id=509%3A343)
- [How to change css depending on screen size](https://www.w3schools.com/css/css_rwd_mediaqueries.asp)
- [What is Responsive](https://medium.com/@mustwin/responsive-react-9b56d63c4edc)
- [Article](https://reactjs.org/docs/conditional-rendering.html) explaining conditionally rendering 

## Pull Requests and Github Issues
We use pull requests (PRs) and Github Issues to make sure they are are inline with our scrum board and to make sure features are up to specification before deploying them!
#### Creating a PR
- Push the changes from your local feature branch to your remote feature branch. Check the How to get started section to see how you should set up the local feature branch.
- On Github, select your feature branch from the "branches" dropdown and then click the Pull request button
- Leave a comment describing what changes you made: 
          **If you made a UI change, you must include a screenshot of that change**
- Make sure to add Srirag as a reviewer!
- **PRs are required to have a review of approval from Srirag before being merged into master.**
- Click the Create pull request button
- Update your Issue Card on the SCRUM board. Making sure to link the pull request and moving it to in review.
- Fix any merge conflicts and make requested changes from reviewer(Srirag) as necessary.
- Merge your branch into master once reviewer(Srirag) approved your changes
 

Extract inspired from Celebrate

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to get started
Clone the repository locally using the command:

        $ git clone "https://github.com/CSSGCalPoly/club-website.git"

Create your own branch to do your development:

        $ git branch <name of your new branch>   *brackets not required

To move to the new branch, you can run:

        $ git checkout <name of your new branch>  *brackets not required

After you're done with commiting locally run this command to push to the repository as a branch:

        $ git push -u origin <name of your local new branch>
        

 
## Helpful tips 
- To run the website for testing purposes:

        $ npm install 
        $ npm start

- To go through the changes you're making before commiting, run :

        $ git add -p

- To git commit:

        $ git commit -m "Your commit message"
        
- If you want to check the list of branches, simply run:

        $ git branch
        
        
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
