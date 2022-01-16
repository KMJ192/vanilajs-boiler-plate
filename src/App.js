import classNames from 'classnames/bind';
import style from './App.module.scss';
const cx = classNames.bind(style);

function App() {
  const root = document.getElementById('App');
  const button = document.createElement('button');
  button.className = cx('test');
  button.innerText = 'test';
  root.appendChild(button);
}
export default App;
