export default {
  // 入口
  input: 'src/index.js',
  // 输出
  output: [
    {
      file: 'dist/index.mjs',
      format: 'es',
    },
    {
      file: 'dist/index.js',
      format: 'cjs',
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'RV',
    },
  ],
  // 输出文件
  // file: 'dist/index.js',
  // 输出格式
  // format: 'umd', // amd, cjs, system, es, iife, umd
  // format为iife和umd时需要提供，将作为全局变量挂载window下，window.rv=...
  // name: 'rv',
};
