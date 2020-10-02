import { RestClient } from '@girder/components/src';

const girderApi = (new URL('/api/v1', process.env.VUE_APP_GIRDER_API)).href;
const http = new RestClient({ apiRoot: girderApi });

Object.assign(
  http,
  {
    async listSimulations(sortBy, sortDesc) {
      const { data } = await this.get('nli/simulation', {
        params: {
          sort: sortBy,
          sortdir: sortDesc ? 1 : -1,
        },
      });
      return data;
    },
    async archiveSimulation(id) {
      await this.post(`nli/simulation/${id}/archive`);
    },
    async runSimulation(params) {
      return this.post('nli/job', {}, { params }).data;
    },
  },
);

export default http;
export { girderApi };
