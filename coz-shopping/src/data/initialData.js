const initialData = {
  menu: {
    isOpen: false,
    datas: [
      {
        id: 1,
        name: '상품리스트 페이지',
        icon: 'present',
        to: '/products/list',
      },
      {
        id: 2,
        name: '북마크 페이지',
        icon: 'star',
        to: '/bookmark',
      },
    ],
  },
  bookmark: {
    itemsId: [],
  },
  filter: {
    items: [
      { id: 1, tag: '전체', image: 'filter-all.png', type: '' },
      { id: 2, tag: '상품', image: 'filter-product.png', type: 'Product' },
      { id: 3, tag: '카테고리', image: 'filter-category.png', type: 'Category' },
      { id: 4, tag: '기획전', image: 'filter-exhibition.png', type: 'Exhibition' },
      { id: 5, tag: '브랜드', image: 'filter-brand.png', type: 'Brand' },
    ],
  },
  toast: {
    items: [],
  },
  modal: {
    isOpen: false,
    content: {},
  },
};

export default initialData;
