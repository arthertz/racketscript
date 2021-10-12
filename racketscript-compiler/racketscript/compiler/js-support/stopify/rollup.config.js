import { getBabelOutputPlugin } from '@rollup/plugin-babel';

export default commandLineArgs => {
  return {
    plugins: [
      getBabelOutputPlugin({
        presets: ['@babel/preset-env']
      })
    ],
    output: [
      { file: 'bundle.js', format: 'cjs' },
    ]
  }
};