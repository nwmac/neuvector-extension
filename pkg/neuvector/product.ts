// This will update the existing neu vector 'product'
// such that is always is shown
export function init($plugin: any, store: any) {
  const opts = {
    name:        'neuvector',
    ifHaveGroup: '',
    ifHave:      '',
  };

  store.commit('type-map/product', opts);
}
