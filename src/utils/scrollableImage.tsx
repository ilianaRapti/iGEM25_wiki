import "./scrollableImage.css";

export  function ScrollableImage({ src }: { src: string }) {
  return (
    <div className="image-container">
      <img src={src} alt="Scrollable" className="scroll-image" />
    </div>
  );
}
