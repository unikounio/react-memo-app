import { useState } from "react";
import useMemos from "./useMemos.jsx";
import MemoList from "./MemoList.jsx";
import AddMemo from "./AddMemo.jsx";
import EditMemo from "./EditMemo.jsx";

export default function App() {
  const [memos, setMemos] = useMemos();
  const [selectedMemoId, setSelectedMemoId] = useState(null);

  return (
    <div className="App">
      {memos !== null && (
        <MemoList
          memos={memos}
          setMemos={setMemos}
          setSelectedMemoId={setSelectedMemoId}
        />
      )}

      <AddMemo
        memos={memos || []}
        setMemos={setMemos}
        setSelectedMemoId={setSelectedMemoId}
      />
      {selectedMemoId && (
        <EditMemo
          memos={memos}
          setMemos={setMemos}
          selectedMemoId={selectedMemoId}
          setSelectedMemoId={setSelectedMemoId}
        />
      )}
    </div>
  );
}
