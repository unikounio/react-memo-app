import { useIsLoggedIn } from "../hooks/isLoggedInHooks.js";

//メモの編集を行うコンポーネント
export default function MemoEditor({
  memos,
  setMemos,
  selectedMemoId,
  setSelectedMemoId,
}) {
  const { isLoggedIn } = useIsLoggedIn();
  const selectedMemo = memos.find((memo) => memo.id === selectedMemoId);

  //注意：memoContentは文字列であり、memosに格納されているオブジェクトのcontent（配列）とは異なる
  const memoContent = selectedMemo.content.join("\n");

  const updateMemos = (updatedMemoContent) => {
    const updatedMemos = memos.map((memo) =>
      memo.id === selectedMemoId
        ? { ...memo, content: updatedMemoContent.split("\n") }
        : memo
    );
    setMemos(updatedMemos);
  };

  const handleChange = (e) => {
    return isLoggedIn ? updateMemos(e.target.value) : memoContent;
  };

  const handleDelete = () => {
    const filteredMemos = memos.filter((m) => m.id !== selectedMemoId);
    setMemos(filteredMemos);
    setSelectedMemoId("");
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
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
