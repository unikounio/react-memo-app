import { useState } from "react";
import MemoList from "./MemoList.js";
import AddButton from "./AddButton.js";
import MemoEditor from "./MemoEditor.js";
import LoginButton from "./LoginButton.js";
import { IsLoggedInProvider } from "../hooks/isLoggedInHooks.js";

export default function App() {
  const initialMemos = JSON.parse(localStorage.getItem("memos")) || [];
  const [memos, setMemos] = useState(initialMemos);
  const [selectedMemoId, setSelectedMemoId] = useState("");
  const selectedMemo = memos.find((memo) => memo.id === selectedMemoId);
  //注意：memoContentは文字列であり、memosに格納されているオブジェクトのcontent（配列）とは異なる

  return (
    <div className="app-container">
      <IsLoggedInProvider>
        <div className="login-container">
          <LoginButton
            setMemos={setMemos}
            setSelectedMemoId={setSelectedMemoId}
          />
        </div>
        <div className="memos-container">
          <div className="list-container">
            {memos.length !== 0 && (
              <MemoList
                memos={memos}
                setMemos={setMemos}
                setSelectedMemoId={setSelectedMemoId}
              />
            )}

            <AddButton
              memos={memos || []}
              setMemos={setMemos}
              setSelectedMemoId={setSelectedMemoId}
            />
          </div>
          <div className="editor-container">
            {selectedMemoId && (
              <MemoEditor
                memos={memos}
                setMemos={setMemos}
                selectedMemoId={selectedMemoId}
                setSelectedMemoId={setSelectedMemoId}
                selectedMemo={selectedMemo}
              />
            )}
          </div>
        </div>
      </IsLoggedInProvider>
    </div>
  );
}
