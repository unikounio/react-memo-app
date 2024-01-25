//memosを一覧表示するコンポーネント
export default function MemoList({ memos, setSelectedMemoId }) {
  function handleOnClick(memo) {
    setSelectedMemoId(memo.id);
  }

  return (
    <ul>
      {memos.map((memo) => {
        return (
          <li key={memo.id} onClick={() => handleOnClick(memo)}>
            {memo.content[0]}
          </li>
        );
      })}
    </ul>
  );
}
