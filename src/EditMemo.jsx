import { useState, useEffect } from "react";

//メモの編集・削除を行うコンポーネント
export default function EditMemo({
  memos,
  setMemos,
  selectedMemoId,
  setSelectedMemoId,
}) {
  const selectedMemo = memos.find((memo) => memo.id === selectedMemoId);

  //注意：memoContentは文字列であり、memosに格納されているオブジェクトのcontent（配列）とは異なる
  const [memoContent, setMemoContent] = useState(
    selectedMemo.content.join("\n")
  );
  useEffect(() => {
    setMemoContent(selectedMemo.content.join("\n"));
  }, [selectedMemo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedMemos = memos.map((memo) =>
      memo.id === selectedMemoId
        ? { ...memo, content: memoContent.split("\n") }
        : memo
    );
    setMemos(updatedMemos);
  };

  const handleOnChange = (e) => {
    setMemoContent(e.target.value);
  };

  const handleDelete = () => {
    const updatedMemos = memos.filter((m) => m.id !== selectedMemoId);

    //ユーザ側からストレージデータを完全に消す手段を提供するために分岐させている
    if (updatedMemos.length === 0) {
      setMemos(null);
    } else {
      setMemos(updatedMemos);
    }
    setSelectedMemoId(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={memoContent} onChange={handleOnChange} />
      <button type="submit" disabled={!memoContent.trim()}>
        編集
      </button>
      <button type="button" onClick={handleDelete}>
        削除
      </button>
    </form>
  );
}
