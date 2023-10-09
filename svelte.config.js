// eslint-disable-next-line import/no-extraneous-dependencies
import sveltePreprocess from 'svelte-preprocess';

const config = {
  preprocess: sveltePreprocess({
    scss: {
      prependData: '@use "./src/styles/variables.scss";',
    },
  }),
};

export default config;
