"use client";

import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-video.css";
import "lightgallery/css/lightgallery.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgVideo from "lightgallery/plugins/video";
import LightGallery from "lightgallery/react";
import { useCallback, useRef } from "react";

const PopularCollection = () => {
  const lightGalleryRef = useRef(null);

  const collections = [
    {
      category: "Luxury Collection",
      location: "Dhaka",
      thumbnail: "/images/about/about-3.jpg",
      videoUrl: "https://youtu.be/TDGgyVwF9qc?si=RI6ZFr9HEhnF3Nst",
    },
    {
      category: "Classic Collection",
      location: "Rajshahi",
      thumbnail: "/images/about/about-3.jpg",
      videoUrl: "https://youtu.be/TDGgyVwF9qc?si=RI6ZFr9HEhnF3Nst",
    },
    {
      category: "Wellness Communities",
      location: "Chapainawabganj",
      thumbnail: "/images/about/about-3.jpg",
      videoUrl: "https://youtu.be/TDGgyVwF9qc?si=RI6ZFr9HEhnF3Nst",
    },
    {
      category: "Commercial Collection",
      location: "Bougra",
      thumbnail: "/images/about/about-3.jpg",
      videoUrl: "https://youtu.be/TDGgyVwF9qc?si=RI6ZFr9HEhnF3Nst",
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
          licenseKey="your-license-key"
          speed={500}
          download={false}
          videojs={true}
          youtubePlayerParams={{
            modestbranding: 1,
            showinfo: 0,
            rel: 0,
          }}
          elementClassNames="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"
        >
          {collections.map((collection, index) => (
            <a
              key={index}
              className="relative group cursor-pointer"
              data-lg-size="1280-720"
              data-video={`{"source": [{"src":"${collection.videoUrl}", "type":"video/mp4"}], "attributes": {"preload": false, "controls": true}}`}
              data-sub-html={`<h4>${collection.category}</h4><p>${collection.location}</p>`}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="text-lg font-semibold uppercase">
                  {collection.category}
                </h3>
                <p className="text-sm border rounded px-3  py-1    uppercase">
                  {collection.location}
                </p>
              </div>
              <div className="relative">
                <img
                  src={collection.thumbnail}
                  alt={collection.category}
                  className="w-full h-48 sm:h-64 object-cover rounded-lg grayscale"
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
