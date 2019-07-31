import { withRouter } from "react-router";

const ScrollToTop = ({ children, location: { pathname } }) => {
        window.scrollTo(0, 0);
        return children || null;
};

export default withRouter(ScrollToTop);