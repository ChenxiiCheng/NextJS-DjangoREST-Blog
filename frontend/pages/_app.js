import { useState, useEffect } from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import { useStore } from '../store';
import Header from '../components/Header';
import Footer from '../components/Footer';

import 'antd/dist/antd.css';
import '../styles/pages/common.css';
import 'markdown-navbar/dist/navbar.css';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  useEffect(() => {
    window.addEventListener('contextmenu', _preventDefault);

    return () => {
      window.removeEventListener('contextmenu', _preventDefault);
    };
  }, []);

  const _preventDefault = (event) => event.preventDefault();

  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
