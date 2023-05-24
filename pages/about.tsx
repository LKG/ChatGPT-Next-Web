import type { NextPageWithLayout } from "./_app";
import styles from "./common.module.scss";
import { Toolbar } from "../app/components/toolbar";
import { Footer } from "../app/components/footer";
const About: NextPageWithLayout = () => {
  return (
    <>
      <Toolbar />
      <section>
        <div className={styles["panel"] + " " + styles["panel-default"]}>
          <div className={styles["panel-heading"]}>
            <h2>联系我们</h2>
          </div>
          <div className={styles["panel-body"]}>
            <p>
              如您有网站相关问题，可以采取以下方式反馈：
              1、发送邮件至service_reply@gongwk.com；
              为了更好地帮助您解决问题，请您将问题清楚描述，并附上账户名及相关截图，谢谢。
            </p>
            <div
              className={styles["alert"] + " " + styles["alert-info"]}
              role="alert"
            >
              注： 1.
              邮箱回复时间：我们将于七个工作日内回复相关问题，高级会员的问题将于两个工作日内回复。
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;

About.getLayout = function getLayout(page: React.ReactElement) {
  return <>{page}</>;
};
