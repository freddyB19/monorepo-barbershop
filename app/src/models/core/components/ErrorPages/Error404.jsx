
import { Link } from "react-router-dom"
import {RouterPath} from "@core/utils/RouterPath"


export const Error404 = () => {
	return (<>

	<div className="bg-error-404">
		<figure>
			<div className="sad-mac"></div>
			<figcaption>
				<span className="sr-text">Error 404: Not Found</span>
				<span className="e"></span>
				<span className="r"></span>
				<span className="r"></span>
				<span className="o"></span>
				<span className="r"></span>
				<span className="_4"></span>
				<span className="_0"></span>
				<span className="_4"></span>
				<span className="n"></span>
				<span className="o"></span>
				<span className="t"></span>
				<span className="f"></span>
				<span className="o"></span>
				<span className="u"></span>
				<span className="n"></span>
				<span className="d"></span>
			</figcaption>
		</figure>
	</div>
	<div className="mt-3 mb-5 text-center shadow p-3 rounded">
		<h1 className="display-4">Algo anda mal</h1>

		<Link 
			className="mt-2 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" 
			to={RouterPath.public.home}>Volvamos al inicio.</Link>
	</div>

	</>)

}