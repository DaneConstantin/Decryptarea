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

            <div className="grid grid-cols-5 gap-10 mx-16">
                <label className="text-sm font-medium text-gray-700 content-center">Filter by Category:</label>
                {categories?.map((category: string) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`rounded-full border border-[#ffffff1a] border-gray-300 bg-gradient-to-br from-[#ffffff] to-[#e6e6e6] p-3 px-6 text-sm leading-normal text-black shadow-sm hover:border-[#ececec] hover:to-[#dfdfdf]  ${selectedCategory === category
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
