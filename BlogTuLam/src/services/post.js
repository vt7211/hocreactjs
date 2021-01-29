import { api } from '.';

export const PostService = {
  // getListPosts({ 
  //   page = 1, 
  //   per_page = 3,
  //   orderby
  // } = {}) {
  //   const params = {
  //     page,
  //     per_page,
  //   }

  //   if (orderby) {
  //     params.orderby = orderby
  //   }
  //   console.log("params", params);
  //   return api.get('/wp/v2/posts', {
  //     params: params
  //   })
  // },
  getListPosts({ 
    page = 1, 
    per_page = 3,
    ...restParams
  } = {}) {
    return api.get('/wp/v2/posts', {
      params: {
        page,
        per_page,
        ...restParams
      }
    })
  },

  // Bài viết mới nhất - Sắp xếp theo ngày giờ đăng bài
  getLatestPosts() {
    return PostService.getListPosts();
  },

  // Bài viết phổ biến - Sắp xếp theo lượt xem
  getPopularPosts() {
    return PostService.getListPosts({
      orderby: "post_views"
    });
  }
}