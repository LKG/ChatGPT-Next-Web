import { useState, useEffect, useMemo, HTMLProps, useRef } from "react";

import styles from "./my.module.scss";
import {
  Input,
  List,
  ListItem,
  Modal,
  PasswordInput,
  Popover,
  Select,
} from "./ui-lib";
import {
  FaUserCircle,
  FaSignOutAlt,
  FaShoppingBag,
  FaCogs,
} from "react-icons/fa";
import { IconButton } from "./button";
import { useChatStore, Theme, useAccessStore, useAppConfig } from "../store";
import { Avatar, AvatarPicker } from "./emoji";
import Locale, { AllLangs, changeLang, getLang } from "../locales";
import { copyToClipboard } from "../utils";
import Link from "next/link";
import { Path } from "../constant";
import { ErrorBoundary } from "./error";
import { useNavigate } from "react-router-dom";
export function My() {
  const navigate = useNavigate();
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const config = useAppConfig();
  const updateConfig = config.update;
  const chatStore = useChatStore();

  const [loadingUsage, setLoadingUsage] = useState(false);
  function checkUsage(force = false) {
    setLoadingUsage(true);
  }

  const accessStore = useAccessStore();
  const enabledAccessControl = useMemo(
    () => accessStore.enabledAccessControl(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

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
      <div className={styles["my"]}>
        <List>
          <ListItem title={Locale.Settings.Avatar} icon={<FaUserCircle />}>
            <Popover
              onClose={() => setShowEmojiPicker(false)}
              content={
                <AvatarPicker
                  onEmojiClick={(avatar: string) => {
                    updateConfig((config) => (config.avatar = avatar));
                    setShowEmojiPicker(false);
                  }}
                />
              }
              open={showEmojiPicker}
            >
              <div
                className={styles.avatar}
                onClick={() => setShowEmojiPicker(true)}
              >
                <Avatar avatar={config.avatar} />
              </div>
            </Popover>
          </ListItem>
        </List>
        <List>
          <ListItem
            title={Locale.Settings.Title}
            className={styles["my-list-item"]}
            icon={<FaShoppingBag />}
          ></ListItem>
          <ListItem
            title={Locale.Settings.Title}
            className={styles["my-list-item"]}
            icon={<FaCogs />}
          ></ListItem>
          <IconButton
            text={Locale.Login.Register}
            className={styles["login-register-btn"]}
            type="primary"
            onClick={() => {
              navigate(Path.Regist);
            }}
          />
        </List>
      </div>
    </ErrorBoundary>
  );
}
