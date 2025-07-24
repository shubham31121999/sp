import layout from "@/data/services/layout";
import Link from "next/link";

const allServices = Object.values(layout); // No need for Object.entries

export default function AllServicesPage() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-10 text-center">
        Explore All Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {allServices.map(({ slug, hero }) => (
          <div
            key={slug}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold text-theme-dark mb-2">
                {hero?.title || "Untitled Service"}
              </h2>
              {hero?.subtitle && (
                <p className="text-gray-600 text-sm">{hero.subtitle}</p>
              )}
            </div>

            <div className="mt-4">
              <Link
                href={`/services/${slug}`}
                className="inline-block bg-primary text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-primary-dark transition"
              >
                Learn More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
