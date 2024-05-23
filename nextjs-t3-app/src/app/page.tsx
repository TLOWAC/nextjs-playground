import { db } from "~/server/db";
import { images } from "~/server/db/schema";
import { SignedOut, SignedIn } from "@clerk/nextjs";

export const dynamic = "force-dynamic";

export async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { asc }) => asc(model.id),
  });

  return (
    <div className="container flex flex-wrap gap-12">
      {images.map((image) => (
        <div key={image.id} className="w-48 overflow-hidden rounded shadow-lg">
          <img src={image.url} alt={`Image ${image.id}`} />
          <p>{image.name}</p>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="flex min-h-screen flex-col text-white">
      <SignedOut>로그인이 필요 합니다.</SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
