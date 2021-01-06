import { 
  ACT_SET_ISSHOWFORM,
  ACT_SET_ITEM,
  ACT_SET_ITEMSELECTED,
  ACT_SET_ORDERBY,
  ACT_SET_ORDERDIR,
  ACT_SET_STRSEARCH
} from './actions';

const initState = {
  tasks: [],
  orderBy: 'name',
  orderDir: 'asc',
  itemSelected: null,
  strSearch: '',
  isShowForm: true,
  
}

function reducer(state = initState, action) {
  switch (action.type) {
    case ACT_SET_ISSHOWFORM:
      return {
        ...state,
        isShowForm: action.payload.isShowForm
      }
    case ACT_SET_ITEM:
      return {
        ...state,
        tasks: action.payload.tasks
      }
    case ACT_SET_ITEMSELECTED:
      // console.log('action.payload.item',action.payload.item)
      return {
        ...state,
        itemSelected: action.payload.item
      }
    case ACT_SET_ORDERBY:
      return {
        ...state,
        orderBy: action.payload.orderBy
      }
    case ACT_SET_ORDERDIR:
      return {
        ...state,
        orderDir: action.payload.orderDir
      }
    case ACT_SET_STRSEARCH:
      return {
        ...state,
        strSearch: action.payload.strSearch
      }
    default:
      return state;
  }
}

export default reducer;