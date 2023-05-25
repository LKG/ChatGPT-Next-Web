import { Analytics } from "@vercel/analytics/react";

import { Home } from "./components/home";
import { Toolbar } from "./components/toolbar";
import { getServerSideConfig } from "./config/server";
const serverConfig = getServerSideConfig();
export default async function App() {
  return (
    <>
      <Toolbar />
      <div style={{ marginTop: "99px", height: "100%" }}>
        <Home />
      </div>
      {serverConfig?.isVercel && <Analytics />}
    </>
  );
}
