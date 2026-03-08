import { useNavigate } from "react-router-dom";
import { useState } from "react";

const venues = [
  {
    id: 1,
    name: "Grand Ballroom",
    district: "Colombo",
    capacity: 300,
    type: "Indoor",
    facilities: ["AC", "Parking", "Stage"],
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
  },
  {
    id: 2,
    name: "Sky View Hall",
    district: "Kandy",
    capacity: 200,
    type: "Indoor",
    facilities: ["AC", "Parking"],
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3",
  },
  {
    id: 3,
    name: "Garden Villa",
    district: "Galle",
    capacity: 150,
    type: "Outdoor",
    facilities: ["Garden", "Parking"],
    image:
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce",
  },
  {
    id: 4,
    name: "Crystal Hall",
    district: "Gampaha",
    capacity: 250,
    type: "Indoor",
    facilities: ["AC", "Parking", "Kitchen"],
    image:
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329",
  },
];

export default function Venues() {
  const navigate = useNavigate();
  const [selectedVenue, setSelectedVenue] = useState(null);

  return (
    <div className="space-y-8">

      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Browse Venues
        </h1>
        <p className="text-sm text-gray-500">
          Find the perfect hall for your event
        </p>
      </div>

      {/* Venue Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {venues.map((venue) => (
          <div
            key={venue.id}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition"
          >

            {/* Image */}
            <img
              src={venue.image}
              alt={venue.name}
              className="h-40 w-full object-cover"
            />

            {/* Content */}
            <div className="p-4 space-y-2">

              <h3 className="font-semibold text-gray-900">
                {venue.name}
              </h3>

              <p className="text-sm text-gray-500">
                {venue.district}
              </p>

              <p className="text-sm text-gray-600">
                Capacity: {venue.capacity}
              </p>

              <p className="text-xs text-gray-500">
                {venue.type} • {venue.facilities.join(" • ")}
              </p>

              {/* View Details */}
              <button
                onClick={() => setSelectedVenue(venue)}
                className="mt-3 w-full bg-indigo-600 text-white py-2 rounded-xl text-sm hover:bg-indigo-700"
              >
                View Details
              </button>

            </div>
          </div>
        ))}

      </div>

      {/* Venue Details Modal */}
      {selectedVenue && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white rounded-2xl w-[600px] p-6 shadow-lg">

            <img
              src={selectedVenue.image}
              alt={selectedVenue.name}
              className="w-full h-56 object-cover rounded-xl mb-4"
            />

            <h2 className="text-xl font-bold mb-1">
              {selectedVenue.name}
            </h2>

            <p className="text-sm text-gray-500 mb-2">
              {selectedVenue.district}
            </p>

            <p className="text-sm text-gray-600">
              Capacity: {selectedVenue.capacity}
            </p>

            <p className="text-sm text-gray-600">
              {selectedVenue.type} • {selectedVenue.facilities.join(" • ")}
            </p>

            <div className="flex gap-3 mt-6">

              <button
                onClick={() => setSelectedVenue(null)}
                className="flex-1 border border-gray-200 py-2 rounded-xl hover:bg-gray-50"
              >
                Close
              </button>

              <button
                onClick={() => navigate("/customer/my-bookings")}
                className="flex-1 bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700"
              >
                Book This Venue
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}