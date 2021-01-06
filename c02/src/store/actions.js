export const ACT_SET_ISSHOWFORM = 'ACT_SET_ISSHOWFORM';
export const ACT_SET_ITEM = 'ACT_SET_ITEM';
export const ACT_SET_ITEMSELECTED = 'ACT_SET_ITEMSELECTED';
export const ACT_SET_ORDERBY = 'ACT_SET_ORDERBY';
export const ACT_SET_ORDERDIR = 'ACT_SET_ORDERDIR';
export const ACT_SET_STRSEARCH = 'ACT_SET_STRSEARCH';


export function actSetIsShowForm(value) {
  // console.log("isShowForm", value);
  return {
    type: ACT_SET_ISSHOWFORM,
    payload: {
      isShowForm: value
    }
  }
}
export function actSetItems(items) {
  // console.log("setItems", items);
  return {
    type: ACT_SET_ITEM,
    payload: {
      tasks: items
    }
  }
}
export function actsetItemSelected(item) {
  // console.log("set Item selected", item);
  return {
    type: ACT_SET_ITEMSELECTED,
    payload: {
      item: item
    }
  }
}
export function actSetOrderBy(value) {
  // console.log("set Item selected", item);
  return {
    type: ACT_SET_ORDERBY,
    payload: {
      orderBy: value
    }
  }
}
export function actSetOrderDir(value) {
  // console.log("set Item selected", item);
  return {
    type: ACT_SET_ORDERDIR,
    payload: {
      orderDir: value
    }
  }
}
export function actSetStrSearch(txt) {
  // console.log("set Item selected", item);
  return {
    type: ACT_SET_STRSEARCH,
    payload: {
      strSearch: txt
    }
  }
}

