import { lambdaHttpHandler } from '../../utilities/lambda-utils';

export const handler = lambdaHttpHandler(async (event) => {
  return {
    statusCode: 200,
    response: {
      message: 'Up and running'
    }
  };
});
