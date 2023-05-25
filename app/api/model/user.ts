export interface UserModel {
  /**
   * 登录账号/邮箱/手机号
   */
  userName: string;

  /**
   * 密码
   */
  passWord: string;
  /**
   *  验证码
   */
  validateCode: string;
  /**
   * 记住我
   */
  rememberMe: string;
}
/**
 *  登录
 * @param data
 * @returns
 */
export const login = async (data: UserModel) => {
  const loginUrl = `https://www.gongwk.com/login.json`;
  alert(JSON.stringify(data));
  return;
};

/**
 * 退出登录
 */
export const logout = async () => {};
