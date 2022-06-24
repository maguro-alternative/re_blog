import React from 'react';
import { Link } from "react-router-dom";

import Meta from "../meta"
import zu3 from "../pic/zu3.png"

class toppage extends React.Component {
    render() {
        return (
            <div id="ba">
                <div id="bg"></div>
                <canvas id="canvasOverlay"></canvas>
                <Meta name="マグロ隊長ポータル" description="マグロ隊長のポートフォリオとかです" pic={zu3}/>
                <Toplist/>
                <br/><br/><br/><br/>
                <Topber/>
                <Mainber/>
            </div>
        );
    }
}
 
export default toppage;
  
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
  
function Topber(){
    return(
      <div>
        <div className="wrapper">
              <div className="topbar">
                  <div className="textback">
                      <h1>更新情報</h1>
                      
                  </div>
              </div>
          </div>
      </div>
    )
}
function Mainber(){
    return(
      <div className="wrapper">
            <div className="topmainbar">
                <div className="textback">
                    <h2>本ページへようこそ！！</h2>
                    <br/><br/><br/><br/><br/><br/><br/>
                </div>
                <iframe className="disgetbot" src="https://discord.com/widget?id=838937935822585928&theme=dark" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
            </div>
        </div>
    )
}