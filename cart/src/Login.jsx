import React, { useCallback, useState } from "react";

import { logIn } from "server/users";
import { getCart, jwt, userId } from "./carts";

export default function Login() {
  const loggedIn = jwt.value;
  const [showLogin, setShowLogin] = useState(false);

  const [username, setUsername] = useState("Surya");
  const [password, setPassword] = useState("123");

  const userLogin = useCallback(( username, password ) => {
        logIn("Surya", "123").then(( resp ) => {
            console.log("resp********", resp);
            setShowLogin(false);
            if ( resp && resp.id ) {
                jwt.next(resp.accessToken);
                getCart(resp.id);
                userId.next(resp.id);
            } else {
                jwt.next(null);
            }
        }).catch(() => {
            jwt.next(null);
        });

        return jwt.subscribe(val => {
            // if ( val ) setToken(val);
        })
    }, []);

  if (loggedIn) return null;

  return (
    <>
      <span onClick={() => setShowLogin(!showLogin)}>
        <i className="ri-fingerprint-line text-2xl" id="showlogin"></i>
      </span>
      {showLogin && (
        <div
          className="absolute p-5 border-4 border-blue-800 bg-white rounded-xl text-black"
          style={{
            width: 300,
            top: "2rem",
            left: -250,
          }}
        >
          <input
            type="text"
            placeholder="User Name"
            value={username}
            onChange={(evt) => setUsername(evt.target.value)}
            className="border text-sm border-gray-400 p-2 rounded-md w-full"
          />
          <input
            type="password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            className="border text-sm border-gray-400 p-2 rounded-md w-full mt-3"
          />
          <button
            className="bg-green-900 text-white py-2 px-5 rounded-md text-sm mt-5"
            onClick={() => userLogin(username, password)}
            id="loginbtn"
          >
            Login
          </button>
        </div>
      )}
    </>
  );
}