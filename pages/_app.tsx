import type { AppProps } from 'next/app';
import { store } from './store';
import { Provider } from 'react-redux';
import { NextUIProvider } from '@nextui-org/react';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<NextUIProvider>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</NextUIProvider>
	);
};

export default MyApp;
