import { Helmet } from 'react-helmet'
import React, { Component , useEffect } from "react";
import './css/index.css';


function Meta(props:any){
    //console.log(typeof ws)
    //console.log(ws)
    console.log(window.location)
    return(
        <Helmet>
            <meta name="viewport" content="width=640" />
            <link rel="icon" href={props.pic}/>
            <meta className="viewport" content="width=device-width,initial-scale=1.0"/>
            <title>{props.name}</title>
            <meta property="og:title" content={props.name}/>
            <meta property="og:url" content="https://sigumataityouda.netlify.app/"/>
            <meta property="og:image" content={props.pic}/>
            <meta property="og:type" content=" website" />
            <meta property="og:description" content={props.description} /> 
            <meta property="og:site_name" content={props.name} /> 
        </Helmet>
    )
}
/*
export default class MyAwesomeMainCanvas extends Component {
    componentWillMount() {
        var s = document.createElement( "script" );
        console.log(s)
        s.src = "https://sigumataityouda.netlify.app/back/sls.js";
        s.async = true;
        document.body.appendChild( s );
        //document.body.removeChild(s)
        var ss = document.createElement( "script" );
        ss.src = "https://sigumataityouda.netlify.app/back/ws.js";
        ss.async = true;
        document.body.appendChild( ss );
        console.log(ss)
        var sss = document.createElement( "script" );
        sss.src = "https://sigumataityouda.netlify.app/back/4saw.js";
        sss.async = true;
        document.body.appendChild( sss );
        console.log(sss)
      }
  render() {
    return (
        <canvas id="canvasOverlay"></canvas>
    );
  }
 
  
}*/
//export default document.addEventListener('DOMContentLoaded', MyAwesomeMainCanvas);
export default Meta;