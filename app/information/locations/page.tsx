
import { Card, Navigator } from '@/components';
import { Routes } from '@/models';
import React from 'react';
import { getLocations } from './services';

async function fetchLocations() {
   return await getLocations();
}

async function Locations() {
    const locations = await fetchLocations();
  return (
    <>
    <Navigator pathName={[Routes.Home, Routes.CHARACTERS]}/>
    {locations.map((location) => (
        <Card key={location.id} data={location}/>
    ))}
    </>
  );
}

export default Locations;