export const gallery25Images: string[] = Array.from({ length: 94 }, (_, i) =>
    `/25/gallery/img${String(i + 1).padStart(3, "0")}.webp`
);

export default gallery25Images;