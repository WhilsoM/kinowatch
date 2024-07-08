export type TEvent = {
	target: any
}

export type TMovieList = {
	api: string
	parametr: string
	version: string
}

export type TMovies = {
	kinopoiskId: number
	posterUrlPreview: string | null
	genres: string[]
	genre: string
	nameRu: string
}
export type TObject = TMovies[]
