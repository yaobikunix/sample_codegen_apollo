import { 
  AllFilmsWithVariablesQueryQuery,
  AllFilmsWithVariablesQueryDocument,
  AllFilmsWithVariablesQueryQueryVariables, 
} from './graphqls/generated';
import Client from './lib/client';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


const Film = () => {
  // フィルムデータを取得する数
  const getItemCount = 3;

  // Filmsのデータを保持するための状態
  const [films, setFilms] = useState<AllFilmsWithVariablesQueryQuery | null>(null);

  useEffect(() => {
    async function fetchFilms() {
      try {
        const { data } = await Client.query<AllFilmsWithVariablesQueryQuery, AllFilmsWithVariablesQueryQueryVariables>({
          query: AllFilmsWithVariablesQueryDocument,
          variables: {
            first: getItemCount
          }
        });

        // 取得したデータで状態を更新
        setFilms(data);
        alert('フィルムデータを取得しました。');
      } catch (error) {
        console.error("データの取得中にエラーが発生しました:", error);
      }
    }

    // フィルムデータを取得する
    fetchFilms();
  }, [getItemCount])

  // データがロードされたかどうかを確認し、そうでなければローディングインジケーターを表示する
  if (!films?.allFilms?.edges) {
    return <div>Now Loading...</div>
  }
  console.log(films?.allFilms?.edges);

  return (
    <>
      {
        films.allFilms.edges.map((edge) => (
          //edgeまたはnodeがnull、またはundefinedの場合は、何もレンダリングはしない
          edge?.node? (
            <div key={edge.node.id}>
              <h3>{edge.node.title}</h3>
              <p>Release Date: {edge.node.releaseDate}</p>
              <p>Director: {edge.node.director}</p>
            </div>
          ) : null
        ))
      }

      {/* 戻るボタン */}
      <Link to="/">
        <button　style={{backgroundColor: 'lightsteelblue'}}>Back</button>
      </Link>
    </>
  )
}

export default Film