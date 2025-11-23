import Link from "next/link";
import styles from "./Button.module.css";

export default function Button({ children, href, variant = "primary", className = "", ...props }) {
  const btnClass = `${styles.btn} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={btnClass} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={btnClass} {...props}>
      {children}
    </button>
  );
}
