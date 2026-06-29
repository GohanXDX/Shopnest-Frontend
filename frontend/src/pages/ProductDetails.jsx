import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { apiClient } from '../config/api';



const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch();

    useEffect(() => {

        const fetchProduct = async () => {
            try {
                const res = await apiClient.get(`/api/products/${id}`)
                if (res.status >= 400) {
                    throw new Error('Failed to fetch product')
                }
                const data = res.data
                setProduct(data.product || data)
            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false)
            }
        };

        fetchProduct();
    }, [id]);

    const handleAddCart = () => {
        if (product) {
            dispatch(addToCart({
                productId: product._id,
                name: product.name,
                price: product.price,
                imageUrl: product.imageUrl,
                qty: 1
            }))
            alert('Successfully added to your cart')
        }
    }
    if (loading) return <div className="text-center py-20 text-gray-600">Loading product...</div>;
    if (!product) return <div className="text-center py-20 text-red-600">Product Not Found</div>;

    return (
        <div className="max-w-6xl mx-auto p-6">
            {/* Breadcrumb Navigation */}
            <nav className="text-sm text-gray-600 mb-4">
                <Link to="/" className="hover:underline">Home</Link>
                <span className="mx-2">/</span>
                <Link to="/shop" className="hover:underline">Shop</Link>
                <span className="mx-2">/</span>
                <span className="text-gray-500">{product?.category}</span>
                <span className="mx-2">/</span>
                <span className="font-medium text-gray-700">{product?.name}</span>
            </nav>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                    {/* Left: Image */}
                    <div className="md:w-1/2 p-6 flex items-center justify-center bg-gray-50">
                        <img src={product?.imageUrl} alt={product?.name} className="w-full max-w-sm object-cover rounded" />
                    </div>

                    {/* Right: Details */}
                    <div className="md:w-1/2 p-6 ">
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">{product?.name}</h1>
                        <p className="text-2xl text-emerald-800 font-semibold mb-4">Rs. {product?.price ? Number(product.price).toFixed(2) : '0.00'}</p>

                        <div className="mb-4">
                            <h4 className="font-semibold text-black mb-2">Product Description</h4>
                            <p className="text-gray-800 leading-relaxed">{product?.description}</p>
                        </div>

                        <div className="flex items-center gap-4 mb-4">
                            <button onClick={handleAddCart} className="bg-blue-700 hover:bg-blue-600 text-white px-5 py-2 rounded shadow">Add to Cart</button>
                            <button className="border border-gray-300 px-4 py-2 rounded bg-yellow-500  hover:bg-yellow-600">Buy Now</button>
                        </div>

                        <p className={product?.stock > 0 ? 'text-sm text-emerald-700' : 'text-sm text-red-600'}>
                            {product?.stock > 0 ? `In Stock (${product.stock} units available)` : `Temporarily Out of Stock`}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
