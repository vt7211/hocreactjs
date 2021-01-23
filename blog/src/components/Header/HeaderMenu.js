import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function HeaderMenu() {
  // const isLogin = useSelector(
  //   function(state) {
  //     return state.Auth.isLogin
  //   }
  // )
  // const isLogin = useSelector(
  //   state => {
  //     return state.Auth.isLogin
  //   }
  // )
  const isLogin = useSelector(state => state.Auth.isLogin);
  const currentUser = useSelector(state => state.Auth.currentUser);

  return (
    <div className="header-nav">
      <ul className="header-nav__lists">
        <li><a href="/">Home</a></li>
        <li>
          <a href="/">Our Team</a>
          <ul>
            <li><a href="/">Our Team 1</a></li>
            <li><a href="/">Our Team 2</a></li>
            <li><a href="/">Our Team 3</a></li>
          </ul>
        </li>
        <li>
          <a href="/">Contact</a>
          <ul>
            <li><a href="/">Contact 1</a></li>
            <li><a href="/">Contact 2</a></li>
            <li>
              <a href="/">Contact 3</a>
              <ul>
                <li><a href="/">Contact 11</a></li>
                <li><a href="/">Contact 12</a></li>
                <li><a href="/">Contact 13</a></li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <ul className="header-nav__lists">
        <li className="user">
          {
            isLogin 
              ? <Link to="/dashboard"><i className="icons ion-person" /> {currentUser.username}</Link>
              : <Link to="/login"><i className="icons ion-person" /> Tài khoản</Link>
          }
        </li>
      </ul>
    </div>
  )
}