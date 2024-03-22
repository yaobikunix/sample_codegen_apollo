// import { FragmentType, useFragment } from './gql/fragment-masking'
// import { graphql } from 'graphql'
import { Link } from 'react-router-dom';

// export const FilmFragment = graphql(/* GraphQL */ `
//   fragment FilmItem on Film {
//     id
//     title
//     releaseDate
//     producers
//   }
// `)

const Film = (
  // props: 
{
  /* `film` property has the correct type 🎉 */
  // film: FragmentType<typeof FilmFragment>
}) => {
  // const film = useFragment(FilmFragment, props.film)
  return (
    <>
      <h3>
        {/* {film.title} */}
      </h3>
      <p>
        {/* {film.releaseDate} */}
      </p>

      {/* 戻るボタン */}
      <Link to="/">
        <button　style={{backgroundColor: 'lightsteelblue'}}>Back</button>
      </Link>
    </>
  )
}

export default Film
