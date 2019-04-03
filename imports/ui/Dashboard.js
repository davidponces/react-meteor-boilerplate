import React from 'react';

// import { Links } from '../api/links';
import PrivateHeader from './PrivateHeader';

export default () => {
	return (
		<div>
			<PrivateHeader title='Dashboard' />
			<div className='page-content'>Dashboard page content.</div>
		</div>
	);
};

// export default class Link extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<PrivateHeader title='Your Links!' />
// 				<AddLink />
// 				<LinksList />
// 			</div>
// 		);
// 	}
// }
