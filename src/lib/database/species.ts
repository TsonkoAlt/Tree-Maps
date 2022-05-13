import type { FilterSpecie } from '../types/database';

import type { Specie } from '../types/database/models';

import db from './conection';

export async function getManySpecies(filter?: FilterSpecie) {
	const collection = (await db()).collection('species');

	return <Specie[]>await collection.find(filter).toArray();
}

export async function getOneSpecies(filter?: FilterSpecie) {
	const collection = (await db()).collection('species');

	return <Specie>await collection.findOne(filter);
}