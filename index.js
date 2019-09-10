module.exports = ( code, mode ) => {

	return mode ? eval( code ) : new Function( code )();

}
