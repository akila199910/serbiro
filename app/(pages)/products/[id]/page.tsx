import React from 'react'
import products from '@/app/data/product'
import ProductPageClient from './ProductPageClient' // Import the client component

// This function now works because this file is a Server Component
export async function generateStaticParams() {
  return products.map((category) => ({
    id: category.id.toString(),
  }));
}

// This is the new page component. It's simple:
// It just renders the Client Component and passes the 'id' as a prop.
export default function ProductsPage({ params }: { params: { id: string } }) {
  return (
    <ProductPageClient categoryId={params.id} />
  )
}