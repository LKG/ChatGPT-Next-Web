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

export function Regist() {
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
                  type="text"
                  name="userName"
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
          </form>
        </div>
        {/* 标准登录框 */}
      </div>
    </ErrorBoundary>
  );
}
