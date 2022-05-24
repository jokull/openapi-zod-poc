module.exports = {
  api: {
    output: {
      mode: 'split',
      target: 'api/types.ts',
      prettier: true,
    },
    input: {
      target: './openapi.yaml',
      validation: false,
    },
  },
}
