import { useIsLoggedIn } from "../hooks/useIsLoggedIn.js";

//押すと編集状態に移行する「＋」ボタンのコンポーネント
export default function AddButton({ memos, setMemos, setSelectedMemoId }) {
  const { isLoggedIn } = useIsLoggedIn();

  function handleClick() {
    const newMemoId = crypto.randomUUID();
    setMemos([...memos, { id: newMemoId, content: ["新規メモ"] }]);
    setSelectedMemoId(newMemoId);
  }

  return (
    isLoggedIn && (
      <button className="add-button" type="button" onClick={handleClick}>
        ＋
      </button>
    )
  );
}
