import { API_CONFIG } from "../config/config";

export type Photo = {
  id: number;
  url: string;
  src: {
    medium: string;
  };
  photographer: string;
  photographer_url: string;
  avg_color: string;
};

export async function fetchPhotos(): Promise<Photo[]> {
  const res = await fetch(
    `${API_CONFIG.BASE_URL}/search?query=nature&per_page=10`,
    {
      headers: {
        Authorization: API_CONFIG.AUTH_TOKEN,
      },
    }
  );

  if (!res.ok) throw new Error("Erro ao buscar dados");

  const data = await res.json();
  return data.photos;
}
