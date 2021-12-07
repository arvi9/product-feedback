import { FastifyPluginCallback } from 'fastify';
import status from '../lib/httpStatusCodes';
import { tokenSchema } from './schemas';

const authRoutes: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.route<{
    Body: { username: string, password: string },
  }>({
    method: 'POST',
    url: '/token',
    schema: tokenSchema,
    handler: async (request, reply) => {
      const { username, password = '' } = request.body;
      // eslint-disable-next-line no-console
      console.log(username, password);
      reply
        .status(status.HTTP_201_CREATED)
        .send(status.HTTP_201_CREATED);
    },
  });
  done();
};

export default authRoutes;
