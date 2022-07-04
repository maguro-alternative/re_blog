import React from 'react';

import Meta from "../meta"
import Toplist from "../toplist"
import zu3 from "../pic/zu3.png"
import '../css/index.css';

class topic extends React.Component {
    render() {
        return(
            <div id="ba">
                <Meta name="マグロ隊長ポータル" pic={zu3} description="マグロ隊長のポータルです。"/>
                <Toplist/>
            </div>
        )
    }
}

export default topic;