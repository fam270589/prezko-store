import Image, { StaticImageData } from "next/image";
import React from "react";
import styles from "./ProductCard.module.css";

type Props = {
	children?: React.ReactNode;
	// props....
	name: string;
	image: StaticImageData;
	price: string;
	type: string;
};

//todo:-----ProductCard component-----://
const ProductCard = (props: Props) => {
	return (
		<div className={styles.container}>
			<Image
				priority
				src={props.image}
				alt="product"
				width={200}
				height={100}
				className={styles.image}
			/>

			<div className={styles.texts}>
				<p className={styles.name}>{props.name}</p>
				<p className={styles.price}>Rp.{props.price}</p>
				<p className={styles.type}>#{props.type}</p>
			</div>
		</div>
	);
};

export default ProductCard;
