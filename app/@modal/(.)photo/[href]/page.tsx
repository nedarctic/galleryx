import PhotoModalFetcher from "./PhotoModalFetcher";

export default function Page({ params }: {params: {href: string}}) {
  console.log("Params:", params); // Check what is passed to the Page
  return <PhotoModalFetcher params={params} />;
}