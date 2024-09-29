interface CategoryFilterProps {
    categories: string[];
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, selectedCategory, setSelectedCategory }) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Category:</label>
            <div className="grid grid-cols-4 gap-20 mx-16">
                {categories?.map((category: string) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`py-4 px-4 rounded-md transition duration-200  ${selectedCategory === category
                                ? 'bg-yellow-500 text-black font-semibold'
                                : 'bg-yellow-300 text-black'
                            }`}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
                <button
                    onClick={() => setSelectedCategory('')}
                    className={`py-2 px-4 rounded-md transition duration-200 ${selectedCategory === ''
                            ? 'bg-yellow-500 text-black font-semibold'
                            : 'bg-yellow-300 text-black'
                        }`}
                >
                    All Categories
                </button>
            </div>
        </div>
    );
};

export default CategoryFilter;
