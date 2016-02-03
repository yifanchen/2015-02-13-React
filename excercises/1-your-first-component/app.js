////////////////////////////////////////////////////////////////////////////////
// Excercise:
//
// Render `DATA` to the page
// - put the title in an h1
// - only render mexican food (hint: arrays have a "filter" method)
// - sort the items in alphabetical order by name
//   (might want to use `sort-by` https://github.com/staygrimm/sort-by#example)
////////////////////////////////////////////////////////////////////////////////

// must have this line to use react
var React = require('react');
// sortBy function imported 
var sortBy = require('sort-by');

var DATA = {
  title: 'Menu',
  items: [
    { id: 1, name: 'tacos', type: 'mexican' },
    { id: 2, name: 'burrito', type: 'mexican' },
    { id: 3, name: 'tostada', type: 'mexican' },
    { id: 4, name: 'hush puppies', type: 'southern' }
  ]
};

var Menu = React.createClass({
  render () { 
    //here use both filter and map to select the correct context, filter and map are functional programming, sortBy is a function. 
    //markups which are components as react referred get returned by return keywrod. 
    var items = DATA.items.filter((item) => {
      return item.type === 'mexican';
    })
    .sort(sortBy('name'))
    .map((item) => <li>{item.name}</li> 
    );
    // UI and HTML get returned, fun
    // this div is a functiona call that returns a react element, then react uses it to render real document.
    // return React.DOM.div();
    return (
      <div>
        <h1>{DATA.title}</h1>
        <ul>
           {items}
        </ul>
      </div>
    );
  }
});

React.render(<Menu/>, document.body, () => {
  require('./tests').run();
});

