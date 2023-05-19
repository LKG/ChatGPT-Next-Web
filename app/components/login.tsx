import { useState, useEffect, HTMLProps, useRef } from "react";

import styles from "./login.module.scss";
import BotIcon from "../icons/bot.svg";
import EyeIcon from "../icons/eye.svg";
import { Input, Modal, Popover, showToast, Select } from "./ui-lib";
import { ModelConfigList } from "./model-config";
import { IconButton } from "./button";
import { useAppConfig } from "../store";

import Locale, { AllLangs, changeLang, getLang } from "../locales";
import Link from "next/link";
import { Path } from "../constant";
import { ErrorBoundary } from "./error";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  const config = useAppConfig();
  const [loadingUsage, setLoadingUsage] = useState(false);
  useEffect(() => {
    // checks per minutes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const keydownEvent = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        navigate(Path.Home);
      }
    };
    document.addEventListener("keydown", keydownEvent);
    return () => {
      document.removeEventListener("keydown", keydownEvent);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ErrorBoundary>
      <div className={styles["login"]}>
        <div className={styles["login-box"]}>
          <div className={styles["login-box-switch"]}>
            <a
              href="javascript:;"
              className={styles["btn-2qrcode"]}
              title={Locale.Login.QrScan}
              onClick={() => showToast(Locale.WIP)}
            >
              {Locale.Login.QrScan}
            </a>
            <div className={styles["login-message"]}></div>
            <form>
              <div className={styles["field"]}>
                <label>{Locale.Login.UserName}</label>
                <div className={styles["input-group"]}>
                  <input
                    type="text"
                    name="userName"
                    title={Locale.Login.UserNamePlaceholder}
                    className={styles["login-text"]}
                    placeholder={Locale.Login.UserNamePlaceholder}
                    value=""
                  />
                </div>
              </div>
              <div className={styles["field"]}>
                <label>{Locale.Login.PassWord}</label>
                <a className={styles["forget-pw-safe"]} target="_blank">
                  {Locale.Login.Forget}
                </a>
                <div className={styles["input-group"]}>
                  <input
                    type="password"
                    name="passWord"
                    title={Locale.Login.PassWord}
                    className={styles["login-text"]}
                    placeholder={Locale.Login.PassWord}
                    value=""
                  />
                </div>
              </div>
              <div className={styles["field"]}>
                <label className={styles["remember-me"]}>
                  <input name="rememberMe" type="checkbox" />
                  {Locale.Login.RememberMe}
                </label>
                <a className={styles["register-safe"]} target="_blank">
                  {Locale.Login.Register}
                </a>
              </div>
              <IconButton
                text={Locale.Login.Button}
                className={styles["login-btn"]}
                type="primary"
              />
              <IconButton
                text={Locale.Login.Register}
                className={styles["login-register-btn"]}
                type="primary"
              />
            </form>
          </div>
          {/* 标准登录框 */}

          {/* 二维码登录框 */}
          <div
            className={
              styles["login-box-switch"] + " " + styles["login-qrcode"]
            }
          >
            <a
              href="javascript:;"
              className={styles["btn-2login"]}
              title={Locale.Login.Title}
            >
              {Locale.Login.Title}
            </a>
            <div className={styles["qrcode-mod"]}>
              <div className={styles["qrcode-desc"]}>
                <h2>微信扫码 安全登录</h2>
              </div>
              <div className={styles["qrcode-err"]}>
                <h6>扫描失败</h6>请刷新二维码后重新扫描
              </div>
              <div className={styles["qrcode-main"]}>
                <div className={styles["qrcode-img"]}>
                  <img
                    title="二维码"
                    src="https://www.gongwk.com/validate/qrWxCode.json"
                  />
                </div>
              </div>
              <div className={styles["qrcode-panel"]}>
                <a href="javascript:void(0);" id="J_QRCodeHandle">
                  刷新二维码
                </a>
              </div>
              <div className={styles["qrcode-panel"]}>
                <a href="javascript:void(0);">扫码关注登录注册</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}
