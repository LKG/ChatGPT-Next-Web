import styles from "./login-sns.module.scss";
import QqIcon from "../icons/qq.svg";
import WeiboIcon from "../icons/weibo.svg";
import { AiFillDingtalkSquare } from "react-icons/ai";
import BaiduIcon from "../icons/baidu.svg";
export function LoginSns(props: { onClick?: () => void }) {
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
          <a>
            <BaiduIcon />
          </a>
        </li>
        <li className={styles["dingtalk"]}>
          <a>
            <AiFillDingtalkSquare />
          </a>
        </li>
      </ul>
    </div>
  );
}
