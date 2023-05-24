import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../store/routes'
import Shop from '../pages/Shop'

const AppRouter = () => {
	const isAuth = false

	return (
		<Routes>
			{isAuth && authRoutes.map(({ path, Component }) =>
				<Route key={path} path={path} element={<Component />} />
			)}

			{publicRoutes.map(({ path, Component }) =>
				<Route key={path} path={path} element={<Component />} />
			)}
			<Route path='*' element={<Navigate to="/" replace />} />

		</Routes>
	)
}

export default AppRouter