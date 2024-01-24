import { useState, useEffect } from "react";

//memosの更新とlocalStorageへの保存が必ずセットなのでまとめている
export default function useMemos() {
  const initialMemos = JSON.parse(localStorage.getItem("memos")) || [];
  const [memos, setMemos] = useState(initialMemos);

  useEffect(() => {
    memos !== null
      ? localStorage.setItem("memos", JSON.stringify(memos))
      : localStorage.removeItem("memos");
  }, [memos]);

  return [memos, setMemos];
}
