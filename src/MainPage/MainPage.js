import { useState, useDocument } from '@react';

function MainPage() {
  const [count, setCount] = useState(0);

  useDocument(() => {
    const increaseBtn = document.getElementById('increase');
    const decreaseBtn = document.getElementById('decrease');
    const onIncrease = () => {
      setCount(count + 1);
    };
    const onDecrease = () => {
      setCount(count - 1);
    };

    increaseBtn?.addEventListener('click', onIncrease);
    decreaseBtn?.addEventListener('click', onDecrease);
  });

  return `
    <div id='count-container'>${count}</div>
    <button id='increase'>증가</button>
    <button id='decrease'>감소</button>
  `;
}
export default MainPage;
