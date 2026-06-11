import { Star } from "lucide-react";

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300">
      
      <div className="h-48 bg-white p-4 flex items-center justify-center overflow-hidden border-b border-gray-50">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-500 block mb-1 ">
            {product.category}
          </span>
          
          <h3 className="font-semibold text-gray-800 line-clamp-2 text-sm min-h-10">
            {product.title}
          </h3>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          
          <div className="flex items-center text-sm text-amber-500 font-medium bg-amber-50 px-2 py-1 rounded-lg">
            <Star className="h-4 w-4 fill-amber-500 text-amber-500 mr-1" />
            <span>{product.rating?.rate || 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;