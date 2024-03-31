import Link from "next/link";

export default function ReviewList() {
    return (
          <div>
            <h1>List of Reviews</h1>
            <ul style={{listStyleType: 'circle', color: 'black'}}>
            <Link rel="stylesheet" href="reviews/1"><li><h2>Review 1</h2></li></Link>
            <Link rel="stylesheet" href="reviews/2"><li><h2>Review 2</h2></li></Link>
            <Link rel="stylesheet" href="reviews/3"><li><h2>Review 3</h2></li></Link>
            </ul>
          </div>
    );
  }