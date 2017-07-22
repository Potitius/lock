import Core from './core';
import passwordless from './engine/passwordless';
import css from '../css/index.styl';

function injectStyles() {
  const styleId = 'auth0-lock-style';
  let style = document.getElementById(styleId);

  if (!style) {
    const head = document.getElementsByTagName('head')[0];
    style = document.createElement('style');
    style.type = 'text/css';
    style.setAttribute('id', styleId);
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.innerHTML = css;
  }
}

export default class Auth0LockPasswordless extends Core {
  constructor(clientID, domain, options) {
    super(clientID, domain, options, passwordless);
    injectStyles();
  }
}

Auth0LockPasswordless.version = __VERSION__;
Auth0LockPasswordless.css = css;
