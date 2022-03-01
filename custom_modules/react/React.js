import { debounseFrame } from './utils';

const React = (function () {
  let root = null;
  let router = null;
  let stateKey = 0;
  const states = [];

  const renderer = debounseFrame(() => {
    if (!root || !router) return;
    const vDOM = router();
    root.innerHTML = '';
    stateKey = 0;
  });

  function render(node, component) {
    if (!node || !component) return;
    root = node;
    router = component;
    renderer();
  }

  function useState(initState) {
    if (states.length === 0) states.push(initState);
    const state = states[stateKey];
    const setState = (newState) => {
      if (newState === state) return;
      if (JSON.stringify(newState) === JSON.stringify(state)) return;
      states[key] = newState;
      renderer();
    };
    stateKey += 1;
    return [state, setState];
  }

  return {
    useState,
    render,
  };
})();

export const { useState, render } = React;

export default React;
