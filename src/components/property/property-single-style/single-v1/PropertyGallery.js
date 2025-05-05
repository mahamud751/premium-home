"use client";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Image from "next/image";

const getImagesArray = (images) => {
  if (Array.isArray(images)) {
    return images;
  }
  try {
    const parsed = JSON.parse(images);
    return Array.isArray(parsed) ? parsed : [images];
  } catch {
    return [images];
  }
};

const PropertyGallery = ({ product }) => {
  const images = getImagesArray(product?.images || []);

  const fallbackImage = "/path/to/fallback-image.jpg";

  return (
    <Gallery>
      <div className="col-sm-6">
        <div className="sp-img-content mb15-md">
          <div className="popup-img preview-img-1 sp-img">
            <Item
              original={images[0] || fallbackImage}
              thumbnail={images[0] || fallbackImage}
              width={610}
              height={510}
            >
              {({ ref, open }) => (
                <Image
                  src={images[0] || fallbackImage}
                  width={391}
                  height={358}
                  ref={ref}
                  onClick={open}
                  alt="Main property image"
                  role="button"
                  className="w-100 h-100 cover"
                />
              )}
            </Item>
          </div>
        </div>
      </div>
      {/* End .col-6 */}

      <div className="col-sm-6">
        <div className="row">
          {images.slice(1).map((image, index) => (
            <div className="col-6 ps-sm-0" key={index}>
              <div className="sp-img-content">
                <div
                  className={`popup-img preview-img-${index + 2} sp-img mb10`}
                >
                  <Item
                    original={image}
                    thumbnail={image}
                    width={270}
                    height={250}
                  >
                    {({ ref, open }) => (
                      <Image
                        width={270}
                        height={250}
                        className="w-[200px] h-[200px]"
                        ref={ref}
                        onClick={open}
                        role="button"
                        src={image}
                        alt={`Property image ${index + 2}`}
                      />
                    )}
                  </Item>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Gallery>
  );
};

export default PropertyGallery;
