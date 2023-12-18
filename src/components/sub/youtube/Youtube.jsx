import Layout from '../../common/layout/Layout';
import './Youtube.scss';
import { useCustomText } from '../../../hooks/useText';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// awit 쓰는 이유는 코드 효율화 때문에 쓰는 것
// const fetchYoutube = () => {
// 	const api_key = 'AIzaSyDC60bIIkAJFzy7ji4a0Eo3AX6tYudhe1w';
// 	const pid = 'PLYOPkdUKSFgWqafuDQN9di3uLJoTV3L3W';
// 	const num = 10;
// 	const baseURL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${api_key}&part=snippet&playlistId=${pid}&maxResults=${num}`;
// 	fetch(baseURL)
// 		.then((data) => data.json())
// 		.then((json) => {
// 			setVids(json.items);
// 			console.log(Vids);
// 		});
// 	setVids(json.items);
// 	console.log(Vids);
// };

export default function Youtube() {
	const Vids = useSelector(store => store.youtubeReducer.youtube);
	const customText = useCustomText('combined');
	const shortenText = useCustomText('short');

	return (
		<Layout title={'Youtube'}>
			{Vids?.map(data => {
				const [date, time] = data.snippet.publishedAt.split('T');

				return (
					<article key={data.id}>
						<h2>{shortenText(data.snippet.title, 50)}</h2>

						<div className='txt'>
							<p>{shortenText(data.snippet.description, 250)}</p>
							<div className='infoBox'>
								<span>{customText(date, '.')}</span>
								<em>{time.split('Z')[0]}</em>
							</div>
						</div>

						<div className='pic'>
							<Link to={`/detail/${data.id}`}>
								<img src={data.snippet.thumbnails.standard.url} alt={data.snippet.title} />
							</Link>
						</div>
					</article>
				);
			})}
		</Layout>
	);
}
