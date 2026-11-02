import ProductsCatalog from "@/components/products/ProductsCatalog";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ div?: string; cat?: string }>;
}) {
  const params = await searchParams;
  const requestedDivision = params.div || params.cat || "all";
  const initialDivision = ["General", "Hormones", "Nutraceuticals", "Softgel"].includes(requestedDivision)
    ? requestedDivision
    : "all";

  return <ProductsCatalog key={initialDivision} initialDivision={initialDivision} />;
}
