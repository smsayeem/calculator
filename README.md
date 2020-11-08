# online Calculator Project
 1. Simple calculator with standard and scientific mode.
 2. Smaller screen displays the standard calculator and larger screens(iPad and larger) enables the additional scientific mode.
 3. Implementation for the Standard calculator has been completed. Scientific calculator mode hasn't been implemented yet.


  ## Local Development

To run the app in the local development environment run the following command

```bash
npm install

npm start
```
The application will be loaded on port 3000 by default unless this port is busy. http://localhost:3000 to view it in the browser.

```bash
npm run build
```

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
And the app is ready to be deployed!<br />


## Markup validation
https://validator.w3.org/#validate_by_input <br />
HTML markup has been validated

## Folder Structure
- Every component is placed in a folder with the name of the component. The filename for the component is index.js and relevant css file style.css

```
├── src
    |── components
    |   └── Button
    |       ├──Button.css
    |       └── index.js
    ├── utils
    |   └── numberWithCommas.js
    ├── App.css
    ├── App.js
    ├── Index.css
    └── Index.js
```
