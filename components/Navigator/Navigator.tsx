import { Route } from '@/models/routes.model';
import Link from 'next/link';
import React from 'react';

interface Props {
  pathName: Route[];
}

function Navigator({ pathName }: Props) {
  return (
    <div style={{ display: 'flex', gap: '15px', flexDirection: 'row' }}>
      {pathName.map((route) => (
        <Link
          className="bg-fuchsia-500 hover:bg-sky-700"
          key={route.path}
          href={route.path}
        >
          {route.name}
        </Link>
      ))}
    </div>
  );
}

export default Navigator;
