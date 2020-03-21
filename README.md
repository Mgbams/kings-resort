## Creating a react project

> Follow the below instructions to create your project
* Enter the below command in your terminnal
```
$ cd desktop/
$ npx create-react-app app-name
```
* Open the project you created  and install the necessary dependencies.
In my case i installed react-icons and react-router-dom.

```
$ npm install react-icons
$ npm install react-router-dom --save
```
* Open your public folder and create a _redirects file.
* visit [page not found](https://sung.codes/blog/2018/12/18/page-not-found-on-netlify-with-react-router/) for your page redirect code.
* Copy the code and paste in your _redirects file. Of course you can create your own redirect code if you're up to it.

* To start your project, type
```
$ npm start
```
* Finally clean up your files for what you won't be needing. like deleting the svg logos and cleaning up the App.css file.

**NOTE**: To facilitate easy creation of components, you can install
__ES7 React/Redux/GraphQL/React-Native snippets__ extension in your IDE.
It helps for auto-completion.
Hence to create a **component in es6 format**, you need just type:
* __rafc__. Then you press enter

To create a **tradidtional javascript function component**, you type:
* __rfc__. Then press enter.

To create a **Class component**, you type:
* __rcc__. Then press enter.

**IMPORTANT**: If you export a file as a default then you don't use curly
braces around its name during imports. But if you don't  export a file
as default then you should surround its imports in curly braces.

## ROUTING YOUR PAGES
For more informations on how to use react-router, visit the below page

[React-Router](https://reacttraining.com/react-router/web/guides/quick-start)
There are many ways to use this, so i will show you how i like using it.

* Import Browser router into your index.js file
    __index.js__

```
import { BrowserRouter as Router} from "react-router-dom";
```
* Wrap your <App /> element that is inside ReactDOM.render() by the
Router. So we have,

```
ReactDOM.render(
    <Router>
        <App />
    </Router>, document.getElementById('root')
)
```
* Then in app.js import Route and Switch from react-router-dom and make your
routes e.g is shown below:

```
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
        <Switch>
            <Route  exact path="/" component={Home} />
            <Route exact path="/rooms/:kings" component={SingleRoom} />
            <Route  exact path="/rooms/" component={Rooms} />
        </Switch>
    </>
  );
}

export default App;
```
NOTE: The word __exact__ makes sure that only the exact page would be shown.

## Using React-icons

* Visit [React-icons](https://react-icons.netlify.com/#/)
Then on the side menu, select the library of icons you will be using. In my case i choose to use icons from font-awesome.

* Then to use it, you just import it in your project where you need it e.g

```
import { ICON_NAME } from "react-icons/fa";
```
Replace the ICON_NAME with the name of the icon you will be using.

Then to place the icon in your project, you use a tag with the icon's name e.g

```
 <FaAlignRight />
```
From the above, i placed the icon with the name __FaAlignRight__ on my page


## Using CONTEXT in React With a Class based Component
> For more information on context, visit the site below:
[React Context](https://reactjs.org/docs/context.html)
You will need to wrap your whole component wit a context you create.
Here, i wrapped my __BrowserRouter or Router__ component with my created __context__ since
the Router wraps around every other components.
* I created a file in my src folder that i called context.js. And in it i created my context
and exported it. Here is a sample of the file i created. Note: I renamed my class as __RoomProvider__
which is not really important and i removed the __export default__ next to my class name as i needed
to export threee things which i did at the bottom of my context.js file as shown below:

**context.js**

```
import React, { Component } from 'react';

const RoomContext = React.createContext();
const RoomConsumer = RoomContext.Consumer;

 class RoomProvider extends Component {
    state = {

    }

    render() {
        return (
            <RoomContext.Provider value="Hello king">
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

export {
    RoomProvider, RoomConsumer, RoomContext
}
```
* Then in my index.js file, i imported **RoomProvider** from context file and wrapped 
my __Router__ with it.

```
import { RoomProvider } from "./context";

ReactDOM.render(
  <RoomProvider>
    <Router>
      <App />
    </Router>
  </RoomProvider>,
  document.getElementById("root")
);
```
* Now to use the context created in a component, see sample usage below:
Note: This should be done in a class based component

```
class MyClass extends React.Component {
  static contextType = MyContext;
  render() {
    let value = this.context;
    /* render something based on the value */
    return (
         <div>
        Hello from featured rooms {value}
      </div>
    )  
  }
}
```
**EXPLANATION**: We write __static contextType = MyContext__. Where MyContext is the 
context we defined.

## Using Context with a Function based Component
You have to use the consumer in a functional component if you wish to use your defined contex.
From the below code, i have already defined a context called MyContext and to use its consumer,
you access it with __MyContext.Consumer__ as shown below:

```
<MyContext.Consumer>
  {value => /* render something based on the context value */}
</MyContext.Consumer>
```




## Using PropTypes
To use PropTypes, you have to import it as shown below:
We can use it to state the types of our properties and to state if they are required or not.

```
import PropTypes from 'prop-types';
```
Below is a sample of using PropTypes on a Room object which has four properties.
```
Room.propTypes = {
    room:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired
    })
}
```
Note the usage of PropTypes for an array type in the example above.

## Styled Components
To use styled components, visit,
[Styled Components](https://styled-components.com/)

* To install styled-components, enter the below code in your terminal

```
npm install --save styled-components
```
* Then in the file where you will be creating your styled component, import this below

```
import styled from 'styled-components'
```

* To acces properties in styled components, we use __${property name}__.
* To access __props__ in styled components we use the syntax below:
```
${props => props.propertyname }
```
## SETTING UP ENVIRONMENT VARIABLES BEFORE PUSHING TO GIT
To save your access tokens and passwords from appearing on your git account,
you can follow this steps:

* Create a __.env.development__ file at the project root. Note, it shouldn't be in
the __src__ folder but your project root folder
* Open __.gitignore__ file and add __.env.development__ file you just created into it
so it would be ignored during git push
* In your __.env.development__ file add your access tokens and id's as shown below

```
REACT_APP_API_SPACE=yourApiIdHere
REACT_APP_ACCESS_TOKEN=yourAccessTokenHere
```
Replace __yourApiIdHere__ with your ApiID and also replace __yourAccessTokenHere__ with
your access token.

* Then in your __Contentful.js__ file, add the variables defined in the __.env.development__ file
as shown below

```
import { createClient } from 'contentful';

export default createClient({
    space: process.env.REACT_APP_API_SPACE,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
});
```
Note that i added __process.env__ before the variable names in the code above.

