import { useEffect, useRef } from 'react';
import './Layout.scss';
import { useSplitText } from '../../../hooks/useText';

export default function Layout({ children, title }) {
	const refFrame = useRef(null);
	const refTitle = useRef(null);
	//useeffect앚고에서 자주 쓰일만함 특정 함수를 호출해야됨
	//use로 시작하는 커스텀훅은 특자함수 안쪽에서 호출불가
	//해당 hook이 함수를 반환하도록 처리
	const splitText = useSplitText();
	useEffect(() => {
		//아래처럼 custom hook이 반환한 함수를 hook이나 핸들러 함수 내부에서 사용가능
		splitText(refTitle.current, title, 0.7, 0.1);
		setTimeout(() => {
			refFrame.current.classList.add('on');
		}, 300);
	}, []);
	return (
		<main ref={refFrame} className={`Layout ${title}`}>
			<h1 ref={refTitle}>{title}</h1>
			<div className='bar'></div>
			{children}
		</main>
	);
}
