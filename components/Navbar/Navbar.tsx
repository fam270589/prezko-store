import { BsSearch, BsCart } from "react-icons/bs";
import Image from "next/image";
import styles from "./Navbar.module.css";
import logo from "../../public/assets/prezko_store.png";

type Props = {
	children?: React.ReactNode;
	// props....
};

//todo:-----Header component-----://
const Navbar = (props: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<Image
					priority
					src={logo}
					alt="logo"
					width={120}
					height={40}
					className={styles.logo}
				/>
				<div className={styles.searchCart}>
					<div className={styles.search}>
						<input type="text" className={styles.input} />
						<button className={styles.button}>
							<BsSearch />
						</button>
					</div>
					<div className={styles.cart}>
						<p className={styles.count}>0</p>
						<BsCart className={styles.cartIcon} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
