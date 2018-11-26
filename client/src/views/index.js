import AsyncComponent from 'app/components/common/AsyncComponent';

const Home = AsyncComponent(() => import('./Home'))

export {
	Home
}