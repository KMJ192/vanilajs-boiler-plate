import { useDocument } from '@react';
import { useLink } from '@router';

function secondPage() {
  // useDocument(() => {
  //   const homeBtn = document.getElementsByClassName('home');
  //   const moveHome = () => {
  //     useLink('/');
  //   };
  //   if (homeBtn && homeBtn.length > 0) {
  //     homeBtn[0].addEventListener('click', moveHome);
  //   }
  //   return () => {
  //     if (homeBtn && homeBtn.length > 0) {
  //       homeBtn[0].removeEventListener('click', moveHome);
  //     }
  //   };
  // });
  // return `<div>second page</div><button class='home'>move home</button>`;
}

export default secondPage;
