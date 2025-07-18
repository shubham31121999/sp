'use client';

import { useParams } from 'next/navigation';
import layoutA from '@/data/services/layoutA';
import layoutB from '@/data/services/layoutB';
import LayoutA from '@/components/services/layoutA';
import LayoutB from '@/components/services/layoutB';

export default function ServiceDetailPage() {
  const { slug } = useParams();

  const data = layoutA[slug] || layoutB[slug];

  if (!data) {
    return (
      <div className="text-center py-20 text-red-600 text-xl">
        Service not found: <strong>{slug}</strong>
      </div>
    );
  }

  if (layoutA[slug]) {
    return <LayoutA data={data} />;
  }

  if (layoutB[slug]) {
    return <LayoutB data={data} />;
  }

  return null;
}
