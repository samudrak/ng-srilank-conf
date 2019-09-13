window.loadComponent = ( function() {
	function fetchAndParse( URL ) {
		return fetch( URL ).then( ( response ) => {
			return response.text();
		} ).then( ( html ) => {
			const parser = new DOMParser();
			const document = parser.parseFromString( html, 'text/html' );
            const head = document.head;
     		const template = head.querySelector( 'template' );
			const style = head.querySelector( 'style' );
			const script = head.querySelector( 'script' );

			return {
				template,
				style,
                script,
                document
			};
		} );
	}

	function loadComponent( URL ) {
		return fetchAndParse( URL );
	}

	return loadComponent;
}() );
