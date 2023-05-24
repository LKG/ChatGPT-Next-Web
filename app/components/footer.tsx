import styles from "./footer.module.scss";

export function Footer(props: {
  onClick?: (e: any) => void;
  link?: boolean;
  copyright?: boolean;
}) {
  return (
    <div className={styles["footer"]}>
      <div className={styles["container-fluid"]}>
        <div className={styles["footer-lk"]}>
          <div className={styles["container"]}>
            <div className={styles["row"]}></div>
          </div>
          <div className={styles["links"]}>
            <a target="_blank" href="https://www.gongwk.com/aboutus.jhtml">
              关于我们
            </a>
            |<a href="https://www.gongwk.com/contact.jhtml">联系我们</a>|
            <a href="https://www.gongwk.com/contact.jhtml" target="_blank">
              Contact Us
            </a>
          </div>
          <div className={styles["container"]}>
            {/* <!-- Nav tabs --> */}
            <ul className={styles["nav-links"]} role="tablist">
              <li role="presentation" className={styles["active"]}>
                <a href="#link">友情链接</a>
              </li>
            </ul>
            {/* <!-- Tab panes --> */}
            <div className={styles["tab-content"]}>
              <div role="tabpanel" className={styles["tab-pane"]}>
                <ul className={styles["links-ul"]}></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--版权信息begin--> */}
      <div>
        <div className={styles["wrapper"]}>
          <p className={styles["text-center"]}>
            <a href="https://www.gongwk.com/">公文库</a> 版权所有 Copyright ©
            2009-2023{" "}
            <a
              href="http://www.beian.miit.gov.cn"
              target="_blank"
              rel="nofollow"
            >
              浙ICP备19027625号
            </a>
          </p>
        </div>
      </div>
      {/* <!--版权信息end--> */}
    </div>
  );
}
