# React Mobile Menu

<img src="http://positronbohemia.com/img/menu.svg" width="100" alt="React Mob Menu">

**Note:**
- You can see the work on the MobMenu component with a screen width of <= 760px.
- Styles and media queries can be changed in a file node_modules/react-mob-menu/lib/index.css

## Installation

yarn
```
yarn add react-mob-menu
```
or npm
```
npm install --save react-mob-menu
```
and react-router-dom
```
yarn add react-router-dom
```

## Example

```js
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import MobMenu from 'react-mob-menu';

class App extends Component {
  render() {
    const options = [
        {
            text: 'Home',
            path: '/',
            id: 1
        },
        {
            text: 'Portfolio',
            path: '/portfolio',
            id: 2
        },
        {
            text: 'About',
            path: '/about',
            id: 3
        },
        {
            text: 'Test',
            path: '/test',
            id: 4
        }
    ];
    return (
      <Router>
        <MobMenu options={options} />
      </Router>
    );
  }
}

export default App;

```
