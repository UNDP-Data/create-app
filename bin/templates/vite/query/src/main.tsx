import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import * as TanStackQueryProvider from "./integration/tanstack-query";

const sendHeightForIframes = () =>
	window.parent.postMessage(
		{ type: "iframe-height", height: document.documentElement.scrollHeight },
		"*",
	);

new ResizeObserver(sendHeightForIframes).observe(document.documentElement);
window.addEventListener("load", sendHeightForIframes);

const TanStackQueryProviderContext = TanStackQueryProvider.getContext();
const rootElement = document.getElementById("root");
if (rootElement) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<StrictMode>
			<TanStackQueryProvider.Provider {...TanStackQueryProviderContext}>
				<App />
			</TanStackQueryProvider.Provider>
		</StrictMode>,
	);
}
