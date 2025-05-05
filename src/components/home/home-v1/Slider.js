"use client";
import { useEffect, useState } from "react";
import styles from "../../../app/Slider.module.css"; // Adjust path as needed
import UseFetch from "@/hooks/useFetch";

const Slider = () => {
  const { data, loading, error } = UseFetch(`v1/banners`);
  const [items, setItems] = useState([]);

  // Map API data to the expected format
  useEffect(() => {
    if (data && data.data) {
      const mappedItems = data.data.map((banner) => ({
        name: banner.title,
        description: `Explore more about this banner at ${banner.link}`,
        image: banner.image[0], // Use first image from array
      }));
      setItems(mappedItems);
    }
  }, [data]);

  const handleNext = () => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      newItems.push(newItems.shift()); // Move first item to the end
      return newItems;
    });
  };

  const handlePrev = () => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      newItems.unshift(newItems.pop()); // Move last item to the start
      return newItems;
    });
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slide}>
        {items.map((item, index) => (
          <div
            key={item.name}
            className={styles.item}
            style={{
              background: `url('${item.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* <div className={styles.content}>
              <div className={styles.name}>{item.name}</div>
              <div className={styles.description}>{item.description}</div>
              <button>See More</button>
            </div> */}
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
