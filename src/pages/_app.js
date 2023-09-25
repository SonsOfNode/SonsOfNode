import '@/styles/index.css';
import LoadingTransition from '@/components/LoadingTransition';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <LoadingTransition />
      <Component {...pageProps} />
    </>
  );
};

export default App;
