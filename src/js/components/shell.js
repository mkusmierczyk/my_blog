import React from "react"
import {Link, HashRouter} from "react-router-dom";


class Shell extends React.Component {

    render() {

        return (<>
            <HashRouter>
                <div className="container">
                    <div className="row shell">
                        <Link to="/portfolio" className="shell__left col-5"><p>Portfolio</p></Link>
                        <div className="shell__center col-2"> </div>
                        <Link to="/blog" className="shell__right col-5"><p>Blog</p></Link>
                    </div>
                </div>
            </HashRouter>
        </>);
    }
}

export default Shell