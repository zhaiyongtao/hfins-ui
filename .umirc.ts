import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'hfins-ui',
  outputPath: 'docs-dist',
  mode: 'site',
  alias: {
    '@common': 'hfins-ec-front-common/lib',
  },
  base: '/hfins-ui',
  publicPath: '/hfins-ui/'
  // more config: https://d.umijs.org/config
});
