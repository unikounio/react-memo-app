import { useIsLoggedIn } from "../hooks/isLoggedInHooks.js";

//メモの編集を行うコンポーネント
export default function MemoEditor({
  memos,
  setMemos,
  selectedMemoId,
  setSelectedMemoId,
  selectedMemo,
}) {
  const { isLoggedIn } = useIsLoggedIn();
  const memoContent = selectedMemo.content.join("\n");

  const updateMemos = (updatedMemoContent) => {
    const updatedMemos = memos.map((memo) =>
      memo.id === selectedMemoId
        ? { ...memo, content: updatedMemoContent.split("\n") }
        : memo,
    );
    setMemos(updatedMemos);
    return updatedMemos;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedMemos = updateMemos(memoContent);
    localStorage.setItem("memos", JSON.stringify(updatedMemos));
  };

  const handleChange = (e) =>
    isLoggedIn ? updateMemos(e.target.value) : memoContent;

  const handleDelete = () => {
    const filteredMemos = memos.filter((m) => m.id !== selectedMemoId);
    setMemos(filteredMemos);
    localStorage.setItem("memos", JSON.stringify(filteredMemos));
    setSelectedMemoId("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        cols="40"
        rows="10"
        value={memoContent}
        onChange={handleChange}
      />
      {isLoggedIn && (
        <div className="editor-button">
          <button
            type="submit"
            className="edit-button"
            disabled={!memoContent.trim()}
          >
            編集
          </button>
          <button
            type="button"
            className="delete-button"
            onClick={handleDelete}
          >
            削除
          </button>
        </div>
      )}
    </form>
  );
}
