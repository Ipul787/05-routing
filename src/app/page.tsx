import Link from "next/link";

export default function Home() {
    return (
      <div>
        <h1>Welcome to Home</h1> 
        <Link rel="stylesheet" href="/profile">Profile</Link>
        <br></br>
        <Link rel="stylesheet" href="/about ">About</Link>
        <br></br>
        <Link rel="stylesheet" href="/products ">Products</Link>
      </div>
    );
  }