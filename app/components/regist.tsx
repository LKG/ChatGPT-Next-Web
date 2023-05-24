import { useState, useEffect, HTMLProps, useRef } from "react";

import styles from "./regist.module.scss";
import { Input, Modal, Popover, showToast, Select } from "./ui-lib";

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
      <div className={styles["regist"]}>
        <div className={styles["regist-box"]}>
          <div className={styles["login-box-switch"]}>
            <a
              href="javascript:;"
              className={styles["btn-2login"]}
              title={Locale.Login.QrScan}
              onClick={() => {
                navigate(Path.Login);
              }}
            >
              {Locale.Login.QrScan}
            </a>
            <div className={styles["regist-message"]}></div>
            <form>
              <div className={styles["field"]}>
                <label>{Locale.Register.UserPhone}</label>
                <div className={styles["input-group"]}>
                  <input
                    type="text"
                    name="userPhone"
                    title={Locale.Register.UserPhone}
                    className={styles["login-text"]}
                    placeholder={Locale.Register.UserPhone}
                    value=""
                  />
                </div>
              </div>
              <div className={styles["field"]}>
                <label>{Locale.Register.PhoneCode}</label>
                <div className={styles["input-group"]}>
                  <input
                    type="text"
                    name="userPhone"
                    title={Locale.Register.UserPhone}
                    className={styles["login-phone-code"]}
                    placeholder={Locale.Register.PhoneCode}
                    value=""
                  />
                  <span className={styles["input-group-btn"]}>
                    <IconButton
                      text={Locale.Register.PhoneCodeBtn}
                      className={styles["login-sms-btn"]}
                      type="primary"
                      onClick={() => {
                        showToast(Locale.WIP);
                      }}
                    />
                  </span>
                </div>
              </div>
              <div className={styles["field"]}>
                <label>{Locale.Register.PassWord}</label>
                <div className={styles["input-group"]}>
                  <input
                    type="password"
                    name="passWord"
                    title={Locale.Register.PassWord}
                    className={styles["login-text"]}
                    placeholder={Locale.Register.PassWord}
                    value=""
                  />
                </div>
              </div>
              <div className={styles["field"]}>
                <label>{Locale.Register.RetryPassWord}</label>
                <div className={styles["input-group"]}>
                  <input
                    type="password"
                    name="retryPassWord"
                    title={Locale.Register.RetryPassWord}
                    className={styles["login-text"]}
                    placeholder={Locale.Register.RetryPassWord}
                    value=""
                  />
                </div>
              </div>
              <div className={styles["field"]}>
                <label className={styles["remember-me"]}>
                  <input name="rememberMe" type="checkbox" />
                  {Locale.Register.Agree}
                </label>
                <a className={styles["register-protocol"]}>
                  {Locale.Register.Protocol}
                </a>
              </div>
              <IconButton
                text={Locale.Login.Register}
                className={styles["register-btn"]}
                type="primary"
              />
              <IconButton
                text={Locale.Login.Button}
                className={styles["register-login-btn"]}
                type="primary"
                onClick={() => {
                  navigate(Path.Login);
                }}
              />
            </form>
          </div>
          {/* 标准登录框 */}
        </div>
      </div>
    </ErrorBoundary>
  );
}