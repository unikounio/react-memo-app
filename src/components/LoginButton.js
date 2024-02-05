import { useIsLoggedIn } from "../hooks/isLoggedInHooks.js";

export default function LoginButton({ setSelectedMemoId }) {
  const { isLoggedIn, toggleLoginStatus } = useIsLoggedIn();
  const handleClick = () => {
    toggleLoginStatus();
    if (!isLoggedIn) {
      setSelectedMemoId("");
    }
  };

  return (
    <button className="login-button" onClick={handleClick}>
      {isLoggedIn ? "ログアウト" : "ログイン"}
    </button>
  );
}
