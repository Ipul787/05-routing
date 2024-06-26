import Link from "next/link"

type Props = {
    params: {
          productId: string
    }
  }
  
  export default function ProductDetails({ params }: Props) {
    return (
          <>
          <h1>Details about product {params.productId}</h1>
          <Link rel="stylesheet" href={`/products/${params.productId}/reviews`}><h2>Review</h2></Link>
          </>
    )
  }