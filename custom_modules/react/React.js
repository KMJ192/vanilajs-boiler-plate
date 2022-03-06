const React = (function () {
  let state;
  let eventFunction;
  let components;
  let rootNode;

  function reactRenderer() {
    rootNode.innerHTML = components();
    eventFunction();
  }

  function useState(initState) {
    state = initState;
    const setState = (newState) => {
      state = newState;
      reactRenderer();
    };
    return [state, setState];
  }

  function render(app, node) {
    components = app;
    rootNode = node;
    reactRenderer();
  }

  function useDocument(eventCallback) {
    eventFunction = eventCallback;
  }

  return { render, useState, useDocument, routeRender };
})();

export const { useState, useDocument, render, routeRender } = React;
export default React;

// state => 변수
// setState => 상태를 변경시키는 함수
// useState => 상태를 만드는 함수
// const [state, setState] = useState(0);
