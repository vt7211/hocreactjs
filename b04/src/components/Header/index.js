import './Header.css';
import Container from '../../common/Container';
import HeaderLogo from './HeaderLogo';
import Row from '../../common/Row';
import Col from '../../common/Col';
import HeaderSearch from './HeaderSearch';
import HeaderMenu from './HeaderMenu';
// import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <header id="header">
      <Container>
        <Row gutters={false} className="header">
          <Col xs={2}>
            <HeaderLogo />
          </Col>
          <Col xs={4}>
            <HeaderSearch />
          </Col>
          <Col xs={6}>
            <HeaderMenu />
          </Col>
        </Row>
      </Container>
    </header>

  )
}

// button 
// input
// Link -> custom <a>