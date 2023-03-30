import React from 'react';
import { firacode } from '../models';

import cardLayoutStyles from './information-layout.module.scss';

function CardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${firacode.className}  ${cardLayoutStyles.informationlayout}`}
    >
      {children}
    </div>
  );
}

export default CardLayout;
