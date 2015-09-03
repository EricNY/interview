String.prototype.endsWith = function(search, position) {
	
	var index = (this.length -1) - (search.length - 1);

	if ( arguments.length > 1 ) {

		return this.substr( 0, position ).endsWith( search );

	}
	
	if ( this.substr(index) === search ) {
	
		return true;
	
	}
  
  return false;

};
