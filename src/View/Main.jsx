import React, { useEffect, useState } from 'react'
import "../index.css"
// Components
import { Navbar } from '../Components/Navbar/Navbar'
import { Sidebar } from '../Components/Navbar/Sidebar'
import { Loading } from '../View/Loading'
import { MainHero } from "../Components/Hero/MainHero"
import { Products } from '../Components/Products/Products'
import { Team } from '../Components/Team/Team'
import { Productv2 } from '../Components/Productv2/Productv2'


export const Main = () => {
	const [loading, setLoading] = useState(false)
	const loadingHandler = () => {
		setLoading(true)

		setTimeout(() => {
			setLoading(false)
		}, 2500);
	}
	useEffect(() => {
		loadingHandler()
	}, [])

	return (
		<div>
			{loading ? <Loading /> : null}
			<div className={`${loading ? "hidden" : "block"}`}>
				<Navbar />
				<Sidebar />
				<MainHero />
				{/* <Products /> */}
				<Productv2 />
				<Team />
			</div>
		</div>
	)
}
