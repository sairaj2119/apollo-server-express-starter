import helloResolver from './helloResolver.js';

export default {
  Query: {
    ...helloResolver.Query,
  },
};
