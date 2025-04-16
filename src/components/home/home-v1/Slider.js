"use client";
import { useState } from "react";
import styles from "../../../app/Slider.module.css"; // Adjust path as needed

const initialItems = [
  {
    name: "Switzerland",
    description:
      "Renowned for its breathtaking Alpine scenery and precision in craftsmanship",
    image:
      "https://images.unsplash.com/photo-1697659902121-1ec9e3728dce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Finland",
    description: "Known for its saunas, lakes, and a deep connection to nature",
    image:
      "https://images.unsplash.com/photo-1716943958117-d69db5715ca1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Iceland",
    description:
      "Famous for its stunning geothermal landscapes, waterfalls, and glaciers",
    image:
      "https://images.unsplash.com/photo-1624715479776-c03fff721106?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Australia",
    description:
      "Distinguished by its diverse ecosystems, ranging from beaches to bushland",
    image:
      "https://plus.unsplash.com/premium_photo-1741756092543-76fef837e30b?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Netherland",
    description:
      "Characterized by its iconic canals, tulip fields, and windmills",
    image:
      "https://images.unsplash.com/photo-1618179452798-125f6706ba56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Ireland",
    description:
      "Known for its lush green landscapes and rich cultural heritage",
    image:
      "https://images.unsplash.com/photo-1627136711221-62704f4a2cd7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Slider = () => {
  const [items, setItems] = useState(initialItems);

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
            <div className={styles.content}>
              <div className={styles.name}>{item.name}</div>
              <div className={styles.description}>{item.description}</div>
              <button>See More</button>
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
