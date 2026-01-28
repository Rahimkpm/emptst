
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/emptst/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/emptst"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 440, hash: '95c1cdf4c6b3ca67c594cb3a3330a6cc89be3da1eb8f928bad10a3ac9c8fa9ca', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 953, hash: 'dfbb1010e75517f65d9477227c0e96b3ad60e53d8700e34c1fc3b2046c9a3f44', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 630, hash: '7b76836c2b2697f1e341094f8cadd22bc8c37ee2cce9c154d4d45538e76b8f8f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
