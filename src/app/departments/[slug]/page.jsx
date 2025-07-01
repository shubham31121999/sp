'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { layoutMap } from '@/data/departments/layoutMap';

export default function DepartmentPage() {
  const { slug } = useParams();
  const [Component, setComponent] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const load = async () => {
      const config = layoutMap[slug];
      if (!config) return;

      const deptData = await config.data();
      let Layout;

      if (config.layout === 'A') {
        Layout = (await import('@/app/layout-a/LayoutA')).default;
      } else {
        Layout = (await import('@/app/layout-b/LayoutB')).default;
      }

      setComponent(() => Layout);
      setData(deptData.default);
    };

    load();
  }, [slug]);

  if (!Component || !data) return <div>Loading...</div>;
  return <Component {...data} />;
}
