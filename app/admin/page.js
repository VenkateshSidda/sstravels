"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import styles from "./login.module.css";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    if (res.error) {
      setError("Invalid credentials");
    } else {
      router.push("/admin/dashboard");
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1>Admin Login</h1>
        {error && <p className={styles.error}>{error}</p>}
        <div className={styles.field}>
          <label>Username</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div className={styles.field}>
          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <Button type="submit" variant="primary" className={styles.btn}>Login</Button>
      </form>
    </div>
  );
}
