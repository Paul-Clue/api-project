import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);

// ReactDOM.render(<h1>Hello world!</h1>, document.getElementById("root"))