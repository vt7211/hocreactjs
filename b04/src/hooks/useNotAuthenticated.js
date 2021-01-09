import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export function useNotAuthenticated() {
  // Truy cập vào redux kiểm tra state xem user đã đăng nhập hay chưa?
  // 1. Nếu đăng nhập rồi -> Không cho vào (Đẩy qua lại homepage)
  // 2. Nếu chưa đăng nhập -> Thì thôi 
  const history = useHistory();
  const isLogin = useSelector(state => state.Auth.isLogin);

  // Muốn giám sát biến isLogin 
  // Mỗi lầ biến isLogin thay đổi 
  useEffect(() => {
    if (isLogin) {
      history.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin])

  return isLogin;
}