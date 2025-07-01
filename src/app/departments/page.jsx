import Link from 'next/link';
import { layoutMap } from '@/data/departments/layoutMap';

export default function DepartmentsListPage() {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-light text-primary mb-8">All Departments</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(layoutMap).map(([slug, { label }]) => (
          <Link key={slug} href={`/departments/${slug}`}>
            <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-xl text-accent">{label}</h2>
              <p className="text-sm text-gray-600 mt-2">Explore department</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
