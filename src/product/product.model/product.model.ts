export class ProductModel {
	_id: string;
	image: string;
	title: string;
	price: number;
	oldprice: number;
	calculatedRating: number;
	description: string;
	advantage: string;
	disAdvantage: string;
	categories: string[];
	tags: string;
	characteristics: {
		[key: string]: string;
	}
}
