export const APP_NAME = 'COZ Shopping';

export const PATH = Object.freeze({
  MAIN_PAGE: '/',
  ITEM_PAGE: 'products/list',
  BOOKMARK_PAGE: 'bookmark',
  NOT_FOUND: '*',
});

export const MENU = Object.freeze({
  GREETING: 'OOO님, 안녕하세요!',
  ITEM_PAGE: '상품리스트 페이지',
  BOOKMARK_PAGE: '북마크 페이지',
});

export const EMPTY_LIST_MESSAGE = Object.freeze({
  ITEM: '끙차! 상품 준비중입니다.',
  BOOKMARK: '이런! 북마크한 아이템이 없네요.',
});

export const FETCH_ERROR_MESSAGE =
  '이런! 페이지를 불러올 수 없습니다.\n잠시 후에 다시 시도해 주세요.';

export const EMPTY_MESSAGE = Object.freeze({});

export const FOOTER = Object.freeze({
  PRIVACY_POLICY: '개인정보 처리방침',
  TERMS_AND_CONDITIONS: '이용 약관',
  COPYRIGHT: 'All rights reserved @ Codestates',
});

export const ITEM_TYPE = Object.freeze({
  PRODUCT: 'Product',
  CATEGORY: 'Category',
  EXHIBITION: 'Exhibition',
  BRAND: 'Brand',
});

export const BRAND = Object.freeze({
  TITLE_RIGHT: '관심고객수',
});

export const CATEGORY = Object.freeze({
  PREFIX: '# ',
});

export const MAIN_LIST = Object.freeze({
  ITEM: '상품 리스트',
  BOOKMARK: '북마크 리스트',
});

export const NOT_FOUND_MESSAGE = '존재하지 않는 페이지입니다.';

export const TOAST = Object.freeze({
  ALERT_ACTION: 'bookmark',
  DISMISS_ACTION: 'unbookmark',
  ALERT_MESSAGE: '상품이 북마크에 추가되었습니다.',
  DISMISS_MESSAGE: '상품이 북마크에서 제거되었습니다.',
});
