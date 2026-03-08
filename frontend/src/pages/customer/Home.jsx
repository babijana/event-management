import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const eventTypes = [
    {
      title: "Weddings",
      items: ["Wedding Ceremony", "Reception Party", "Engagement"],
    },
    {
      title: "Corporate Events",
      items: ["Conferences", "Product Launch", "Workshops"],
    },
    {
      title: "Social Events",
      items: ["Birthdays", "Anniversaries", "Baby Showers", "Graduation"],
    },
  ];

  const venues = [
    { name: "Grand Ballroom", district: "Colombo" },
    { name: "Sky View Hall", district: "Kandy" },
    { name: "Garden Villa", district: "Galle" },
    { name: "Crystal Hall", district: "Gampaha" },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    "https://images.unsplash.com/photo-1527529482837-4698179dc6ce",
    "https://images.unsplash.com/photo-1505236858219-8359eb29e329",
    "https://images.unsplash.com/photo-1515169067868-5387ec356754",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  ];
const galleryPreview = gallery.slice(0, 6);
  return (
    <div className="space-y-14">

      {/* HERO */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl text-white p-10 text-center shadow-sm">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Plan Your Perfect Event with EventPro
        </h1>

        <p className="text-indigo-100 max-w-xl mx-auto mb-8">
          Book halls, manage events, and create unforgettable experiences.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => navigate("/customer/venues")}
            className="bg-white text-indigo-600 px-6 py-2 rounded-xl font-semibold hover:bg-indigo-50"
          >
            Browse Venues
          </button>

          <button
            onClick={() => navigate("/customer/Dashboard")}
            className="border border-white px-6 py-2 rounded-xl hover:bg-white/10"
          >
            Create Booking
          </button>
        </div>
      </section>

      {/* EVENT TYPES */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Event Types
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {eventTypes.map((type) => (
            <div
              key={type.title}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg mb-3">
                {type.title}
              </h3>

              <ul className="text-sm text-gray-600 space-y-1">
                {type.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* POPULAR VENUES */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Popular Venues
          </h2>

          <button
            onClick={() => navigate("/customer/venues")}
            className="text-indigo-600 text-sm font-medium"
          >
            View All →
          </button>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {venues.map((venue) => (
            <div
              key={venue.name}
              className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <div className="h-32 bg-gray-200"></div>

              <div className="p-4">
                <h3 className="font-semibold">
                  {venue.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {venue.district}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
    <section>
    <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
        Event Gallery
        </h2>

        <button
        onClick={() => navigate("/customer/gallery")}
        className="text-indigo-600 text-sm font-medium"
        >
        View More →
        </button>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryPreview.map((img, index) => (
        <img
            key={index}
            src={img}
            alt="event"
            className="rounded-xl object-cover h-48 w-full hover:scale-105 transition"
        />
        ))}
    </div>
    </section>

      {/* CTA */}
      <section className="bg-indigo-600 rounded-2xl text-white text-center p-10">
        <h2 className="text-2xl font-bold mb-3">
          Ready to Plan Your Event?
        </h2>

        <p className="text-indigo-100 mb-6">
          Start your booking today and let us make your event unforgettable.
        </p>

        <button
          onClick={() => navigate("/customer/Dashboard")}
          className="bg-white text-indigo-600 px-6 py-2 rounded-xl font-semibold"
        >
          Start Booking
        </button>
      </section>

    </div>
  );
}

export default Home;