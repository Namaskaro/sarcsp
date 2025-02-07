import React, { useEffect } from 'react';

const Loader = () => {
  useEffect(() => {
    const spinner = document.querySelector('.brainContainer');
    setTimeout(() => {
      if (spinner) spinner.remove();
    }, 1500);
    // return () => {
    //   clearTimeout()
    // }
  }, []);
};

export default Loader;
