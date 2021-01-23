// action type
export const ACT_SET_LOGIN = 'ACT_SET_LOGIN';

export function actSetLogin(value) {
  
  return {
    type: ACT_SET_LOGIN,
    payload: {
      isLogin: value
    }
  }
}

const url = 'http://api-meme-zendvn-01.herokuapp.com/api/post/getListPagination.php?pagesize=3&currPage=1';

export function actSetLoginAsync() {
  console.log('2. Sau khi dispatch và trước khi gửi function qua cho ông bảo vệ')
  return async function(store) {
    
    console.log('4. Ông bảo vệ sẽ giúp mình gọi function này và truyền vào cho mình cái store')

    try {
      const response = await fetch(url);
      const data = await response.json();

      store.dispatch({
        type: 'TYPE',
        payload: {
          data
        }
      })
    } catch(e) {

    }
  }
}

// export function actSetLoginAsync() {
//   console.log('2. Sau khi dispatch và trước khi gửi function qua cho ông bảo vệ')
//   return function(store) {
    
//     console.log('4. Ông bảo vệ sẽ giúp mình gọi function này và truyền vào cho mình cái store')
//     fetch(url)
//       .then(response => response.json())
//       .then(data => {
//         store.dispatch({
//           type: 'TYPE',
//           payload: {
//             data
//           }
//         })
//       })
//   }
// }


// Middleware
// const logger = store => next => action => {
  
//   return result
// }



// Trong action Async có thể dispatch qua một action mới
// Trong action Async có thể sử dụng state của những reducer khác
// Đang ở trong reducer comments -> Muốn dùng một số dữ liệu của reducer users