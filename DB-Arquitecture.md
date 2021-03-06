## Database

---

## Types

### State Conservation

```ts
enum Conservation {
	// Extinct
	EX = 'extinct',
	EW = 'extinct in wild',
	// Treatened
	CR = 'critically endangered',
	EN = 'endangered',
	VU = 'vunerable',
	// Lower Risk
	NT = 'near threatened',
	CD = 'conservation dependent',
	LC = 'least concern',
	// Other
	DD = 'data deficient', // default value
	NE = 'not evaluated',
}
```

### StateValidate

```ts
enum StateValidable {
	IN = 'inspected', // default value
	VL = 'validated',
	RF = 'refussed',
}
```

### Taxon

```ts
// without kindom and domain
enum Taxons {
	PH = 'phylum',
	CL = 'class',
	OR = 'order',
	TR = 'tribe',
	FM = 'Family',
	GN = 'genus', // deaulf value
}
```

### StateUser

```ts
enum StateUser {
	NR = 'normal', // default value
	BN = 'banned',
	SH = 'shadow',
	HD = 'hidden',
}
```

### StateActivity

```ts
enum StateActivity {
	NR = 'normal', // default value
	RM = 'remove',
	HD = 'hidden',
}
```

### State and Type

```ts
enum PoblationType {
	NA = 'native',
	IN = 'introducided and naturalized',
	NE = 'not evalued',
}

type StatePoblation = [string, PoblationType];
```

---

## Bases

### Trees

-   **Type:** _Entity_ and _Validable_
-   **Need Validation**

|       Column       |   Type   |    Content     | editable |   Key   | Auto | Nesesary | Visible |
| :----------------: | :------: | :------------: | :------: | :-----: | :--: | :------: | :-----: |
|       **Id**       | _String_ |       Id       |    No    | Primary | Yes  | Required |   Yes   |
| **User Recorder**  | _String_ |   User.Email   |    No    | Foreing | Yes  | Required | OnlyApp |
| **User Validator** | _String_ |   User.Email   |    No    | Foreing | Yes  | Required | OnlyApp |
|     **State**      | _String_ | StateValidable |   Auto   |   No    | Yes  | Required |   No    |
|      **Age**       | _Number_ |      Age       |   Yes    |   No    |  No  | Validate |   Yes   |
|     **Width**      | _Number_ |     Meters     |   Yes    |   No    |  No  | Validate |   Yes   |
|    **Diameter**    | _Number_ |     Meters     |   Yes    |   No    |  No  | Validate |   Yes   |
|      **Name**      | _String_ |    Letters     |   Yes    |   No    |  No  | Validate |   Yes   |
|    **Location**    | _String_ |    Location    |   Yes    |   No    |  No  | Register |   Yes   |
|     **Specie**     | _String_ |  Specie.Name   |   Yes    | Foreing | Yes  | Register |   Yes   |
|  **Description**   | _String_ |      N/A       |   Yes    |   No    |  No  | Optional |   Yes   |

### Species

-   **Type:** _Taxonomy_ and _Validable_
-   **Need Validarion**

|       Column        |   Type   |    Content     | editable |   Key   | Auto | Nesesary | Visible |
| :-----------------: | :------: | :------------: | :------: | :-----: | :--: | :------: | :-----: |
| **SCientific Name** | _String_ |    Letters     |    No    | Primary |  No  | Required |   Yes   |
|      **Name**       | _String_ |    Letters     |    No    |   No    |  No  | Required |   No    |
|      **State**      | _String_ | StateValidable |   Auto   |   No    | Yes  | Required |   Yes   |
|  **Conservation**   | _String_ |  Conservation  |   Yes    |   No    |  No  | Validate |   Yes   |
|      **Gener**      | _String_ |     Gener      |   Auto   | Foreing |  No  | Validate |   Yes   |
|   **Description**   | _String_ |      N/A       |   Yes    |   No    |  No  | Validate |   Yes   |
|    **Subgener**     | _String_ |    SubGener    |   Auto   | Foreing |  No  | Optional |   Yes   |
|  **Distribution**   | _Array_  |  StateAndType  |   Yes    |   No    |  No  | Optional |   Yes   |

### Taxons

-   **Type:** _Taxon_ and _Validable_
-   **Need Validarion**

|     Column      |   Type   | Content | editable |   Key   | Auto | Nesesary | Visible |
| :-------------: | :------: | :-----: | :------: | :-----: | :--: | :------: | :-----: |
|    **Rank**     | _String_ | Letters |    No    | Primary |  No  | Required |   Yes   |
|    **Name**     | _String_ | Letters |    No    | Primary |  No  | Required |   Yes   |
|     **Sup**     | _String_ | Family  |    No    | Foreing |  No  | Required |   Yes   |
| **Description** | _String_ |   N/A   |   Yes    |   No    |  No  | Optional |   Yes   |

### Users

-   **Type:** _Entity_

|       Column        |   Type   |   Content   | editable |   Key   | Auto | Nesesary | Visible |
| :-----------------: | :------: | :---------: | :------: | :-----: | :--: | :------: | :-----: |
|      **Email**      | _String_ | Auth0.Email |    No    | Primary | Yes  | Required | OnlyApp |
|      **Grade**      | _String_ |  UserGrade  |   Auto   |   No    | Yes  | Required | OnlyApp |
|      **State**      | _String_ |  StateUser  |   Auto   |   No    | Yes  | Required |   No    |
| **Trees Following** | _Array_  |   Tree.Id   |   Yes    |   No    |  No  | Optional | OnlyApp |
| **Users Following** | _Array_  | User.Email  |   Yes    |   No    |  No  | Optional | OnlyApp |
|   **Social Webs**   | _Array_  |    Links    |   Yes    |   No    |  No  | Optional | OnlyApp |
|   **Description**   | _String_ |     N/A     |   Yes    |   No    |  No  | Optional | OnlyApp |

### Photos

|  Column  |   Type   |   Content   | editable |   Key   | Auto | Nesesary | Visible |
| :------: | :------: | :---------: | :------: | :-----: | :--: | :------: | :-----: |
|  **Id**  | _String_ |     Id      |    No    | Primary | Yes  | Required |   Yes   |
| **Name** | _String_ |     N/A     |    No    |   No    |  No  | Required |   Yes   |
| **Blob** | _Binary_ | Binary Data |    No    |   No    |  No  | Required |   Yes   |

### Moments

-   **Type:** _Activity_ and _Answerable_

|     Column      |   Type   |    Content    | editable |   Key   | Auto | Nesesary | Visible |
| :-------------: | :------: | :-----------: | :------: | :-----: | :--: | :------: | :-----: |
|     **Id**      | _String_ |      Id       |    No    | Primary | Yes  | Required |   Yes   |
|    **State**    | _String_ | StateActivity |   Auto   |   No    | Yes  | Required |   No    |
|    **Date**     | _String_ |     Date      |   Yes    |   No    | Yes  | Required |   Yes   |
|   **Photos**    | _Array_  |    Photos     |   Yes    | Foreing |  No  | Required |   Yes   |
|    **Tree**     | _String_ |    Tree.Id    |    No    | Foreing |  No  | Required |   Yes   |
|    **User**     | _String_ |  User.Email   |    No    | Foreing |  No  | Required |   Yes   |
| **Description** | _String_ |      N/A      |   Yes    |   No    |  No  | Required |   Yes   |

### Comments

-   **Type:** _Activity_, _Interaction_ and _Answerable_

|   Column    |   Type   |    Content    | editable |   Key   | Auto | Nesesary | Visible |
| :---------: | :------: | :-----------: | :------: | :-----: | :--: | :------: | :-----: |
|   **Id**    | _String_ |      Id       |    No    | Primary | Yes  | Required | OnlyApp |
|  **State**  | _String_ | StateActivity |   Auto   |   No    | Yes  | Required |   No    |
|  **User**   | _String_ |  User.Email   |    No    | Foreing |  No  | Required | OnlyApp |
|   **To**    | _String_ | Answerable.Id |    No    | Foreing |  No  | Required | OnlyApp |
| **Content** | _String_ |      N/A      |   Yes    |   No    |  No  | Required | OnlyApp |

### Reactions

-   **Type:** _Activity_ and _Interaction_

|   Column    |   Type   |    Content    | editable |   Key   | Auto | Nesesary | Visible |
| :---------: | :------: | :-----------: | :------: | :-----: | :--: | :------: | :-----: |
|   **Id**    | _String_ |      Id       |    No    | Primary | Yes  | Required | OnlyApp |
|  **State**  | _String_ | Statectivity  |   Auto   |   No    | Yes  | Required |   No    |
|  **User**   | _String_ |  User.Email   |    No    | Foreing |  No  | Required | OnlyApp |
|   **To**    | _String_ | Answerable.Id |    No    | Foreing |  No  | Required | OnlyApp |
| **Content** | _String_ |   Reaction    |   Yes    |   No    |  No  | Required | OnlyApp |

---

## Data

### Taxons

```js
[
	// geners
	{
		type: 'gener',
		name: 'Ficus',
		sup: 'Moraceae',
		description: '',
	},
	{
		type: 'gener',
		name: 'Platanus',
		sup: 'Planaceae',
		description: '',
	},
	{
		type: 'gener',
		name: 'Plumeria',
		sup: 'Plumerieae',
		description: '',
	},
	{
		type: 'gener',
		name: 'Cojoba',
		sup: 'Ingeae',
		description: '',
	},
	{
		type: 'gener',
		name: 'Taxodium',
		sup: 'Cupressaceae',
		description: '',
	},
	{
		type: 'gener',
		name: 'Inga',
		sup: 'Ingeae',
		description: '',
	},
	{
		type: 'gener'
		name: 'Cochlospermum',
		sup: 'Bixaceae',
		description: '',
	},
	{
		type: 'gener',
		name: 'Tabebuia',
		sup: 'Tecomeae',
		description: '',
	},
	{
		type: 'gener',
		name: 'Pinus',
		sup: 'Pinaceae',
		description: '',
	},
	// tribes
	{
		type: 'tribe',
		name: 'Ficeae',
		sup: 'Moraceae',
		description: '',
	},
	{
		type: 'tribe',
		name: 'Plumerieae',
		sup: 'Apocynaceae',
		description: '',
	},
	{
		type: 'tribe',
		name: 'Tecomeae',
		sup: 'Bignoniaceae',
		description: '',
	},
	{
		type: 'tribu',
		name: 'Ingeae',
		sup: 'Fabaceae',
		description: '',
	},
	// families
	{
		type: 'family',
		name: 'Moraceae',
		sup: 'Rosales',
		description: '',
	},
	{
		type: 'family',
		name: 'Planaceae',
		sup: 'proteales',
		description: '',
	},
	{
		type: 'family',
		name: 'Apocynaceae',
		sup: 'Gentianales',
		description: '',
	},
	{
		type: 'family',
		name: 'Moraceae',
		sup: 'Urticales',
		description: '',
	},
	{
		type: 'family',
		name: 'Fabaceae',
		sup: 'Fabales',
		description: '',
	},
	{
		type: 'family',
		name: 'Cupressaceae',
		sup: 'Cupressales',
		description: '',
	},
	{
		type: 'family',
		name: 'Bixaceae',
		sup: 'Malvales',
		description: '',
	},
	{
		type: 'family',
		name: 'Bignoniaceae',
		sup: 'Lamiales',
		description: '',
	},
	{
		type: 'family',
		name: 'Pinaceae',
		sup: 'Pinales',
		description: '',
	},
];
```

### Speciess

```js
[
	{
		scientificName: 'Ficus sycomorus',
		name: 'Sic??moro',
		state: 'validated',
		conservation: 'least concern',
		distribution: [],
		gener: 'Ficus',
		subgener: 'Sycomorus',
		description:
			'Puede medir hasta 20m de altura y 6m de anchura con una copa bastante espesa. La corteza es verde amarillenta y se exfolia en tiras que dejan aparecen en su interior otra corteza amarillenta. Como todas las higueras, el sic??moro contiene l??tex. Las hojas cordiformes (con forma acorazonada) tienen un color verde oscuro, son ??speras y miden unos 14cm de largo y unos 10cm de ancho y est??n dispuestas en espiral alrededor de la rama. Sobre su env??s verde claro se ven los nervios prominentes. El peciolo pubescente mide de 0,5 a 3cm de longitud.',
	},
	{
		scientificName: 'Platanus mexicana',
		name: '??lamo Blanco',
		state: 'validated',
		conservation: 'least concern',
		distribution: [
			['Mexico', 'native'],
			['Guatemala', 'native'],
		],
		gener: 'Platanus',
		description:
			'Se trata de un ??rbol caducifolio que alcanza entre 15 y 40m de alto, con un di??metro de hasta 2m, tronco derecho con manchas irregulares blancas originadas por la exfoliaci??n de la corteza, de color pardo amarillenta con manchas blancuzcas a pardo rojizas; ramificaci??n irregular, pelos dendr??ticos formando un indumento flocoso ferrug??neo en las ramas j??venes. Hojas, yemas de 5mm de largo orientadas al interior cubiertas por est??pulas foli??ceas.',
	},
	{
		scientificName: 'Ficus Pertusa',
		name: 'Amatillo',
		state: 'validated',
		conservation: 'least concern',
		distribution: [
			['Mex??co', 'native'],
			['El Salvador', 'native'],
			['Guatemala', 'native'],
			['Jamaica', 'native'],
			['Brasil', 'native'],
			['Belice', 'native'],
			['Ecuador', 'native'],
			['Per??', 'native'],
		],
		gener: 'Ficus',
		description:
			'Son ??rboles o arbustos, que alcanzan un tama??o de hasta 30m de alto, inici??ndose como ep??fitos pero torn??ndose independientes; ramas j??venes glabras, grises a caf??-amarillentas. Hojas el??pticas a muy angostamente el??pticas o lanceoladas, 5 a 12.5cm de largo y 2 a 5.5cm de ancho, acuminadas a atenuadas en el ??pice, obtusas a agudas en la base, glabras, lisas, cart??ceas y verdes a caf?? claras cuando secas, 10 a 20 pares de nervios secundarios, muy d??biles y dif??ciles de distinguir de los nervios intermedios, nervio submarginal d??bil, nervios terciarios inconspicuos; pec??olos 0.8 a 2.5cm de largo, glabros, caf?? claros, est??pulas 0.5 a 1.3cm de largo, glabras.',
	},
	{
		scientificName: 'Cojoba arborea',
		name: 'Frijolillo',
		state: 'validated',
		conservation: 'least concern',
		distribution: [
			['Mex??co', 'native'],
			['Ecuador', 'native'],
			['El Salvador', 'native'],
			['Guatemala', 'native'],
			['Honduras', 'native'],
			['Nicaragua', 'native'],
			['Costa Rica', 'native'],
			['Panam??', 'native'],
			['Cuba', 'native'],
			['Rep??blica Dominicana', 'native'],
			['Belice', 'native'],
		],
		gener: 'Cojoba',
		description:
			'??rbol de hasta 35m de altura y 1m de Di??metro, fuste recto y cil??ndrico que presenta ramas en la base. La copa es rala y dispersa, con follaje verde claro. La corteza es caf?? oscuro a caf?? verdoso. Las hojas son alternas y bipinnadas, y se caracterizan por tener una glandulita entre cada par de pinnas. Las hojas se encuentran compuestas por 10 a 15 pares de hojas secundarias o foliolos primarios, estas a su vez est??n compuestas por 20 a 40 pares de foliolos secundarios.',
	},
	{
		scientificName: 'Plumeria Rubra',
		name: 'Franchip??n',
		state: 'validated',
		conservation: 'least concern',
		distribution: [
			['Mex??co', 'native'],
			['Per??', 'native'],
			['El Salvador', 'native'],
			['Guatemala', 'native'],
			['Nicaragua', 'native'],
			['Costa Rica', 'native'],
			['Panam??', 'native'],
			['Cuba', 'native'],
			['Rep??blica Dominicana', 'native'],
			['Belice', 'native'],
		],
		gener: 'Plumeria',
		description:
			'Es un arbusto grande o arbolillo de 5 a 8m (puede alcanzar hasta 25) de hoja caduca con tronco recto, escasa ramificaci??n y copa abierta e irregular. Las hojas, de haz verde brillante y m??s p??lido en el env??s, se disponen en espiral en los ??pices de las ramas. Son simples, de 15 a 30cm de largo por entre 4 a 8cm de ancho, lanceoladas o el??pticas y de margen entero. Las flores hermafroditas surgen en pan??culas en las axilas de las hojas nuevas. Miden entre 15 a 30cm, con s??palos verdosos y p??talos blancos con el centro amarillo p??lido.',
	},
	{
		scientificName: 'Ficus Carica',
		name: 'Higuera',
		state: 'validated',
		conservation: 'least concern',
		distribution: [],
		gener: 'Ficus',
		description:
			'??rbol o arbusto caducifolio de porte bajo, su altura m??xima es de 7 a 8m. De copa muy abierta debido a su profusa ramificaci??n, que a menudo surge casi a ras del suelo. La corteza es lisa y de color gris??ceo. Las hojas, de 12 a 25cm de largo y 10 a 18cm de ancho, son profundamente lobuladas, formadas por 3 o 7 fol??olos, de color verde brillante y textura ??spera.',
	},
	{
		scientificName: 'Cochlospermum vitifolium',
		name: 'Rosa Amarilla',
		state: 'validated',
		conservation: 'least concern',
		distribution: [
			['Mex??co', 'native'],
			['Per??', 'native'],
			['Bolivia', 'native'],
			['Brasil', 'native'],
			['Guayanas', 'native'],
			['Trinidad', 'native'],
		],
		gener: 'Cochlospermum',
		description:
			'Son plantas ??rboles o arbustos, que alcanzan un tama??o de 3 a 15m de alto. Hojas con 5 a 7 lobos el??pticos a oblongos, acuminadas, subenteras a serradas, glabras o pubescentes en el env??s. Pan??cula terminal amplia, flores actinomorfas, 8 a 12cm de ancho; p??talos ampliamente obovados, emarginados, amarillos; ovario 1-locular, con 5 placentas parietales. C??psula suberecta a colgante, ampliamente ovada a obovada umbilicada, valva exterior de color caf?? obscuro, gris o verdoso, afelpada o glabra, valva interna de color ocre a crema, glabra; semillas reniformes con tricomas blancos gosipinos.',
	},
	{
		scientificName: 'Inga jinicuil',
		name: 'Algodoncillo',
		state: 'validated',
		conservation: 'least concern',
		distribution: [],
		gener: 'Inga',
		description:
			'??rbol perennifolio o caducifolio, de 12 a 15 m (hasta 20 m) de altura, de 30 a 50 cm de di??metro a la altura del pecho. El tronco es recto y la copa extendida y redonda consiste de ramas erectas con denso follaje. La corteza es gris p??lida y amarilla al corte. Las hojas son pinnadas, formadas por seis pinnas el??pticas o lanceoladas, de 8 a 20 cm de largo, alternas, el??pticas, lisas, de 8 a 11 cm de largo, lustrosas, puntiagudas.',
	},
	{
		scientificName: 'Taxodium huegelii',
		name: 'Ahuehuete',
		state: 'validated',
		conservation: 'least concern',
		distribution: [],
		gener: 'Taxodium',
		description:
			'Son ??rboles longevos, que alcanzan los miles de a??os de antig??edad. Su origen se remonta a la Era Mesozoica, entre 100 a 200 millones de a??os, cuando las con??feras dominaban el paisaje y formaban impresionantes bosques primitivos. Taxodium huegelii es un ??rbol frondoso, con troncos de di??metros considerables entre 2 y 14m y alturas de hasta de 40m. Las hojas est??n ordenadas en espiral y yacen en dos filas horizontales superpuestas y son de uno a dos cm de largo de uno a dos mm de ancho. Las pi??as son ovaladas, pr??cticamente esf??ricas de 1,5 a 2,5cm de largo y de 1 a 2cm de ancho, con escamas poligonales piramidales. Produce semillas todo el a??o, sobre todo entre agosto y noviembre.',
	},
	{
		scientificName: 'Tabebuia Rosea',
		name: 'Apamate',
		state: 'validated',
		conservation: 'least concern',
		distribution: [],
		gener: 'Tabebuia',
		description:
			'Llega a medir de 6 a 10m de altura, aunque en su h??bitat nativo puede superar los 25m. Tronco corto de corteza gris??cea, algo fisurada. Hojas palmadas, compuestas de 3 a 5 foliolos el??pticos a oblongos grandes (hasta 34 cm de largo). Las inflorescencias surgen en pan??culas terminales. Las flores tienen c??liz acampanado y bilabiado con p??talos rosa, lavanda o magenta. El fruto es una c??psula lineal, cil??ndrica de 22 a 35cm de longitud y con 7 a 10 semillas aladas.',
	},
	{
		scientificName: 'Pinus devoniana',
		name: 'Pino Blanco Mexicano',
		state: 'validated',
		conservation: 'least concern',
		distribution: [],
		gener: 'Pinus',
		description:
			'Es un ??rbol de entre veinte y treinta metros de altura, copa irregular redondeada, corteza ??spera y agrietada, ramas largas, colocadas irregularmente en el tallo, ramillas de color caf?? oscuro muy ??speras. Hojas de 30 a 35cm, color verde claro brillante. Conos de 20 a 30cm, de largo por 12 a 15cm de ancho de color moreno opaco, madera blanca amarillenta, dura y pesada.',
	},
];
```
