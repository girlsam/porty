import Main from './js/views/Main';
import Header from './js/views/Header';

import './css/main.scss';
import ModeToggle from './js/views/ModeToggle';

function header() {
  const header = document.querySelector('header');
  header.innerHTML = Header.render();
  return header;
}

function body() {
  const body = document.querySelector('main');
  body.innerHTML = Main.render();
  return body;
}

function toggle() {
  const toggle = document.getElementById('toggle');
  toggle.innerHTML = ModeToggle.render();
}

function renderAll() {
  header();
  body();
}

document.body.appendChild(renderAll());
