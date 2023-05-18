import { useState, useEffect, HTMLProps, useRef } from "react";

import styles from "./login.module.scss";
import BotIcon from "../icons/bot.svg";
import EyeIcon from "../icons/eye.svg";
import {
  Input,
  List,
  ListItem,
  Modal,
  PasswordInput,
  Popover,
  Select,
} from "./ui-lib";
import { ModelConfigList } from "./model-config";

import { IconButton } from "./button";
import { Theme, useAppConfig } from "../store";

import Locale, { AllLangs, changeLang, getLang } from "../locales";
import { copyToClipboard } from "../utils";
import Link from "next/link";
import { Path } from "../constant";
import { ErrorBoundary } from "./error";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarPicker } from "./emoji";

export function Login() {
  const navigate = useNavigate();
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const config = useAppConfig();
  const [loadingUsage, setLoadingUsage] = useState(false);
  function checkUsage(force = false) {
    setLoadingUsage(true);
  }
  const [shouldShowPromptModal, setShowPromptModal] = useState(false);

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
            title="扫码安全登录"
          >
            扫码安全登录
          </a>
          <form>
            <div className={styles["field"]}>
              <label>{Locale.Login.UserName}</label>
              <div className={styles["input-group"]}>
                {/* <div className={styles["input-group-addon"]} > </div> */}
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
                {/* <div className={styles["input-group-addon"]}></div> */}
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

        {/* 二维码登录框 */}
        <div className={styles["login-box-switch qrcode-login"]}></div>
        <form></form>
      </div>
    </ErrorBoundary>
  );
}
