import { useNavigate } from "react-router-dom";

const gallery = [
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
  "https://images.unsplash.com/photo-1527529482837-4698179dc6ce",
  "https://images.unsplash.com/photo-1505236858219-8359eb29e329",
  "https://images.unsplash.com/photo-1515169067868-5387ec356754",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1472653431158-6364773b2a56",
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
  "https://images.unsplash.com/photo-1504805572947-34fad45aed93",
];

function Gallery() {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">

      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">
          Event Gallery
        </h1>

        <button
          onClick={() => navigate(-1)}
          className="text-sm text-indigo-600"
        >
          ← Back
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {gallery.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="event"
            className="rounded-xl object-cover h-48 w-full hover:scale-105 transition"
          />
        ))}
      </div>

    </div>
  );
}

export default Gallery;