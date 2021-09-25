import React from 'react'
import { Head } from '.'
import { Product } from '../interfaces'

interface ProductHeadProps {
	product: Product
}

export const ProductHead = ({ product }: ProductHeadProps) => (
	<Head title={`Product: ${product.name}`} />
)
