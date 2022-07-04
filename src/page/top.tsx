import React from 'react';

import Meta from "../meta"
import Toplist from "../toplist"
import zu3 from "../pic/zu3.png"

import '../css/index.css';

class toppage extends React.Component {

    render() {
        return (
            <div id="ba">
                <Meta name="マグロ隊長ポータル" pic={zu3} description="マグロ隊長のポータルです。"/>
                <Toplist/>
                <br/><br/><br/><br/>
                <Topber/>
                <Mainber/>
            </div>
        );
    }
}
 
export default toppage;
  
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