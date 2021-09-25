/**
 * File with all interfaces
 */

export interface Category {
	name: string
}

export interface Product {
	name: string
	price: number
	categories?: Category[]
}
