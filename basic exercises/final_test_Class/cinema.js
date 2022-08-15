/* 
todo 27) Programa una clase llamada Pelicula.
La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.

  *- Todos los datos del objeto son obligatorios.
  *- Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números. (jonMircha Solution)
  *- Valida que el título no rebase los 100 caracteres.
  *- Valida que el director no rebase los 50 caracteres.
  *- Valida que el año de estreno sea un número entero de 4 dígitos.
  *- Valida que el país o paises sea introducidos en forma de arreglo.
  *- Valida que los géneros sean introducidos en forma de arreglo.
  *- Valida que los géneros introducidos esten dentro de los géneros aceptados*.
  *- Crea un método estático que devuelva los géneros aceptados*.
  *- Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
  *- Crea un método que devuelva toda la ficha técnica de la película.
  todo- Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.

!Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western. */

class Movie{
  constructor({id ,title, director, release, countriesOrigin, genres, rating}){
    this.id = id
    this.title = title
    this.director = director
    this.release = release
    this.countriesOrigin = countriesOrigin
    this.genres = genres
    this.rating = rating

    this.validateIMDb(id)
    this.validateTitle(title)
    this.validateDirector(director)
    this.validateRelease(release)
    this.validateCountriesOrigin(countriesOrigin)
    this.validateGenres(genres)
    this.validateRating(rating)
  }

  static get genresAvailables(){
    return ['Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western']
  }

  get getMovieInfo(){
    return {
      id: this.id,
      rating: this.rating,
      countriesOrigin: this.countriesOrigin,
      release: this.release,
      genres: this.genres,
      director: this.director,
      title: this.title,
    }
  }
  
  validateIMDb(id) {
    if (this.validateStr('IMDb id', id)){
      if (!(/^([a-z]){2}([0-9]{7})$/.test(id))) return console.error(`IMDb id ${id} is not valid, tha value must have 9 characters, the first two letters must be lowercase, the remaining seven must be numbers`)
    }
  }
  
  validateTitle(title) {
    if (this.validateStr('IMDb title', title)){
      if(title.length >= 100) return console.warn(`The title can't be more than 100 characters. Current title: ${title.length} characters`)
    }
  }

  validateDirector(director) {
    if (this.validateStr('IMDb director', director)){
      if(director.length >= 50) return console.warn(`The director's name can't be more than 50 characters. Current name: ${director.length} characters`)
    }
  }
  
  validateRelease(release) {
    if(release.toString().length !== 4) return console.warn(`The release date must have 4 digits. Current digits: ${release.toString().length}`)

    if(!(Number.isInteger(release))) return console.warn(`The release date must be a integer number`)
  }

  validateCountriesOrigin(countriesOrigin) {
    if (this.validateArray('IMDb countries of orgin', countriesOrigin)){
      countriesOrigin.forEach(element => {
        this.validateStr('IMDb countries of origin', element)
      })
    }
  }

  validateGenres(genres) {
    genres.forEach(element => {
      this.validateStr('IMDb genres', element)
    })

    if (this.validateArray('IMDb genres', genres)) { 
      genres.forEach(element => {
        if (!(Movie.genresAvailables.includes(element))) {
          console.error(`This genre(s) is not available. Current genre(s): ${genres.join(', ')}`)
          console.warn(`Available genres: ${Movie.genresAvailables.join(', ')}`)
        }
      })
    }
  }

  validateRating(rating) {
    if (!rating) return console.warn(`IMDb rating: "${rating}" is empty`)

    if (typeof rating !== "number") return console.error('IMDb rating must be a number')

    if (rating > 10 || rating < 0) return console.error('The rating number must be between 0 and 10. Current rating: ' + rating)

    this.rating = parseFloat(rating.toFixed(2))
  }

  validateStr(property, value) {
    if(!value) return console.warn(`${property}: "${value}" is empty`)

    if(typeof value !== "string") return console.error(`${property}: "${value}" is not a string`)

    return true
  }

  validateArray(property, value) {
    if(!value) return console.warn(`${property}: "${value}" is empty`)

    if(!(value instanceof Array)) return console.error(`The ${property} must be an Array. Current value: ${value}`)
    
    if(value.length === 0) return console.warn(`The array of ${property} must not be empty. Current value: ${value}, length: ${value.length}`)

    return true
  }
}

const favorites = [
  {
    id: 'tt1233213',
    title: 'Amogus movie',
    director: 'Stuart Steven Junior',
    release: 2023,
    countriesOrigin: ['US', 'UK', 'MX', 'PE'],
    genres: ['Action', 'Adult'],
    rating: 6.6801
  },
  {
    id: 'tt0164912',
    title: 'Stuart Little',
    director: 'Rob Minkoff',
    release: 1999,
    countriesOrigin: ['US', 'UK'],
    genres: ['Comedy'],
    rating: 9.9
  },
  {  
    id: 'tt1612312',
    title: 'Megamind',
    director: 'Gon',
    release: 2010,
    countriesOrigin: ['PE'],
    genres: ['Adult'],
    rating: 10
  },
]

const val = []

for (let i = 0; i < favorites.length; i++) {
  val.push(new Movie(favorites[i]))
}

val.forEach(movie => {
  console.log(JSON.stringify(movie, null, 2));
})