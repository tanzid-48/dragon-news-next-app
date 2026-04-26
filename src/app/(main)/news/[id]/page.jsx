import { getNewsDetailsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';

const DetailsPage = async ({ params }) => {
    const { id } = await params;
    const news = await getNewsDetailsById(id);

    return (
        <div className="max-w-4xl mx-auto px-4 py-10">

            {/* Header */}
            <h1 className="text-3xl md:text-4xl font-bold mb-5 leading-snug text-gray-900">
                {news.title}
            </h1>

            {/* Author + Actions */}
            <div className="flex justify-between items-center bg-gray-100 p-4 rounded-xl mb-6">
                <div className="flex items-center gap-3">
                    <Image
                        src={news.author?.img}
                        alt="author"
                        width={48}
                        height={48}
                        className="rounded-full ring-2 ring-white shadow"
                    />
                    <div>
                        <h2 className="font-semibold text-gray-800 text-sm">{news.author?.name}</h2>
                        <p className="text-xs text-gray-400 mt-0.5">
                            {news.author?.published_date}
                        </p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <button className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-500 hover:text-blue-500 hover:border-blue-200 transition-colors">
                        <CiShare2 className="text-lg" />
                    </button>
                    <button className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-500 hover:text-red-500 hover:border-red-200 transition-colors">
                        <CiBookmark className="text-lg" />
                    </button>
                </div>
            </div>

            {/* Image */}
            <div className="mb-6 rounded-xl overflow-hidden">
                <Image
                    src={news.image_url}
                    alt={news.title}
                    width={800}
                    height={400}
                    className="w-full h-95 object-cover"
                />
            </div>

            {/* Stats */}
            <div className="flex items-center justify-between mb-6 py-3 border-y border-gray-100">
                <div className="flex items-center gap-5 text-sm text-gray-600">
                    <span className="flex items-center gap-1.5">
                        <IoIosStar className="text-yellow-400 text-base" />
                        <span className="font-medium text-gray-800">{news.rating.number}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                        <FaEye className="text-gray-400" />
                        <span className="font-medium text-gray-800">{news.total_view}</span>
                        <span className="text-gray-400">views</span>
                    </span>
                </div>

                <span className="text-xs font-medium bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                    {news.rating.badge}
                </span>
            </div>

            {/* Details */}
            <p className="text-base leading-relaxed text-gray-600 mb-8">
                {news.details}
            </p>

            {/* Back Button */}
            <Link href={`/category/${news.category_id}`}>
                <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 active:scale-95 transition-all text-white text-sm font-medium px-5 py-2.5 rounded-full">
                    All News In This Category
                    <BsArrowRight />
                </button>
            </Link>

        </div>
    );
};

export default DetailsPage;