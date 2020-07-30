
/**
 * 
 * @param {boolean} [includeDomain=false]
 * @return {string} path _without_ trailing slash
 */
window.getBasePath = function (includeDomain) {
	return (includeDomain ? location.origin : '')
		+ location.pathname.substr(0, location.pathname.lastIndexOf('/'));
}

/**
 * 
 * @param {string} html
 * @return {HTMLElement|DocumentFragment}
 */
window.parseHTML = function (html) {
	var frag = document.createRange().createContextualFragment(html);
	
	return frag.childNodes.length === 1 && frag.firstChild.nodeType === Node.ELEMENT_NODE
		? frag.firstChild		// e.g. '<div>pwn</div>'
		: frag;					// e.g. 'le <div>pwn</div>'
}

/**
 * 
 * @param {string} string
 * @return {string}
 */
window.htmlspecialchars = function (string) {
	var replace = {
		'&': 'amp',
		'<': 'lt',
		'>': 'gt',
		'"': 'quot',
		"'": '#x27',
		'/': '#x2F',
	};
	
	return string.replace(/[&<>"'\/]/g, function (char) {
		return '&' + replace[char] + ';';
	});
}



for (const ddn of document.querySelectorAll('h1')) {
	import('./modules/module.js').then(mod => mod.default(ddn));
}
