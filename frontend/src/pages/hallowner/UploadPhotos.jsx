import { useState, useRef } from "react";

const existingPhotos = [
  { id: 1, name: "Main Hall View", url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=300&fit=crop" },
  { id: 2, name: "Stage Setup", url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=300&fit=crop" },
  { id: 3, name: "Dining Area", url: "https://images.unsplash.com/photo-1561047029-3000c68339ca?w=400&h=300&fit=crop" },
  { id: 4, name: "Entrance Lobby", url: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400&h=300&fit=crop" },
];

export default function UploadPhotos() {
  const [photos, setPhotos] = useState(existingPhotos);
  const [dragOver, setDragOver] = useState(false);
  const fileRef = useRef(null);

  const handleFiles = (files) => {
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhotos((prev) => [
          ...prev,
          { id: Date.now() + Math.random(), name: file.name.replace(/\.[^.]+$/, ""), url: e.target.result },
        ]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removePhoto = (id) => setPhotos((prev) => prev.filter((p) => p.id !== id));

  return (
    <div className="space-y-5 max-w-4xl">
      {/* Upload Area */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Upload Hall Photos</h3>

        <div
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => { e.preventDefault(); setDragOver(false); handleFiles(e.dataTransfer.files); }}
          onClick={() => fileRef.current?.click()}
          className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-all ${
            dragOver ? "border-emerald-400 bg-emerald-50" : "border-gray-200 bg-gray-50 hover:bg-gray-100 hover:border-gray-300"
          }`}
        >
          <div className="text-4xl mb-3">📷</div>
          <p className="text-gray-700 font-medium">Drag & drop photos here</p>
          <p className="text-gray-400 text-sm mt-1">or click to browse files</p>
          <p className="text-gray-300 text-xs mt-2">Supports JPG, PNG, WEBP · Max 10MB each</p>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
          />
        </div>

        <div className="mt-4 flex justify-end">
          <button
            onClick={() => fileRef.current?.click()}
            className="bg-emerald-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-emerald-700 transition-colors"
          >
            + Add Photos
          </button>
        </div>
      </div>

      {/* Photo Grid */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900">Photo Gallery</h3>
          <span className="text-sm text-gray-400">{photos.length} photos</span>
        </div>

        {photos.length === 0 ? (
          <div className="text-center py-10 text-gray-400">
            <p className="text-4xl mb-2">🖼️</p>
            <p className="text-sm">No photos uploaded yet</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo) => (
              <div key={photo.id} className="relative group rounded-xl overflow-hidden border border-gray-100 bg-gray-50 aspect-square">
                <img
                  src={photo.url}
                  alt={photo.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/300x300?text=Photo"; }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-end">
                  <div className="p-3 w-full translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                    <p className="text-white text-xs font-medium truncate">{photo.name}</p>
                  </div>
                </div>
                <button
                  onClick={() => removePhoto(photo.id)}
                  className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
