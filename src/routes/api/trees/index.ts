import type { Tree } from '$lib/types/database/models';
import { StateValidable } from '$lib/types/database/enums';
import { requiredKeysTreeValidate } from '$lib/utilities/database';
import { getSpecieScientificName } from '$lib/database/species';

import type { RequestHandler } from '@sveltejs/kit';
getSpecieScientificName();

export const post: RequestHandler = async ({ request }) => {
	try {
		const tree = <Tree>await request.json();

		requiredKeysTreeValidate(tree);

		tree.state = StateValidable.IN;

		return {
			status: 302,
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				message: 'ok',
				value: tree,
			}),
		};
	} catch (err) {
		console.log((<Error>err).name, (<Error>err).message);
		return {
			status: 404,
			headers: {
				'Content-Type': 'application/json',
			},
			body: `{ "Error": "${(<Error>err).message}" }`,
		};
	}
};