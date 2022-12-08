import '../App.css';

import React from 'react';

export default function customizationsCard({ customization }) {
  return (
    <div>
      <img
        className='Card'
        data-testid={`customization__img-card-${customization.id}`}
        src={customization.cloudinary || customization.figurinha}
        alt={customization.whatsapp}
        width={"320"}
        height={"320"}
      />
    </div>
  );
}
