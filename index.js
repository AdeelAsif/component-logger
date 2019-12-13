const disable = process.env.NODE_ENV == 'production';

const contextTextColor = '#FF8C00';
const prefixStyling = "color: " + contextTextColor + "; font-weight: normal; font-size: small";


function logLocal (prefix, color) {
	var context = prefix;
	var style = prefixStyling;
	if ( color ) style = style.replace(contextTextColor, color);
	if ( disable )
		return () => {};
    return Function.prototype.bind.call(console.log, console, "%c" + context, style);
}

function warnLocal (prefix, color) {
	var context = prefix;
	var style = prefixStyling;
	if ( color ) style = style.replace(contextTextColor, color);
	if ( disable )
		return () => {};
    return Function.prototype.bind.call(console.warn, console, "%c" + context, style);
}

function infoLocal (prefix, color) {
	var context = prefix;
	var style = prefixStyling;
	if ( color ) style = style.replace(contextTextColor, color);
	if ( disable )
		return () => {};
    return Function.prototype.bind.call(console.info, console, "%c" + context, style);
}

function errorLocal (prefix, color) {
	var context = prefix;
	var style = prefixStyling;
	if ( color ) style = style.replace(contextTextColor, color);
	if ( disable )
		return () => {};
    return Function.prototype.bind.call(console.error, console, "%c" + context, style);
}

function debugLocal (prefix, color) {
	var context = prefix;
	if ( disable )
		return () => {};
    return Function.prototype.bind.call(console.debug, console, context);
}


function Logger(prefix, color) {
	prefix = prefix + " ==> \n";
	this.prefix = prefix;
	this.log = logLocal(prefix, color);
	this.warn = warnLocal(prefix, color);
	this.info = infoLocal(prefix, color);
	this.error = errorLocal(prefix, color);
	this.debug = debugLocal(prefix, color);
}

module.exports = Logger;