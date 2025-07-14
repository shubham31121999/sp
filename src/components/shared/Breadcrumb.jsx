// 'use client';

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// export default function Breadcrumb() {
//   const pathname = usePathname();

//   const pathSegments = pathname
//     .split('/')
//     .filter((seg) => seg); // remove empty segments

//   const pathCrumbs = pathSegments.map((segment, idx) => {
//     const href = '/' + pathSegments.slice(0, idx + 1).join('/');
//     const label = segment.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

//     return { href, label };
//   });

//   return (
//     <div className="inline-block rounded-xl px-4 py-3 border-4 border-primary shadow-sm mb-6">
//   <nav className="flex flex-wrap items-center text-sm md:text-base text-primary font-medium">
//     <Link
//       href="/"
//       className="hover:text-accent transition whitespace-nowrap"
//     >
//       Home
//     </Link>

//     {pathCrumbs.map((crumb, index) => (
//       <span key={crumb.href} className="flex items-center whitespace-nowrap">
//         <span className="mx-2 text-gray-400">/</span>
//         {index === pathCrumbs.length - 1 ? (
//           <span className="text-primary">{crumb.label}</span>
//         ) : (
//           <Link
//             href={crumb.href}
//             className="hover:text-accent transition"
//           >
//             {crumb.label}
//           </Link>
//         )}
//       </span>
//     ))}
//   </nav>
// </div>



//   );
// }
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumb({ textColor = 'text-primary', borderColor = 'border-primary' }) {
  const pathname = usePathname();

  const pathSegments = pathname
    .split('/')
    .filter((seg) => seg);

  const pathCrumbs = pathSegments.map((segment, idx) => {
    const href = '/' + pathSegments.slice(0, idx + 1).join('/');
    const label = segment.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
    return { href, label };
  });

  return (
    <div className={`inline-block rounded-xl px-4 py-3 border-4 shadow-sm mb-6 ${textColor} ${borderColor}`}>
      <nav className="flex flex-wrap items-center text-sm md:text-base font-medium text-inherit">
        <Link href="/" className="hover:text-accent transition text-inherit">
          Home
        </Link>

        {pathCrumbs.map((crumb, index) => (
          <span key={crumb.href} className="flex items-center whitespace-nowrap">
            <span className="mx-2 text-gray-400">/</span>
            {index === pathCrumbs.length - 1 ? (
              <span className="text-inherit">{crumb.label}</span>
            ) : (
              <Link href={crumb.href} className="hover:text-accent transition text-inherit">
                {crumb.label}
              </Link>
            )}
          </span>
        ))}
      </nav>
    </div>
  );
}
