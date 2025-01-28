import {useState, useEffect} from "react"

export const useAppointment = ({fetch, params = {}}) => {
	const [loading, setLoading] = useState(true)
	const [data, setData] = useState({})
	const [error, setError] = useState(null)


	useEffect(() => {
		const controler = new AbortController()

		async function GetData(controler){
			try{
				setLoading(true)

				const response = await fetch({
					signal: controler.signal,
					...params
				})

				setData({...response})
				
			} catch(error) {
				console.error("Errror Whyeyyyyy")
				setError(error)
			} finally {
				setLoading(false)
			}

		}
		GetData(controler)
		
		return () => {
			controler.abort()
		};
	}, [])



	return {
		loading,
		data,
		error,
		setError
	}

}