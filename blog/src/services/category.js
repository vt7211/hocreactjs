import { api } from '.';

export const CategoryService = {
  getListCategories({ 
    page = 1, 
    per_page = 3,
    ...restParams
  } = {}) {
    return api.get('/wp/v2/categories', {
      params: {
        page,
        per_page,
        ...restParams
      }
    })
  }
}