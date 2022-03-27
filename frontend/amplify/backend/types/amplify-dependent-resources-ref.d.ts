export type AmplifyDependentResourcesAttributes = {
  'api': {
    'diveboard': {
      'GraphQLAPIIdOutput': 'string',
      'GraphQLAPIEndpointOutput': 'string'
    }
  },
  'auth': {
    'userPoolGroups': {
      'AdminGroupRole': 'string'
    },
    'diveboard75486fb075486fb0': {
      'IdentityPoolId': 'string',
      'IdentityPoolName': 'string',
      'UserPoolId': 'string',
      'UserPoolArn': 'string',
      'UserPoolName': 'string',
      'AppClientIDWeb': 'string',
      'AppClientID': 'string'
    }
  },
  'function': {
    'diveboardLambda': {
      'Name': 'string',
      'Arn': 'string',
      'Region': 'string',
      'LambdaExecutionRole': 'string'
    },
    'testLambda': {
      'Name': 'string',
      'Arn': 'string',
      'Region': 'string',
      'LambdaExecutionRole': 'string'
    }
  }
};
