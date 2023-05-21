export interface userModel {
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
