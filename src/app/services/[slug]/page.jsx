import layoutA from '@/data/services/layoutA';
import layoutB from '@/data/services/layoutB';
import LayoutAPage from '@/components/services/layoutA/page';
import LayoutBPage from '@/components/services/layoutB/page';

// Convert slug to camelCase
const toCamelCase = (slug) =>
  slug.replace(/-([a-z])/g, (_, char) => char.toUpperCase());

export default async function ServicePage({ params }) {
  const slug = (await params)?.slug;
  const camelSlug = toCamelCase(slug);

  const dataA = layoutA[camelSlug];
  const dataB = layoutB[camelSlug];

  if (dataA) return <LayoutAPage data={dataA} />;
  if (dataB) return <LayoutBPage data={dataB} />;

  return (
    <div className="text-center py-20">
      <h1 className="text-2xl font-bold text-red-600">404 - Service Not Found</h1>
      <p className="mt-4">We couldn't find the requested service.</p>
    </div>
  );
}
