import { defineConfig } from 'umi';
import routes from './src/routes';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
  layout: {},
  mfsu: {},
  webpack5: {},
});
