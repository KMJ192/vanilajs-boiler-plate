import React from '@react';

const Router = (function () {
  let query = {};
  function useRouter(MainPage, NotFound, components) {
    if (!components) return MainPage();
    query = {};

    if (!Array.isArray(components)) console.error('배열 형태로 넣어주세요');

    if (components.length === 0) return MainPage();

    const { pathname } = location;
    if (pathname === '/') return MainPage();

    for (const component of components) {
      const { path, element, queryString } = component;
      if (queryString === true) {
        const nowPath = pathname.split('/');
        const settingsPath = path.split('/');
        if (nowPath.length === settingsPath.length) {
          const pathLen = settingsPath.length;
          for (let i = 0; i < pathLen; i++) {
            if (settingsPath[i].length > 0 && settingsPath[0] === ':') {
              query = {
                ...query,
                [settingsPath[0].substring(1)]: nowPath[i],
              };
            } else if (settingsPath[i] !== nowPath[i]) {
              return NotFound();
            }
          }
        }
      }
      if (pathname === path || pathname.indexOf(path) >= 0) {
        return element();
      }
    }

    return NotFound();
  }

  function useLink(url, data) {
    history.pushState(data, '', url);
    React.routerRender();
  }

  function useParams() {
    return query;
  }

  return {
    useRouter,
    useLink,
    useParams,
  };
})();

export const { useRouter, useLink, useParams } = Router;
export default Router;
