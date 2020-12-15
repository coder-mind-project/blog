import {withRouter} from 'react-router';

const ScrollToTop = ({children}) => {
  window.scrollTo(0, 0);
  return children || null;
};

export default withRouter(ScrollToTop);
