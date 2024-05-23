import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { asc }) => asc(model.id),
  });

  return (
    <main className="flex min-h-screen flex-col text-white">
      <div className="container flex flex-wrap gap-12">
        {images.map((image) => (
          <div
            key={image.id}
            className="w-48 overflow-hidden rounded shadow-lg"
          >
            <img src={image.url} alt={`Image ${image.id}`} />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
