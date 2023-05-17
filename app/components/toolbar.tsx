import { useAppConfig, useChatStore } from "../store";

import { useNavigate } from "react-router-dom";

export function Toolbar(props: { className?: string }) {
  const chatStore = useChatStore();

  const navigate = useNavigate();
  const config = useAppConfig();

  return (
    <div>
      <div className="navbar">{/* 导航栏内容 */}</div>
      <div className="content">{/* 内容区域 */}</div>
    </div>
  );
}
