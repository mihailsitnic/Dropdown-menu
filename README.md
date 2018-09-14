# React Mobile Menu

[![Build Status](https://travis-ci.org/kentor/react-click-outside.svg)](https://travis-ci.org/kentor/react-click-outside) [![npm](https://img.shields.io/npm/v/react-click-outside.svg)](https://www.npmjs.com/package/react-click-outside)

**Note:** You can see the work of the MobMenu component with a screen width of 760px

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

**Note:** There will be no error thrown if `handleClickOutside` is not
implemented.

### `wrappedRef` prop

Use the `wrappedRef` prop to get access to the wrapped component instance. For
example:

```js
// Inside a component's render method
<Dropdown
  wrappedRef={instance => { this.toggle = instance.toggle; }}
/>

// Now you can call toggle externally
this.toggle();
```
