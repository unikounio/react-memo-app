import { useIsLoggedIn } from "../hooks/isLoggedInHooks.js";

export default function LoginButton({ setMemos, setSelectedMemoId }) {
  const { isLoggedIn, toggleLoginStatus } = useIsLoggedIn();
  const handleClick = () => {
    toggleLoginStatus();
    if (isLoggedIn) {
      setSelectedMemoId("");
      const lastSaveMemos = JSON.parse(localStorage.getItem("memos")) || [];
      setMemos(lastSaveMemos);
    }
  };

  return (
    <button className="login-button" onClick={handleClick}>
      {isLoggedIn ? "ログアウト" : "ログイン"}
    </button>
  );
}
