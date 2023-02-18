import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Menu from './partials/Menu'
import styles from './partials/Navbar.module.css'

import _shop from '../../_data/_shop'
import _brands from '../../_data/_brands'

const ITEMS = [{
	name: 'shop',
	menu: [..._shop]
},{
	name: 'brands',
	menu: [..._brands]
},{
	name: 'exclusive',
	menu: false
},{
	name: 'contact',
	menu: false
}];

const NavLinks = motion(Link, { forwardMotionProps: true })

const Navbar = () => {
	const [selected, setSelected] = useState(null)

	const nav = {
		hidden: { opacity: 0 },
		show: { opacity: 1, transition: { staggerChildren: 0.5 } }
	}
	const navLink = {
		hidden: { y: -20, opacity: 0 },
		show: { y: 0, opacity: 1 }
	}

	return (
		<div className={styles.navbarWrapper}>
			<header className={styles.navbar}>
				<div className="container">
					<div className={styles.navbarInner}>
						<div className={styles.navLogo}>
							<img src="/logo-md.png" alt="street call" />
						</div>
						<motion.nav 
							variants={nav} 
							initial="hidden"
							animate="show"
							className={styles.nav} 
							onMouseLeave={() => setSelected(null)}>
							{ ITEMS.map(item => (
								<NavLinks 
									variants={navLink}
									key={item.name} 
									className={styles.navLinks}
									onMouseEnter={() => setSelected(item.menu ? item.name : null)} 
									to="/">
									{ item.name.toUpperCase() }

									{ item.name === selected ? 
										<motion.div 
											layoutId="navUnderline"
											className={styles.navbarUnderline}>
										</motion.div> : null
									}
								</NavLinks>
							)) }
							{ selected === 'shop' && <Menu items={_shop}/> }
							{ selected === 'brands' && <Menu items={_brands}/> }
						</motion.nav>
						<nav className={styles.nav}>
							<Link className={styles.navLinks} to="/">
								<svg aria-hidden="true" focusable="false" role="presentation" viewBox="0 0 64 64"><g fill="none" stroke="#000" strokeWidth="2"><path d="M25 26c0-15.79 3.57-20 8-20s8 4.21 8 20"></path><path d="M14.74 18h36.51l3.59 36.73h-43.7z"></path></g></svg>
							</Link>
							<Link className={styles.navLinks} to="/">
								<svg aria-hidden="true" focusable="false" role="presentation" fill="none" stroke="#000" strokeWidth="2" viewBox="0 0 64 64"><path d="M47.16 28.58A18.58 18.58 0 1 1 28.58 10a18.58 18.58 0 0 1 18.58 18.58zM54 54L41.94 42"></path></svg>
							</Link>
							<Link className={styles.navLinks} to="/">
								<svg aria-hidden="true" focusable="false" role="presentation" fill="none" stroke="#000" strokeWidth="2" viewBox="0 0 64 64"><path d="M35 39.84v-2.53c3.3-1.91 6-6.66 6-11.41 0-7.63 0-13.82-9-13.82s-9 6.19-9 13.82c0 4.75 2.7 9.51 6 11.41v2.53c-10.18.85-18 6-18 12.16h42c0-6.19-7.82-11.31-18-12.16z"></path></svg>
							</Link>
						</nav>
					</div>
				</div>
			</header>

		</div>
	)
}

export default Navbar