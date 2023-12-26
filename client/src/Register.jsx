import { useState } from "react";
function Register(params) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="bg-ubc-ligtblue h-screen flex items-center">
      <form className="w-64 mx-auto">
        <input
          value={username}
          onChange={(ev) => setUserName(ev.target.value)}
          type="text"
          placeholder="Enter username"
          className="block w-full rounded-md p-2 mb-2 border-2"
        />
        <input
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          type="text"
          placeholder="Enter password"
          className="block w-full rounded-md p-2 mb-2 border-2"
        />
        <button className="block bg-ubc-darkblue text-white w-full rounded-md p-2">
          Register
        </button>
      </form>
    </div>
  );
}
export default Register;
