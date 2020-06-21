

module.exports.policies = {

  
  '*': 'authenticated',
  'user': {
		'*': true
  },
  'swagger':{
    '*': true
  },
  'account': {
		'*': true
	}
};
