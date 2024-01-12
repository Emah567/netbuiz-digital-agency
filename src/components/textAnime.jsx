import { useEffect } from 'react';
import PropTypes from 'prop-types';

const AppWrapper = ({ children }) => {
  useEffect(() => {
    const initializeSplittingAndScrollOut = () => {
      const _window = window;
      const Splitting = _window.Splitting;
      const ScrollOut = _window.ScrollOut;

      Splitting();
      ScrollOut({
        targets: '.word',
        scrollingElement: '.page',
      });
    };

    // Call the initialization function when the component mounts
    initializeSplittingAndScrollOut();

    // Optionally, clean up any resources when the component unmounts
    return () => {
      // Perform cleanup if needed
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  return <>{children}</>;
};

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppWrapper;
