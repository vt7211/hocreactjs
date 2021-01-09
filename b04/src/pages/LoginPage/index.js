import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { actSetLogin } from '../../store/auth/actions';

import Button from '../../common/Button';
import Container from '../../common/Container';
import { useNotAuthenticated } from '../../hooks/useNotAuthenticated';

// Không cho phép người dùng quay lại trang login Nếu người dùng đã đăng nhập
// Tự xây dựng một hooks cho riêng mình
// hooks -> là một function -> (custom hooks)
// -> Có thể sử dụng được những hooks khác ở trong custom hooks của mình

export default function LoginPage() {
  const isLogin = useNotAuthenticated();

  const history = useHistory();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  function handleLogin() {
    // 1. Kích hoạt một action (isLogin = true);
    //  --> dispatch 
    //  --> hooks useDispatch
    setLoading(true);
    setTimeout(() => {
      dispatch(actSetLogin(true))
      setLoading(false);
      history.push('/');
    }, 1000);
  }

  if (isLogin) {
    return null;
  }

  return (
    <div>
      <Container>
        <h1>Login Page</h1>
        <Button 
          isSizeLarge 
          btnType="primary"
          isLoading={loading}
          onClick={handleLogin}
        >Đăng nhập</Button>
      </Container>
    </div>
  )
}