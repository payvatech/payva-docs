import { type CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
  documents: 'src/**/*.{ts,tsx}',
  generates: {
    'src/modules/api/generated/graphql.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        // https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-operations#preresolvetypes
        preResolveTypes: false,
        scalars: {
          DateTime: 'Date',
          JSON: 'Record<string, unknown>',
        },
      },
    },
  },
  ignoreNoDocuments: true,
  hooks: { afterAllFileWrite: ['prettier --write'] },
}

export default config
