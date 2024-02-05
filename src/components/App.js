import { useState } from "react";
import useMemos from "../hooks/useMemos.js";
import MemoList from "./MemoList.js";
import AddButton from "./AddButton.js";
import MemoEditor from "./MemoEditor.js";
import LoginButton from "./LoginButton.js";
import { IsLoggedInProvider } from "../hooks/isLoggedInHooks.js";

export default function App() {
  const [memos, setMemos] = useMemos();
  const [selectedMemoId, setSelectedMemoId] = useState("");

  return (
    <div className="app-container">
      <IsLoggedInProvider>
        <div className="login-container">
          <LoginButton setSelectedMemoId={setSelectedMemoId} />
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
              />
            )}
          </div>
        </div>
      </IsLoggedInProvider>
    </div>
  );
}
