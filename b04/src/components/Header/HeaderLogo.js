import { Link } from 'react-router-dom';

export default function HeaderLogo() {
  return (
    <div className="header-logo">
      <Link to="/">
        <img src="/images/logo.png" alt="Go to homepage" />
      </Link>
    </div>
  )
}