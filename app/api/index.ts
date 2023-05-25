/**
 * @description 自动import导入所有 api 模块
 */

const files = require.context("./model", false, /\.(js|ts)$/);
const modules: any = {};
files.keys().forEach((key) => {
  modules[key.replace(/(\.\/|\.(js|ts))/g, "")] = files(key).default;
});
export default modules;
