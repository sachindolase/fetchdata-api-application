import React, { useEffect, useRef } from "react";
import ButtonUsage from "./ui/Button";
import BasicCard from "./ui/Card";

const ProductModal = ({ product, onClose }) => {
	const modalRef = useRef(null);

	const handleClickOutside = (event) => {
		if (modalRef.current && !modalRef.current.contains(event.target)) {
			onClose();
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
			<BasicCard
				ref={modalRef}
				className="bg-white rounded-lg overflow-hidden shadow-lg max-w-lg w-full"
			>
				<div className="h-64 w-full overflow-hidden flex items-center justify-center p-2 pt-6">
					<img
						className="object-contain h-full"
						src={product.image}
						alt={product.title}
					/>
				</div>
				<div className="p-6">
					<div className="font-bold text-xl mb-2">
						{product.title}
					</div>
					<p className="text-gray-700 h-[12rem] overflow-auto text-base pr-2 mb-4">
						{product.description}
					</p>
					<div className="flex justify-between items-center mb-4">
						<span className="text-sm text-gray-600 font-semibold">
							Rating: {product.rating.rate} (
							{product.rating.count})
						</span>
						<span className="text-xl font-semibold">
							${product.price}
						</span>
					</div>
					<div className="flex gap-4 justify-end">
						<ButtonUsage
							variant="outlined"
							text="Close"
							onClick={onClose}
						></ButtonUsage>
						<ButtonUsage
							variant="contained"
							text="Buy"
						></ButtonUsage>
					</div>
				</div>
			</BasicCard>
		</div>
	);
};

export default ProductModal;
