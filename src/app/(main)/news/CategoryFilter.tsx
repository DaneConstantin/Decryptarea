import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

interface CategoryFilterProps {
    categories: string[];
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, selectedCategory, setSelectedCategory }) => {
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get("category");

    useEffect(() => {
        if (categoryParam) {
            setSelectedCategory(categoryParam);
        }
    }, [categoryParam, setSelectedCategory]);



    return (
        <div className="my-8">
            {/* Button to toggle the dropdown */}
            <label className="md:hidden text-sm font-medium content-center">Filter by Category:</label>

            {/* Dropdown for mobile */}

            <div className="z-10  border dark:border-gray-500 rounded-xl w-1/2 md:hidden">
                <select
                    value={selectedCategory}
                    onChange={(e) => {
                        setSelectedCategory(e.target.value);
                    }}
                    className="rounded-xl border border-gray-300 p-3 w-full "
                >
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </option>
                    ))}
                </select>
            </div>


            {/* Hidden buttons for desktop */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-10 mx-16">
                <label className="text-sm font-medium content-center">Filter by Category:</label>
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`rounded-full border border-[#ffffff1a] border-gray-300 bg-gradient-to-br from-[#ffffff] to-[#e6e6e6] p-3 px-6 text-sm leading-normal text-black shadow-sm hover:border-[#ececec] hover:to-[#dfdfdf] ${selectedCategory === category
                            ? 'from-purple-700 to-purple-800 text-white hover:border-[#ececec] dark:hover:border-purple-900 hover:to-purple-900'
                            : ''
                            }`}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
                <button
                    onClick={() => setSelectedCategory('')}
                    className={`rounded-full border border-[#ffffff1a] border-gray-300 bg-gradient-to-br from-[#ffffff] to-[#e6e6e6] p-3 px-6 text-sm leading-normal text-black shadow-sm hover:border-[#ececec] hover:to-[#dfdfdf] ${selectedCategory === ''
                        ? 'from-purple-700 to-purple-800 text-white hover:border-[#ececec] dark:hover:border-purple-900 hover:to-purple-900'
                        : ''
                        }`}
                >
                    All Categories
                </button>
            </div>
        </div>
    );
};

export default CategoryFilter;
