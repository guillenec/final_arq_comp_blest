import { useUI } from "../store/ui";

export default function Lightbox() {
  const { lightboxImage, setLightbox } = useUI();

  if (!lightboxImage) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/70 grid place-items-center p-6" onClick={() => setLightbox(null)}>
      <img src={lightboxImage} alt="" className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-lg" />
    </div>
  );
}
