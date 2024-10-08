'use client'
import React, { Fragment, useReducer, useState } from 'react';
import Container from '../../reusableComponents/Container';
import { Dialog, Disclosure, Transition } from '@headlessui/react';
import { FunnelIcon, MinusIcon, PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';
import CardContent from './CardContent';

const filters = [
    {
        id: 'UseCase',
        name: 'Use Case',
        options: [
            { value: 'NFT', label: 'NFT Platforms' },
            { value: 'Token', label: 'Token Management' },
        ],
    },
    {
        id: 'Integration',
        name: 'Integration Type',
        options: [
            { value: 'Front', label: 'Frontend', checked: false },
            { value: 'Back', label: 'Backend', checked: false },
            { value: 'Full', label: 'Full Stack', checked: true },
        ],
    },
    {
        id: 'Pricing',
        name: 'Pricing',
        options: [
            { value: 'Free', label: 'Free', checked: false },
            { value: 'Paid', label: 'Paid', checked: false },
        ],
    },
    {
        id: 'Compatibility',
        name: 'Blockchain Compatibility',
        options: [
            { value: 'EVM', label: 'EVM Blockchains', checked: false },
            { value: 'Solana', label: 'Solana', checked: false },
            { value: 'Ton', label: 'Ton', checked: false },

        ],
    },
]


const Filter = ({ products }) => {

    const [mobileFiltersOpen, setMobileFiltersOpen] = useReducer((mobileFiltersOpen) => !mobileFiltersOpen, false)
    const [selectedCategory, setSelectedCategory] = useState([]);


    const filterProducts = () => {
        let filteredProducts = products;

        if (selectedCategory.length > 0 && !selectedCategory.includes('All')) {

            filteredProducts = filteredProducts.filter((product) => {
                const starterArray = "";
                const combinedArray = starterArray.concat(product.useCase, product.integration, product.pricing, product.compatibility, product.productType);
                return selectedCategory.every((cat) => combinedArray.includes(cat))

            }

            );
        }

        return filteredProducts;
    }


    const toggleCategorySelection = (category) => {
        if (category === 'All') {

            setSelectedCategory([]);
        } else {

            const updatedCategories = selectedCategory.includes(category)
                ? selectedCategory.filter((c) => c !== category)
                : [...selectedCategory, category];


            setSelectedCategory(updatedCategories);
        }
    };


    return (

        <Container>

            <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto  py-4 pb-12 shadow-md bg-white dark:bg-[#222222]">
                                <div className="flex items-center justify-between px-4">
                                    <h2 className="text-lg font-medium text-gray-900 dark:text-[#f0f0f0]">Filters</h2>
                                    <button
                                        type="button"
                                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md  p-2 text-gray-400"
                                        onClick={setMobileFiltersOpen}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>

                                {/* Filters */}
                                <form className="mt-4 border-t border-gray-200 dark:border-[#ffffff1a] ">
                                    <div className='m-4'>
                                        <label className="text-sm text-gray-600 dark:text-gray-300">
                                            <input
                                                type="checkbox"
                                                checked={selectedCategory.length === 0 || selectedCategory.includes('All')}
                                                onChange={() => toggleCategorySelection('All')}
                                                className="mr-3 h-4 w-4 rounded border-gray-200 dark:border-[#ffffff1a] text-indigo-600 focus:ring-indigo-500"

                                            />
                                            All
                                        </label>
                                        <label className="text-sm text-[#999] py-2 block">
                                            <input
                                                type="checkbox"
                                                checked={selectedCategory.includes('Components')}
                                                onChange={() => toggleCategorySelection('Components')}
                                                className="mr-3 h-4 w-4 rounded border-gray-200 dark:border-[#ffffff1a] text-indigo-600 focus:ring-indigo-500"

                                            />
                                            Components
                                        </label>
                                        <label className="text-sm text-[#999] py-2 block">
                                            <input
                                                type="checkbox"
                                                checked={selectedCategory.includes('Templates')}
                                                onChange={() => toggleCategorySelection('Templates')}
                                                className="mr-3 h-4 w-4 rounded border-gray-200 dark:border-[#ffffff1a] text-indigo-600 focus:ring-indigo-500"

                                            />
                                            Full Templates
                                        </label>
                                    </div>

                                    {filters.map((section) => (
                                        <Disclosure as="div" key={section.id} className="border-t border-gray-200 dark:border-[#ffffff1a] px-4 py-6">
                                            {({ open }) => (
                                                <>
                                                    <h3 className="-mx-2 -my-3 flow-root">
                                                        <Disclosure.Button className="flex w-full items-center justify-between  px-2 py-3 text-gray-400 hover:text-[#999] ">
                                                            <span className=" text-gray-900 dark:text-[#f0f0f0]">{section.name}</span>
                                                            <span className="ml-6 flex items-center">
                                                                {open ? (
                                                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                                                ) : (
                                                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                                                )}
                                                            </span>
                                                        </Disclosure.Button>
                                                    </h3>
                                                    <Disclosure.Panel className="pt-6">
                                                        <div className="space-y-6">
                                                            {section.options.map((option, optionIdx) => (
                                                                <div key={option.value} className="flex items-center">
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={selectedCategory.includes(option.value)}
                                                                        onChange={() => toggleCategorySelection(option.value)}
                                                                        className="mr-3 h-4 w-4 rounded border-gray-200 dark:border-[#ffffff1a] text-indigo-600 focus:ring-indigo-500"
                                                                    />
                                                                    <label
                                                                        htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                                        className="ml-3 min-w-0 flex-1 font-base text-sm "
                                                                    >
                                                                        {option.label}
                                                                    </label>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    ))}
                                </form>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
            <div className="flex justify-end align-middle  lg:hidden">
                <h3>Filter:</h3>
                <button
                    type="button"
                    className="ml-4 text-gray-400 dark:text-[#f0f0f0] hover:text-[#999]"
                    onClick={setMobileFiltersOpen}
                >
                    <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                </button>
            </div>



            <section className="flex md:space-x-8 mt-6 justify-start">
                {/* Filters */}
                <form className="hidden lg:block flex-1 min-w-[250px] max-w-sm">
                    <h3 className='text-base leading-5 mb-5'>Filter Templates</h3>
                    <label className="text-sm text-[#999] py-2 block">
                        <input
                            type="checkbox"
                            checked={selectedCategory.length === 0 || selectedCategory.includes('All')}
                            onChange={() => toggleCategorySelection('All')}
                            className="mr-3 h-4 w-4 rounded border-gray-200 dark:border-[#ffffff1a] text-indigo-600 focus:ring-indigo-500"

                        />
                        All
                    </label>
                    <label className="text-sm text-[#999] py-2 block">
                        <input
                            type="checkbox"
                            checked={selectedCategory.includes('Components')}
                            onChange={() => toggleCategorySelection('Components')}
                            className="mr-3 h-4 w-4 rounded border-gray-200 dark:border-[#ffffff1a] text-indigo-600 focus:ring-indigo-500"

                        />
                        Components
                    </label>
                    <label className="text-sm text-[#999] py-2 block">
                        <input
                            type="checkbox"
                            checked={selectedCategory.includes('Templates')}
                            onChange={() => toggleCategorySelection('Templates')}
                            className="mr-3 h-4 w-4 rounded border-gray-200 dark:border-[#ffffff1a] text-indigo-600 focus:ring-indigo-500"

                        />
                        Full Templates
                    </label>
                    {filters.map((section) => (
                        <Disclosure as="div" key={section.id} className="border-b border-gray-200 dark:border-[#ffffff1a] py-6" defaultOpen={section.id == "UseCase"}>
                            {({ open }) => (
                                <>
                                    <h3 className="-my-3 flow-root">
                                        <Disclosure.Button className="flex w-full items-center justify-between py-3 text-sm text-gray-400 hover:text-[#999]">
                                            <span className="font-medium text-gray-900 dark:text-gray-300">{section.name}</span>
                                            <span className="ml-6 flex items-center">
                                                {open ? (
                                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                                ) : (
                                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                                )}
                                            </span>
                                        </Disclosure.Button>
                                    </h3>
                                    <Disclosure.Panel className="pt-6">
                                        <div className="space-y-4">
                                            {section.options.map((option, optionIdx) => (
                                                <div key={option.value} className="flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedCategory.includes(option.value)}
                                                        onChange={() => toggleCategorySelection(option.value)}
                                                        className="mr-3 h-4 w-4 rounded border-gray-200 dark:border-[#ffffff1a] text-indigo-600 focus:ring-indigo-500"
                                                    />
                                                    <label
                                                        htmlFor={`filter-${section.id}-${optionIdx}`}
                                                        className="ml-3 text-sm text-gray-600 dark:text-gray-300"
                                                    >
                                                        {option.label}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    ))}
                </form>

                {/* Product grid */}
                <div className="w-full h-full">
                    {filterProducts().length === 0 ? (
                        <p className="text-center">No templates match the selected criteria. Please refine your filter

                        </p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full px-8 justify-items-center sm:justify-items-stretch" >
                            {filterProducts().map((template, index) => (
                                <CardContent key={index} propu={template} />
                            ))
                            }
                        </div>
                    )}
                </div>
            </section >
        </Container>

    )
}

export default Filter