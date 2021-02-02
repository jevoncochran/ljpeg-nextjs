// import App from "next/app";
import SiteProvider from "../context/siteContext";

const App = ({ Component, pageProps }) => {
  return (
    <SiteProvider>
      <Component {...pageProps} />
    </SiteProvider>
  );
};

export default App;
