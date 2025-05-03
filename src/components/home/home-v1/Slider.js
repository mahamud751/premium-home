"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../../../app/Slider.module.css";

const Slider = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBannerData = async () => {
      try {
        const response = await axios.get(
          "https://premium.samironbarai.xyz/v1/banners"
        );
        setItems(response.data.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch banner data");
        setLoading(false);
      }
    };

    fetchBannerData();
  }, []);

  if (loading) {
    return (
      <section className="our-faq pt-20 py-12 md:px-4">
        <div className="container mx-auto max-w-7xl">
          <p className="text-center ">Loading Banners...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="our-faq pt-20 py-12 md:px-4">
        <div className="container mx-auto max-w-7xl">
          <p className="text-center text-red-600">{error}</p>
        </div>
      </section>
    );
  }

  const handleNext = () => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      newItems.push(newItems.shift());
      return newItems;
    });
  };

  const handlePrev = () => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      newItems.unshift(newItems.pop());
      return newItems;
    });
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slide}>
        {items.map((item, index) => (
          <div
            key={item.id}
            className={styles.item}
            style={{
              background: `url('${item.image[0]}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className={styles.content}>
              <div className="mb-4">
                <div className="text-4xl font-semibold text-white">
                  {item.title}
                </div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2"
                >
                  <button className="px-4 py-2  bg-white/40 text-black rounded-lg  hover:bg-white/60 transition-colors duration-300 shadow-md">
                    See More
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.button}>
        <button onClick={handlePrev} className={styles.prev}>
          <i className="fa-solid fa-arrow-left bg-white hover:text-black px-2 rounded"></i>
        </button>{" "}
        &nbsp;
        <button onClick={handleNext} className={styles.next}>
          <i className="fa-solid fa-arrow-right bg-white px-2 rounded hover:text-black"></i>
        </button>
      </div>
    </div>
  );
};

export default Slider;
