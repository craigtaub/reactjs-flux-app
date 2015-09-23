# Simple ReactJS Flux App

Setup

    npm install


Build the app. Its fully transformed server-side so no work on client.

    grunt

Set watcher on the app

    grunt watch

Does not contain a web-server. Runs on `indx.html`

NOTES
- Data is set when page loads.
- All.jsx is Controller-View.
- Item.jsx fires action to update item details
- About.jsx simple component using props/state and click handler.
