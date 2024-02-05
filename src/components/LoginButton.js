import { useIsLoggedIn } from "../hooks/is-logged-in-hooks.js";

export default function LoginButton() {
  const { isLoggedIn, toggleLoginStatus } = useIsLoggedIn();

  return (
    <button onClick={toggleLoginStatus}>
      {isLoggedIn ? "ログアウト" : "ログイン"}
    </button>
  );
}
