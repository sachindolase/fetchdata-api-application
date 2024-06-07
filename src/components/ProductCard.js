import React from "react";
import BasicCard from "./ui/Card";

const ProductCard = ({ product, onClick }) => {
	const truncatedDescription =
		product.description.length > 100
			? `${product.description.substring(0, 100)}...`
			: product.description;

	return (
		<BasicCard
			className="w-full rounded overflow-hidden shadow-lg cursor-pointer"
			onClick={onClick}
		>
			<div className="h-64 w-full p-6 overflow-hidden flex items-center justify-center">
				<img
					className="object-contain h-full"
					src={product.image}
					alt={product.title}
				/>
			</div>
			<div className="px-6 py-4">
				<div className="font-bold text-lg mb-2">{product.title}</div>
				<p className="text-gray-700 text-sm">{truncatedDescription}</p>
			</div>
			<div className="px-6 py-4 flex justify-between items-center">
				<span className="text-xl font-semibold">${product.price}</span>
				<span className="text-sm text-gray-700">
					Rating: {product.rating.rate} ({product.rating.count})
				</span>
			</div>
		</BasicCard>
	);
};

export default ProductCard;
