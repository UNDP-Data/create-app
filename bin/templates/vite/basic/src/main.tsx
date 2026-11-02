import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const sendHeightForIframes = () =>
	window.parent.postMessage(
		{ type: "iframe-height", height: document.documentElement.scrollHeight },
		"*",
	);

new ResizeObserver(sendHeightForIframes).observe(document.documentElement);
window.addEventListener("load", sendHeightForIframes);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
