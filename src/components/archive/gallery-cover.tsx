export function GalleryCover({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="gallery-cover">
      <img src={imageUrl} alt="" loading="lazy" />
      <span>Illustrative image · not verified GSP archive media</span>
    </div>
  );
}
