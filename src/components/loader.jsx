import { useEffect, useState } from 'react';
import './style/loader.css';

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      // Hide the loader after 3 seconds (adjust the duration as needed)
      setShowLoader(false);
    }, 5000);

    // Clean up the timeout to prevent memory leaks
    return () => clearTimeout(loaderTimeout);
  }, []);

  return showLoader ? (
  <div className="load">  <div className="loader">
  <div className="loader__bar"></div>
  <div className="loader__bar"></div>
  <div className="loader__bar"></div>
  <div className="loader__bar"></div>
  <div className="loader__bar"></div>
  <div className="loader__ball"></div>
</div></div>
  ) : null;
};

export default Loader;
