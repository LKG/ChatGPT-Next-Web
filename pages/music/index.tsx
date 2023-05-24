import { useRef, useState, RefObject, useEffect } from "react";
export default function Iframe () {
    const [iframeHeight, setIframeHeight] = useState(0)
    useEffect(() => {
    //https://music.163.com/outchain/player?type=2&id=100&auto=1&height=66
    }, [])
   
    return (
      <iframe
      src="https://music.163.com/outchain/player?type=2&id=1934251776&auto=1&height=66"
        title="网易云音乐"
        style={{border: 0}}
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      ></iframe>
    )
  }