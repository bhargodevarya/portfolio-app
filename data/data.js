const MOVIE_DATA =
[
    {
      id: '1',
      name: 'The Shawshank Redemption',
      releaseYear: 1994,
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      rating: 4.8,
      genre: 'drama',
      image: 'https://m.media-amazon.com/images/M/MV5BNjQ2NDA3MDcxMF5BMl5BanBnXkFtZTgwMjE5NTU0NzE@._V1_CR0,60,640,360_AL_UX477_CR0,0,477,268_AL_.jpg'
    },
    {
      id: '2',
      name: 'The Dark Knight',
      releaseYear: 2008,
      description: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      rating: 4.7,
      genre: 'action, crime, drama',
      image: 'https://img.cinemablend.com/filter:scale/quill/c/3/8/0/f/4/c380f4f12cfeec19f0c40c6f57db188f2f98cca8.jpg?mw=600'
    },
    {
      id: '3',
      name: 'Lord of the Rings',
      releaseYear: 2004,
      description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
      rating: 4.9,
      genre: 'adventure, drama, fantasy',
      image: 'https://img.cinemablend.com/filter:scale/quill/0/f/5/2/a/6/0f52a6843a25c1a5c1f9a0c00548cad9e1d912e2.jpg?mw=600'
    }
  ]

  const PORTFOLIO_DATA = {
    portfolio : [
      {
        location: "Benagaluru, India",
        designation: "This is my 1st designation",
        organization: "Company1",
        from: "Sep/2016",
        to: "Sep/2018",
        shortDesc: "This is some short desc",
        longDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed odio porttitor sem tincidunt scelerisque. Praesent ac tellus orci. Nullam sodales, nunc in finibus porttitor, justo leo scelerisque lectus, at volutpat purus libero sed nibh. In eleifend rhoncus feugiat. In rhoncus est a odio vestibulum auctor. Pellentesque nulla orci, placerat fringilla sodales sit amet, dignissim vel dui. Phasellus consequat ipsum id nulla fermentum dignissim vitae eu odio. Aenean nec dui euismod ipsum faucibus faucibus sit amet vel lectus. Vestibulum cursus risus eget sapien facilisis, eu aliquet diam laoreet. Proin vitae accumsan tortor, in mollis magna. Curabitur hendrerit quam vitae posuere tincidunt. Sed erat enim, blandit a viverra eu, vehicula a mi"
      },
      {
        location: "Benagaluru, India",
        designation: "This is my 2nd designation",
        organization: "Company1",
        from: "Sep/2018",
        to: "Jul/2020",
        shortDesc: "This is some short desc",
        longDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed odio porttitor sem tincidunt scelerisque. Praesent ac tellus orci. Nullam sodales, nunc in finibus porttitor, justo leo scelerisque lectus, at volutpat purus libero sed nibh. In eleifend rhoncus feugiat. In rhoncus est a odio vestibulum auctor. Pellentesque nulla orci, placerat fringilla sodales sit amet, dignissim vel dui. Phasellus consequat ipsum id nulla fermentum dignissim vitae eu odio. Aenean nec dui euismod ipsum faucibus faucibus sit amet vel lectus. Vestibulum cursus risus eget sapien facilisis, eu aliquet diam laoreet. Proin vitae accumsan tortor, in mollis magna. Curabitur hendrerit quam vitae posuere tincidunt. Sed erat enim, blandit a viverra eu, vehicula a mi"
      }
    ]
  }

  export const getMovies = () => {
      return new Promise((resolve, reject) => {
          resolve(MOVIE_DATA)
      })
  }

  export const getPortfolios = () => new Promise((resolve, reject) => resolve(PORTFOLIO_DATA))