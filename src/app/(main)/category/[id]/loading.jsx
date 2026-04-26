import React from 'react';

const CategoriesLoading = () => {
    return (
        <div className="space-y-3 p-4">
            {[...Array(6)].map((_, index) => (
                <div
                    key={index}
                    className="h-10 bg-gray-300 rounded-md animate-pulse"
                ></div>
            ))}
        </div>
    );
};

export default CategoriesLoading;