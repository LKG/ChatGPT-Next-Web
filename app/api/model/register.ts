export interface registerModel {
  /**
   * 自定义登录账号不能为纯数字格式：建议使用 字母+数字形式
   */
  userName: string;
  /**
   * 邮箱
   */
  userEmail: string;
  /**
   * 手机号
   */
  userPhone: string;
  /**
   * 密码信息
   */
  passWord: string;
  /**
   * 确认密码
   */
  retryPassWord: string;
  /**
   * 用户扣扣
   */
  userQq: string;
  /**
   * 推荐人
   */
  refereeUser: string;
}
/**
 *
 * @param data 注册
 * @returns
 */
export const register = async (data: registerModel) => {
  // const loginUrl = `${apiUrl}/posts`;
  // return axios.post(loginUrl);
  return;
};
