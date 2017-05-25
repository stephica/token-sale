import { makeActionCreator } from '../../../utils';

export const $showSidebar = 'SHOW_SIDEBAR';
export const showSidebar = makeActionCreator($showSidebar);

export const $hideSidebar = 'HIDE_SIDEBAR';
export const hideSidebar = makeActionCreator($hideSidebar);

export default (state = {}, action) => {
  switch (action.type) {
    case $showSidebar:
      return {
        ...state,
        open: true,
      };
    case $hideSidebar:
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
};

export const getSidebarState = state => state.sidebar.open || null;
