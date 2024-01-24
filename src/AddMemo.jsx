//押すと編集状態に移行する「＋」ボタンのコンポーネント
export default function AddMemo({ memos, setMemos, setSelectedMemoId }) {
  function handleOnClick() {
    const newMemoId = crypto.randomUUID();
    setMemos([...memos, { id: newMemoId, content: ["新規メモ"] }]);
    setSelectedMemoId(newMemoId);
  }

  return (
    <button type="button" onClick={handleOnClick}>
      ＋
    </button>
  );
}
