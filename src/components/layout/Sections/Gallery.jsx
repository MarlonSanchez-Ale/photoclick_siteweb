import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";

export default function Gallery() {

  const images = [
    {
      original: "gallery1.jpg",
      thumbnail: "gallery1.jpg",
      loading: "lazy"
    },
    {
      original: "gallery2.jpg",
      thumbnail: "gallery2.jpg",
      loading: "lazy"
    },
    {
      original: "gallery3.jpg",
      thumbnail: "gallery3.jpg",
      loading: "lazy"
    },
    {
      original: "gallery4.jpg",
      thumbnail: "gallery4.jpg",
      loading: "lazy"
    },
  ];

  return (
    <section id="gallery" className="min-h-[90vh] grid place-items-center p-5">
      <div className="flex flex-col items-center text-center p-5 my-5 gap-5">
        <h1 className="title_dark">
          Our Gallery
        </h1>
        <p className="subtitle_dark">
          We love new challenges, and our work is a beautiful experience
        </p>
      </div>

      <div className="grid place-items-center gap-5 my-10">
        <ImageGallery items={images} lazyLoad={true} autoPlay={true} />
        <p className="subtitle_dark text-center">
          We love new challenges, and our work is a beautiful experience
        </p>
      </div>
    </section>
  )
}
