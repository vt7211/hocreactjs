// import './Header.css';
import Container from '../../common/Container';
// import Row from '../../common/Row';
// import Col from '../../common/Col';
// import HeaderSearch from './HeaderSearch';
// import HeaderMenu from './HeaderMenu';
// import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <header id="header" className="d-block d-md-none">
      <div className="header-inner">
        <Container>
          {/*Header Extras*/}
          <div className="header-extras">
            <ul>
              <li>
                {/*side panel*/}
                <a id="side-panel-trigger" href="#" className="toggle-item" data-target="body" data-class="side-panel-active">
                  <i className="fa fa-bars" />
                  <i className="fa fa-times" />
                </a>
                {/*end: side panel*/}
              </li>
            </ul>
          </div>
          {/*end: Header Extras*/}
        </Container>
      </div>
    </header>

  )
}
