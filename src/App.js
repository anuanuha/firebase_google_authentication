import { signInWithGoogle } from "./firebase-config";
import './App.css';
function App() {
  return (
    <div>
        <button type="button" class="login-with-google-btn"  onClick={signInWithGoogle}>
  Sign in with Google
</button>

<button type="button" class="login-with-google-btn"  >
  Sign in with Google
</button>
        <h1>{localStorage.getItem("name")}</h1>
        <h1>{localStorage.getItem("email")}</h1>
        <img src={localStorage.getItem("photo")}/>
    </div>
  );
}

export default App;
