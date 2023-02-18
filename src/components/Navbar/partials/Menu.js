import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import styles from './Menu.module.css'

const Menu = ({ items }) => {
	const [selected, setSelected] = useState(null)

	const listContainer = {
		hidden: { opacity: 0 },
		show: { opacity: 1, transition: { type: 'tween', duration: 0.2, staggerChildren: 0.02 } }
	}
	const listItem = {
		hidden: { opacity: 0 },
		show: { opacity: 1 }
	}

	return (
		<div className={styles.menuWrapper}>
			<div className="container">
				<motion.ul 
					variants={listContainer}
					initial="hidden" 
					animate="show"
					className={styles.menuList}>
					{ items.map(item => (
						<motion.li 
							variants={listItem}
							key={item} 
							onMouseEnter={() => setSelected(item)}>
							{ item === selected ? 
								<motion.div 
									layoutId="menuBackdrop" 
									className={styles.menuBackdrop} 
									style={{
										opacity: '0.5'
									}}>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
								</motion.div> : null
							}
							<Link to="/">{ item }</Link>
						</motion.li>
					)) }
				</motion.ul>
			</div>
		</div>
	)
}

export default Menu