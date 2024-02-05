//memosを一覧表示するコンポーネント
export default function MemoList({ memos, setSelectedMemoId }) {
  function handleClick(memo) {
    setSelectedMemoId(memo.id);
  }

  return (
    <ul>
      {memos.map((memo) => {
        return (
          <li key={memo.id} onClick={() => handleClick(memo)}>
            {memo.content[0]}
          </li>
        );
      })}
    </ul>
  );
}
