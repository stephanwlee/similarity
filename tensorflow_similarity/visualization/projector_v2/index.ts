/**
 * Entry point for rendering the embedding projection.
 */
import {GlobalMessenger, getCellMessenger} from './lib/ipc';
import {createElement, updateStyles} from './lib/renderer';
import {Header} from './views/header';
import {Projector} from './views/projector';

function bootstrap(domId) {
  const messenger = getCellMessenger();
  const main = updateStyles(
    createElement('div', null, [
      new Header(messenger).getDomElement(),
      new Projector(messenger).getDomElement(),
    ]),
    {
      display: 'grid',
      height: '100%',
      width: '100%',
    }
  );

  document.getElementById(domId).appendChild(main);
}

globalThis.messenger = globalThis.messenger || new GlobalMessenger();
globalThis.bootstrap = globalThis.bootstrap || bootstrap;
