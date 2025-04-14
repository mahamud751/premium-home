"use client";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-video.css";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgVideo from "lightgallery/plugins/video";
import { useCallback, useRef } from "react";

const PopularCollection = () => {
  const lightGalleryRef = useRef(null);

  const collections = [
    {
      category: "Luxury Collection",
      location: "Dhaka",
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1733760180239-ef05b25dd5ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
      videoUrl: "https://www.youtube.com/watch?v=4jnzf1yj48M",
    },
    {
      category: "Classic Collection",
      location: "Rajshahi",
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1733760125447-a363befe9aab?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      videoUrl: "https://www.youtube.com/watch?v=TDGgyVwF9qc",
    },
    {
      category: "Wellness Communities",
      location: "Chapainawabganj",
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1733760125474-0cf0d3aac257?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      videoUrl: "https://www.youtube.com/watch?v=TDGgyVwF9qc",
    },
    {
      category: "Commercial Collection",
      location: "Bougra",
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1733760125440-e20199e6dc11?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      videoUrl: "https://www.youtube.com/watch?v=TDGgyVwF9qc",
    },
  ];

  const onInit = useCallback((detail) => {
    if (detail) {
      lightGalleryRef.current = detail.instance;
    }
  }, []);

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="main-title2">
          <h2 className="title">Popular Collection</h2>
          <p className="paragraph">Discover your popular collection</p>
        </div>
        <LightGallery
          onInit={onInit}
          plugins={[lgVideo, lgThumbnail]}
          speed={500}
          download={false}
          youtubePlayerParams={{
            modestbranding: 1,
            rel: 0,
          }}
          elementClassNames="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"
        >
          {collections.map((collection, index) => (
            <a
              key={index}
              className="relative group cursor-pointer"
              data-src={collection.videoUrl}
              data-sub-html={`<h4>${collection.category}</h4><p>${collection.location}</p>`}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="text-lg font-semibold uppercase">
                  {collection.category}
                </h3>
                <p className="text-sm border rounded px-3 py-1 uppercase">
                  {collection.location}
                </p>
              </div>
              <div className="relative">
                <img
                  src={collection.thumbnail}
                  alt={collection.category}
                  className="w-full h-48 sm:h-64 object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                  <div className="bg-black bg-opacity-50 rounded-full p-4">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </LightGallery>
      </div>
    </div>
  );
};

export default PopularCollection;
