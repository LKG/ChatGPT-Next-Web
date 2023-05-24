import type { NextPageWithLayout } from "./_app";
import styles from "./protocol.module.scss";
import {Toolbar} from "../app/components/toolbar";
import {Agreement} from "../app/components/agreement";
import {Footer} from "../app/components/footer";
const Protocol: NextPageWithLayout = () => {
  return (
    <>
      <Toolbar/>
      <section className={styles["container"]}>
      <Agreement/>
      </section>
      <Footer/>
    </>
  );
};

export default Protocol;

Protocol.getLayout = function getLayout(page: React.ReactElement) {
  return <>{page}</>;
};
