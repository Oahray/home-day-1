var dataTypes = function(data) {
  if (data === null || data === undefined) {
    return "no value";
  } 

  else if (typeof data === 'boolean'){
    return data;
  }

  else if (typeof(data) === 'number') {
    if (data < 100) {
      return "less than 100"; 
    } 
    else if (data === 100) {
      return "equal to 100" ;  
    } 
    else if (data > 100) {
    return "more than 100";
    }
  } 

  else if (typeof(data) === 'string') {
    return data.length;
  } 

  else if (Array.isArray(data)) {
    return data[2];    
  } 

  else if (typeof(data) === 'function'){
    var callback = function(arg) {
      if (arg === true) {
      return "called callback";
      }
    };
    return callback(true);
  } 

  else {
    return undefined;
  }
}; 

module.exports = dataTypes;