import * as React from "react";

import styles from "./login-sns.module.scss";
import QqIcon from "../icons/qq.svg";
import WeiboIcon from "../icons/weibo.svg";
import BaiduIcon from "../icons/baidu.svg";
export function LoginSns(props: {
  onClick?: () => void;
  icon?: JSX.Element;
  type?: "primary" | "danger";
  text?: string;
  bordered?: boolean;
  shadow?: boolean;
  className?: string;
  title?: string;
  disabled?: boolean;
}) {
  return (
    <div className={styles["login-sns"]}>
      <ul>
        <li className={styles["qq"]}>
          <a>
            <QqIcon />
          </a>
        </li>
        <li className={styles["weibo"]}>
          <a>
            <WeiboIcon />
          </a>
        </li>
        <li className={styles["baidu"]}>
          {" "}
          <a>
            <BaiduIcon />
          </a>
        </li>
      </ul>
    </div>
  );
}
