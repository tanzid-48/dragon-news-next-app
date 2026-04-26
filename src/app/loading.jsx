import React from 'react';

const LoadingPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-4">
            <span className="loading loading-spinner text-success w-12"></span>
            <h1 className="text-xl font-semibold">Loading...</h1>
        </div>
    );
};

export default LoadingPage;