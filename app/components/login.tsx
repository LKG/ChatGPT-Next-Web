import { useState, useEffect, HTMLProps, useRef, createRef } from "react";

import styles from "./login.module.scss";
import { Input, Modal, Popover, showToast, Select } from "./ui-lib";
import { IconButton } from "./button";
import { useAppConfig } from "../store";
import { useForm } from "react-hook-form";
import Locale from "../locales";
import Link from "next/link";
import { Path } from "../constant";
import { ErrorBoundary } from "./error";
import { useNavigate } from "react-router-dom";
import { UserModel, login } from "../api/model/user";
import { LoginSns } from "./login-sns";
export function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserModel>();
  const config = useAppConfig();
  const onSubmit = (data: UserModel) => {
    login(data);
  };
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles["field"]}>
                <label>{Locale.Login.UserName}</label>
                <div className={styles["input-group"]}>
                  <input
                    type="text"
                    {...register("userName", { required: true })}
                    title={Locale.Login.UserNamePlaceholder}
                    className={styles["login-text"]}
                    placeholder={Locale.Login.UserNamePlaceholder}
                  />
                </div>
              </div>
              <div className={styles["field"]}>
                <label>{Locale.Login.ValidateCode}</label>
                <div className={styles["input-group"]}>
                  <input
                    type="text"
                    // name="validateCode"
                    {...register("validateCode", { maxLength: 6 })}
                    title={Locale.Login.ValidateCode}
                    className={styles["login-validate-code"]}
                    placeholder={Locale.Login.ValidateCode}
                  />
                  <img
                    src="https://www.gongwk.com/validate/passcode?_r_0.3136760189843122"
                    className={styles["login-validate-code-img"]}
                  />
                  <span className={styles["input-group-btn"]}>
                    <IconButton
                      text={Locale.Login.ChangeCode}
                      className={styles["login-change-code-btn"]}
                      type="primary"
                      onClick={() => {
                        showToast(Locale.WIP);
                      }}
                    />
                  </span>
                </div>
              </div>
              <div className={styles["field"]}>
                <label>{Locale.Login.PassWord}</label>
                <a
                  className={styles["forget-pw-safe"]}
                  onClick={() => {
                    // navigate(Path.Regist);
                    showToast(Locale.WIP);
                  }}
                  target="_blank"
                >
                  {Locale.Login.Forget}
                </a>
                <div className={styles["input-group"]}>
                  <input
                    type="password"
                    {...register("passWord", {
                      required: true,
                      maxLength: 12,
                      minLength: {
                        value: 6,
                        message: "Min length is 6",
                      },
                    })}
                    title={Locale.Login.PassWord}
                    className={styles["login-text"]}
                    placeholder={Locale.Login.PassWord}
                  />
                </div>
              </div>
              <div className={styles["field"]}>
                <label className={styles["remember-me"]}>
                  <input {...register("rememberMe")} type="checkbox" />
                  {Locale.Login.RememberMe}
                </label>
                <a
                  className={styles["register-safe"]}
                  target="_blank"
                  onClick={() => {
                    navigate(Path.Regist);
                  }}
                >
                  {Locale.Login.Register}
                </a>
              </div>
              <IconButton
                text={Locale.Login.Button}
                className={styles["login-btn"]}
                type="primary"
                onClick={onSubmit}
              />
              <IconButton
                text={Locale.Login.Register}
                className={styles["login-register-btn"]}
                type="primary"
                onClick={() => {
                  // navigate(Path.Regist);
                  showToast(Locale.WIP);
                }}
              />
            </form>
            <LoginSns />
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
