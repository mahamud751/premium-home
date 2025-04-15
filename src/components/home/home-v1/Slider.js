"use client";
import { useState } from "react";
import styles from "../../../app/Slider.module.css"; // Adjust path as needed

const initialItems = [
  {
    name: "Switzerland",
    description:
      "Renowned for its breathtaking Alpine scenery and precision in craftsmanship",
    image: "https://i.postimg.cc/g0W4qN2y/Switzerland.jpg",
  },
  {
    name: "Finland",
    description: "Known for its saunas, lakes, and a deep connection to nature",
    image: "https://i.postimg.cc/DZfgR0s8/Finland.jpg",
  },
  {
    name: "Iceland",
    description:
      "Famous for its stunning geothermal landscapes, waterfalls, and glaciers",
    image: "https://i.postimg.cc/kX2jn2HS/Iceland.jpg",
  },
  {
    name: "Australia",
    description:
      "Distinguished by its diverse ecosystems, ranging from beaches to bushland",
    image: "https://i.postimg.cc/05WWRYVx/Australia.jpg",
  },
  {
    name: "Netherland",
    description:
      "Characterized by its iconic canals, tulip fields, and windmills",
    image: "https://i.postimg.cc/dtg5DqMx/Netherland.jpg",
  },
  {
    name: "Ireland",
    description:
      "Known for its lush green landscapes and rich cultural heritage",
    image: "https://i.postimg.cc/sDGJktB9/Ireland.jpg",
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
