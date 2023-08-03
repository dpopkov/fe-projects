import { createElement } from 'react';
import { createRoot } from 'react-dom/client';

const reactElement = createElement('h1', null, 'Hello World!!!');
const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(reactElement);
