import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.less';
const App = () => {
  return (
  <div className="container">
    <h1>Site title</h1>
  
  </div>
  
  )
}
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)