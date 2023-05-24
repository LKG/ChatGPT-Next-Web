import * as React from "react";
import { FaUserCircle, FaSignOutAlt, FaShoppingBag } from "react-icons/fa";
import styles from "./toolbar.module.scss";

export function Toolbar(props: { onClick?: (e: any) => void }) {
  return (
    <div className={styles["toolbar"]}>
      <div className={styles["toolbar-inside"]}>
        <div className={styles["toolbar-container"]}>
          <div className={styles["toolbar-container-left"]}>
            <div className={styles["toolbar-logo"]}>
              <a>
                <img
                  title="公文库"
                  src="https://gwk-1251520987.cos.ap-shanghai.myqcloud.com/imgs/logo.png"
                />
              </a>
            </div>
          </div>
          <div className={styles["toolbar-container-middle"]}>
            <div className={styles["toolbar-search"]}>
              <div className={styles["toolbar-search-container"]}>
                <input
                  className={styles["toolbar-search-input"]}
                  type="text"
                  readOnly
                  value=""
                />
                <div className={styles["gradient"]}> </div>
                <button id="toolbar-search-button">
                  <span>搜索</span>
                </button>
              </div>
            </div>
          </div>
          <div className={styles["toolbar-container-right"]}>
            <div className={styles["toolbar-btns"]}>
              <div
                className={
                  styles["toolbar-btn"] + " " + styles["toolbar-btn-login"]
                }
              >
                <a className={styles["hasAvatar"]}>
                  <img src="https://himg.bdimg.com/sys/portrait/item/49726c6b67363132339213.jpg" />
                </a>
                <div className={styles["toolbar-profile"]}>
                  <div className={styles["profile-top"]}>
                    <a className={styles["profile-avatar"]}>
                      <img src="https://himg.bdimg.com/sys/portrait/item/49726c6b67363132339213.jpg" />
                    </a>
                    <p className={styles["profile-nickName"]}>--</p>
                    <a className={styles["profile-no-vip"]}></a>
                  </div>
                  <div className={styles["profile-mid"]}>
                    <a>
                      <i className={styles["profile-fansCount"]}></i>
                      粉丝
                    </a>
                    <a>关注</a>
                    <a>获赞</a>
                  </div>
                  <div className={styles["profile-bottom"]}>
                    <ul className={styles["border-bottom"]}>
                      <li>
                        <a>
                          <FaUserCircle />
                          个人中心
                        </a>
                      </li>
                      <li>
                        <a>
                          <FaShoppingBag />
                          我的订单
                        </a>
                      </li>
                      <li className={styles["profile-logout"]}>
                        <a>
                          <FaSignOutAlt />
                          退出
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
