import { useState, useEffect, HTMLProps, useRef } from "react";

import styles from "./login.module.scss";

import ResetIcon from "../icons/reload.svg";
import AddIcon from "../icons/add.svg";
import CloseIcon from "../icons/close.svg";
import CopyIcon from "../icons/copy.svg";
import ClearIcon from "../icons/clear.svg";
import LoadingIcon from "../icons/three-dots.svg";
import EditIcon from "../icons/edit.svg";
import EyeIcon from "../icons/eye.svg";
import {
  Input,
  List,
  ListItem,
  Modal,
  PasswordInput,
  Popover,
  Select,
} from "./ui-lib";
import { ModelConfigList } from "./model-config";

import { IconButton } from "./button";
import { Theme, useAppConfig } from "../store";

import Locale, { AllLangs, changeLang, getLang } from "../locales";
import { copyToClipboard } from "../utils";
import Link from "next/link";
import { Path } from "../constant";
import { ErrorBoundary } from "./error";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarPicker } from "./emoji";

export function Login() {
  const navigate = useNavigate();
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const config = useAppConfig();
  const [loadingUsage, setLoadingUsage] = useState(false);
  function checkUsage(force = false) {
    setLoadingUsage(true);
  }
  const [shouldShowPromptModal, setShowPromptModal] = useState(false);

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
        <List>
          <ListItem title={Locale.Settings.SendKey}>
            <input
              type="text"
              value=""
              className={styles["login-username"]}
              onInput={(e) => {
                alert();
              }}
            ></input>
          </ListItem>
          <ListItem title={Locale.Settings.SendKey}>
            <PasswordInput
              value=""
              type="text"
              placeholder={Locale.Settings.Token.Placeholder}
              onChange={(e) => {}}
            />
          </ListItem>
        </List>
      </div>
    </ErrorBoundary>
  );
}
