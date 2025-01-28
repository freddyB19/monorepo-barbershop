import {
	Routes, Navigate, Route
} from 'react-router-dom'

import {Error404} from "@core/components/ErrorPages"
import {RouterPath} from "@core/utils/RouterPath"

 
export const RoutesWithNotFound = ({children}) => {
	return(
		<Routes>
			{children}
			<Route path="*" element={<Navigate to={RouterPath.public.error} />}/>
			<Route path={RouterPath.public.error} element={ <Error404 /> }/>
		</Routes>
	)
}