import React, { useState, useEffect } from 'react';

interface TagCount {
  tag: string;
  count: number;
}

interface BlogSideBarProps {
  onSearch: (query: string) => void;
  searchQuery: string;
  onTagFilter: (tag: string) => void;
  activeTag: string;
}

const BlogSideBar = ({ onSearch, searchQuery, onTagFilter, activeTag }: BlogSideBarProps) => {
    const [tags, setTags] = useState<TagCount[]>([]);
    const [loading, setLoading] = useState(true);
    const [inputValue, setInputValue] = useState(searchQuery);

    useEffect(() => {
        const fetchTags = async () => {
            try {
                const response = await fetch('/api/blogs?published=true');
                const data = await response.json();

                if (data.success) {
                    // Count all tags
                    const tagCounts: { [key: string]: number } = {};

                    data.data.forEach((blog: { tags: string[] }) => {
                        blog.tags.forEach((tag: string) => {
                            tagCounts[tag] = (tagCounts[tag] || 0) + 1;
                        });
                    });

                    // Convert to array and sort by count
                    const sortedTags = Object.entries(tagCounts)
                        .map(([tag, count]) => ({ tag, count }))
                        .sort((a, b) => b.count - a.count);

                    setTags(sortedTags);
                }
            } catch (error) {
                console.error('Error fetching tags:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTags();
    }, []);

    // Update input value when searchQuery prop changes
    useEffect(() => {
        setInputValue(searchQuery);
    }, [searchQuery]);

    const handleSearch = () => {
        onSearch(inputValue);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const handleClear = () => {
        setInputValue('');
        onSearch('');
    };

    return (
        <aside className="space-y-8 pl-6 border-l border-slate-100">
            {/* Search */}
            <div className="flex flex-col gap-4 justify-center items-center">
                <div className="relative p-2 border border-gray-200 rounded-lg w-full max-w-lg">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="rounded-md p-2 w-full focus:outline-2 focus:outline-[#098FD7]"
                        placeholder="Search blogs..."
                    />

                    {inputValue.trim() && inputValue !== searchQuery ? (
                        <button
                            type="button"
                            onClick={handleSearch}
                            className="absolute right-4 top-4 text-[#098FD7] hover:text-[#027bbd]"
                            title="Search"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                            </svg>
                        </button>
                    ) : searchQuery ? (
                        <button
                            type="button"
                            onClick={handleClear}
                            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
                            title="Clear search"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={handleSearch}
                            className="absolute right-4 top-4 text-[#098FD7] hover:text-[#027bbd]"
                            title="Search"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                            </svg>
                        </button>
                    )}
                </div>
            </div>

            {/* Dynamic Tags */}
            <div className="rounded-lg">
                <h4 className="font-semibold text-lg mb-3">Tags</h4>
                {loading ? (
                    <div className="flex items-center space-x-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#098FD7]"></div>
                        <span className="text-gray-500 text-sm">Loading tags...</span>
                    </div>
                ) : (
                    <nav className="flex flex-wrap gap-2">
                        {tags.map((tagItem) => {
                            const isActive = activeTag === tagItem.tag;
                            return (
                                <button
                                    key={tagItem.tag}
                                    onClick={() => onTagFilter(isActive ? '' : tagItem.tag)}
                                    className={`px-3 py-1 text-sm border border-[#098FD7] rounded-lg transition duration-300 flex items-center space-x-1 ${
                                        isActive
                                            ? 'bg-[#098FD7] text-white'
                                            : 'text-gray-600 hover:bg-[#098FD7] hover:text-white'
                                    }`}
                                >
                                    <span>{tagItem.tag}</span>
                                    <span className="text-xs opacity-70">({tagItem.count})</span>
                                </button>
                            );
                        })}
                        {tags.length === 0 && (
                            <p className="text-gray-500 text-sm">No tags found</p>
                        )}
                    </nav>
                )}
            </div>
        </aside>
    );
};

export default BlogSideBar;