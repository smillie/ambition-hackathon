module.exports.annotate = function (person, callback) {
	
  if (person.postcode) {
  	db.getPostCodeInfo(person.postcode, function(e, result) {
      person.internet = result.internet;
      person.isdeprived = result.isdeprived;
      person.ruralClassification = result.reuralClassification;
	  
      callback(null, person);
    });
  } else {
    callback(null, person);
  }


};



// get internet from postcode
// get deprivation from postcode
// get rurality from index 
// Put the person back in the index