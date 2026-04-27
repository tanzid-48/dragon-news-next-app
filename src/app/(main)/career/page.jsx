// app/(main)/career/page.jsx
const positions = [
  {
    id: 1,
    title: "Senior Journalist",
    type: "Full Time",
    location: "Dhaka, Bangladesh",
    description:
      "We are looking for an experienced journalist to cover national and international news.",
  },
  {
    id: 2,
    title: "Frontend Developer",
    type: "Full Time",
    location: "Remote",
    description:
      "Join our tech team to build and maintain our news platform using Next.js and Tailwind CSS.",
  },
  {
    id: 3,
    title: "Content Writer",
    type: "Part Time",
    location: "Remote",
    description:
      "Create engaging and well-researched articles across various news categories.",
  },
  {
    id: 4,
    title: "Video Editor",
    type: "Full Time",
    location: "Dhaka, Bangladesh",
    description:
      "Edit and produce high-quality video content for our digital platforms.",
  },
];

const CareerPage = () => {
  return (
    <div className="container mx-auto px-4 py-10 min-h-[80vh]">
      <h1 className="text-3xl font-bold mb-2">Career at Dragon News</h1>
      <p className="text-gray-500 mb-8">
        Join our team and help shape the future of digital journalism.
      </p>

      <div className="space-y-4">
        {positions.map((position) => (
          <div
            key={position.id}
            className="bg-white rounded-xl p-6 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-lg font-semibold">{position.title}</h2>
                <span className="text-xs bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full">
                  {position.type}
                </span>
              </div>
              <p className="text-sm text-gray-400 mb-2">
                📍 {position.location}
              </p>
              <p className="text-gray-500 text-sm">{position.description}</p>
            </div>
            <button className="btn bg-purple-500 text-white hover:bg-purple-600 shrink-0">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerPage;
