import { Link, useParams } from "react-router-dom";

function Toplist(){
    return(
      <div className="container">
        <header>
          <nav className="global-nav">
            <ul className="nav-list">
              <li className="nav-item"><Link to={`/`}>トップ</Link></li>
              <li className="nav-item"><Link to={`/topic`}>記事一覧</Link></li>
              <li className="nav-item"><Link to={`/profile`}>自己紹介</Link></li>
            </ul>
          </nav>
        </header>
      </div>
    )
}

export default Toplist