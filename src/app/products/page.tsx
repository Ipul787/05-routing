import Link from "next/link"

export default function ProductList() {
    return (
          <div>
            <h1>Product List</h1>
            <ul style={{listStyleType: 'circle', color: 'black'}}>
            <Link rel="stylesheet" href="products/1"><li><h2>Product 1</h2></li></Link>
            <Link rel="stylesheet" href="products/2"><li><h2>Product 2</h2></li></Link>
            <Link rel="stylesheet" href="products/3"><li><h2>Product 3</h2></li></Link>
            </ul>
          </div>
    );
  }