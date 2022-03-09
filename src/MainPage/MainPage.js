import { useLink } from '@router';
import { useState, useDocument } from '@react';

function MainPage() {
  const [count, setCount] = useState(0);

  useDocument(() => {
    const onIncrease = () => {
      setCount(count + 1);
    };

    const onDecrease = () => {
      setCount(count - 1);
    };

    const move = document.getElementsByClassName('move');

    const increaseBtn = document.getElementsByClassName('increase');
    const decreaseBtn = document.getElementsByClassName('decrease');

    const inputTag = document.getElementsByClassName('input');
    const outputTag = document.getElementsByClassName('output');

    if (increaseBtn && increaseBtn.length > 0) {
      increaseBtn[0].addEventListener('click', onIncrease);
    }

    if (decreaseBtn && decreaseBtn.length > 0) {
      decreaseBtn[0].addEventListener('click', onDecrease);
    }

    if (move && move.length > 0) {
      move[0].addEventListener('click', () => {
        useLink('/second-page');
      });
    }

    if (inputTag && inputTag.length > 0) {
      inputTag[0].addEventListener('input', (e) => {
        if (outputTag && outputTag.length > 0) {
          outputTag[0].textContent = e.target.value;
        }
      });
    }

    return () => {
      if (increaseBtn && increaseBtn.length > 0) {
        increaseBtn[0].removeEventListener('click', onIncrease);
      }

      if (decreaseBtn && decreaseBtn.length > 0) {
        decreaseBtn[0].removeEventListener('click', onDecrease);
      }
    };
  });

  return `
    <h1>증가</h1>
    <div>${count}</div>
    <button class='increase'>증가</button>
    <button class='decrease'>감소</button>
    <button class='move'>이동</button>
    <input class='input'/>
    <div class='output'></div>
  `;
}
export default MainPage;
