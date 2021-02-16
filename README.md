## Frontend Interview Task

## Interview Prompt
For this interview, we'll be making a really simple application that is meant
for you to demonstrate your skills as a frontend developer.

Please create a frontend with "fake" api calls to implement the following feature-set:

- Signup Flow
- Login Flow
- Create a Todo
- Edit a Todo
- Remove a Todo
- Update a Todo
- List existing Todos

Remember, the goal is for you to show your process, your creativity, attention to detail and quality, and a little bit of ingenuity.

NOTE: No backend is expected. This is intended to be simple, so don't worry about saving a password to a
database or anything like that. Come up with your own way of "faking" api calls to demonstrate these features.

For Sign up, we only need a username and password.

Login will use that username and password to get in.

For the core application, create a simple, clean design for users to interact and create a Todo list.

Lastly, tests are highly encouraged.

## Submission Steps
1. Fork this project
2. Perform the work
3. Commit freely to your fork
4. When done, send Ryman Stringer your Github URL

## Questions or Concerns?

Please, feel free to send Ryman any questions you may have. 

[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## My Submission
Task was rescoped to just focus on To Do CRUD.

Folder Structure:
- components: presentation focused React components
- pages: components with page layout and business logic. Note that sign up and login would have corresponding components in this folder.
- services: functions to call APIs

For demonstration purposes, every 5th backend API call will generate an error.

External Libraries Used: 
- fontawesome and bootstrap: these are directly imported in index.tsx and code just uses classes.
- React Tooltip
- React Styled Components: In general, app uses straight CSS (from todoApp.css or bootstrap css). But a custom checkbox component was created. To keep this component's styling from polluting the app's css or the app file space, React Styled component approach is used. This also makes the component potentially re-usable in other apps.

Scripts added: lint (with eslint config files)
