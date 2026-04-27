import React from "react";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-10 min-h-[80vh]">
      <h1 className="text-3xl font-bold mb-6">About Dragon News</h1>
      <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
        <p className="text-gray-600 leading-relaxed">
          Dragon News is a modern news portal dedicated to bringing you the
          latest and most accurate news from Bangladesh and around the world.
          Our mission is to keep you informed with real-time updates across
          politics, sports, entertainment, technology, and more.
        </p>
        <p className="text-gray-600 leading-relaxed">
          We believe in honest, unbiased journalism. Our team of dedicated
          reporters and editors work around the clock to ensure every story is
          verified, relevant, and delivered to you in a timely manner.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
          <div className="bg-slate-100 rounded-lg p-4 text-center">
            <h3 className="text-2xl font-bold text-purple-500">10K+</h3>
            <p className="text-gray-500 text-sm">Daily Readers</p>
          </div>
          <div className="bg-slate-100 rounded-lg p-4 text-center">
            <h3 className="text-2xl font-bold text-purple-500">500+</h3>
            <p className="text-gray-500 text-sm">News Published</p>
          </div>
          <div className="bg-slate-100 rounded-lg p-4 text-center">
            <h3 className="text-2xl font-bold text-purple-500">50+</h3>
            <p className="text-gray-500 text-sm">Expert Journalists</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
