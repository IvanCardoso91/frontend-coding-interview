import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPhotos } from "../services/api";
import { isAuthenticated } from "../auth/auth";
import type { Photo } from "../services/api";
import CardDesign from "../components/CardDesign";
import Logo from "../components/Logo";

export default function PhotosView() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/");
    } else {
      fetchPhotos()
        .then((data) => setPhotos(data))
        .catch(() => alert("Fail to load images."))
        .finally(() => setLoading(false));
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-start gap-4 mb-6">
          <div className="w-12 h-12 p-1 overflow-visible">
            <Logo className="w-full h-full" />
          </div>
          <h2 className="text-xl font-bold text-[color:var(--color-label)] font-helvetica">
            All photos
          </h2>
        </div>

        {loading ? (
          <div className="text-center text-gray-500">Loading...</div>
        ) : (
          <div className="space-y-4">
            {photos.map((photo) => (
              <CardDesign key={photo.id} photo={photo} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
