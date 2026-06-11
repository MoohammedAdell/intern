function CategoryFilter() {
  const dummyCategories = [
    "All",
    "Electronics",
    "Jewelry",
    "Men's Clothing",
    "Women's Clothing",
  ];
  const activeCategory = "All";

  return (
    <div className="w-full my-6">
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
        {dummyCategories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-all duration-200 ${
              activeCategory === category
                ? "bg-indigo-600 text-white shadow-sm"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;
