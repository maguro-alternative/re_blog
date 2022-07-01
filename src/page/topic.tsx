import React from 'react';
import { Link, useParams } from "react-router-dom";

import Meta from "../meta"
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

function Toplist(){
    return(
      <div className="container">
        <header>
          <nav className="global-nav">
            <ul className="nav-list">
              <li className="nav-item"><Link to={`/`}>トップ</Link></li>
              <li className="nav-item"><Link to={`/topic`}>記事一覧</Link></li>
              <li className="nav-item"><Link to={`/profile`}>メンバー紹介</Link></li>
            </ul>
          </nav>
        </header>
      </div>
    )
}