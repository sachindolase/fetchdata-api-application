import { useEffect, useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import ProductModal from "./components/ProductModal";

function App() {
	const [products, setProducts] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState(null);

	useEffect(() => {
		setIsLoading(true);
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
				setIsLoading(false);
			})
			.catch(() => setIsLoading(false));
	}, []);

	const filteredProducts = products.filter((product) =>
		product.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className="container max-w-6xl mx-auto py-8 px-8 flex flex-col items-center">
			<input
				type="text"
				placeholder="Search products"
				className="px-4 py-2 w-full mb-8 border border-gray-300 rounded"
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			{isLoading ? (
				<div className="text-xl mx-auto font-semibold text-slate-400 text-center capitalize">
					Loading products...
				</div>
			) : (
				<>
					{filteredProducts.length === 0 ? (
						<div className="text-xl mx-auto font-semibold text-red-400 text-center capitalize">
							No products found :(
						</div>
					) : (
						<div className="grid gap-y-10 gap-x-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
							{filteredProducts.map((product) => (
								<ProductCard
									key={product.id}
									product={product}
									onClick={() => setSelectedProduct(product)}
								/>
							))}
						</div>
					)}
				</>
			)}
			{selectedProduct && (
				<ProductModal
					product={selectedProduct}
					onClose={() => setSelectedProduct(null)}
				/>
			)}
		</div>
	);
}

export default App;
