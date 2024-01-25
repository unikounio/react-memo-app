import { useState } from "react";
import useMemos from "./useMemos.js";
import MemoList from "./MemoList.js";
import AddButton from "./AddButton.js";
import MemoEditor from "./MemoEditor.js";

export default function App() {
  const [memos, setMemos] = useMemos();
  const [selectedMemoId, setSelectedMemoId] = useState(null);

  return (
    <div className="app-container">
      <div className="list-container">
        {memos !== null && (
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
  );
}
