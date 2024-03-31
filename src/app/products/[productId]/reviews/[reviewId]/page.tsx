type Props = {
    params: {
          productId: string
          reviewId: string
    }
  }
  
  export default function ProductDetails({ params }: Props) {
    return (
          <h1>Review no. {params.reviewId} about product {params.productId}</h1>
    )
  }