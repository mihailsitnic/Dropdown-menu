# React Mobile Menu

**Note:** You can see the work of the MobMenu component with a screen max-width of 760px

## Usage

Installation:

```
yarn add mob-menu
```

## Example

```js
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import MobMenu from './mob-menu';

class App extends Component {
  render() {
    const options = [
        {
            text: 'Home',
            path: '/',
            id: 1,
        },
        {
            text: 'Portfolio',
            path: '/portfolio',
            id: 2,
        },
        {
            text: 'About',
            path: '/about',
            id: 3,
        },
        {
            text: 'Test',
            path: '/test',
            id: 4,
        },
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
