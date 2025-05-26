// src/App.jsx

import React, { useEffect, useState } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "./supabaseClient";

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Check for an existing session on mount
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen for auth state changes (login/logout)
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    // Cleanup the listener on unmount
    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <div style={{ maxWidth: "420px", margin: "auto", paddingTop: "40px" }}>
      {!session ? (
        // Show the Supabase Auth UI if not logged in
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
      ) : (
        // Show a welcome message and sign out button if logged in
        <div style={{ textAlign: "center" }}>
          <h2>Welcome, {session.user.email}!</h2>
          <button
            onClick={() => supabase.auth.signOut()}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
