//メモの編集を行うコンポーネント
export default function MemoEditor({
  memos,
  setMemos,
  selectedMemoId,
  setSelectedMemoId,
}) {
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
    updateMemos(e.target.value);
  };

  const handleDelete = () => {
    const filteredMemos = memos.filter((m) => m.id !== selectedMemoId);

    //ユーザ側からストレージデータを完全に消す手段を提供するために分岐させている
    if (filteredMemos.length === 0) {
      setMemos(null);
    } else {
      setMemos(filteredMemos);
    }
    setSelectedMemoId(null);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <textarea
        cols="40"
        rows="10"
        value={memoContent}
        onChange={handleChange}
      />
      <div className="editor-button">
        <button type="submit" id="edit-button" disabled={!memoContent.trim()}>
          編集
        </button>
        <button type="button" id="delete-button" onClick={handleDelete}>
          削除
        </button>
      </div>
    </form>
  );
}
