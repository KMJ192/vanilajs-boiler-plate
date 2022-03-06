import { useRouter } from '@router';
import secondPage from './components/secondPage';

import MainPage from './MainPage';
import NotFoundPage from './NotFoundPage';

function App() {
  return useRouter(MainPage, NotFoundPage, [
    {
      path: '/second-page',
      element: secondPage,
    },
  ]);
}
export default App;
