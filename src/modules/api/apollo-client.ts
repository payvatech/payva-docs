import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import Cookies from 'js-cookie'

import { COOKIES_KEYS } from '@/config/const'

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL + '/graphql',
})

type LinkContext = {
  headers?: Record<string, string>
}

const authLink = setContext((_, { headers }: LinkContext) => {
  let token = Cookies.get(COOKIES_KEYS.TOKEN)
  if (!token && typeof window !== 'undefined') {
    token = window.localStorage.getItem(COOKIES_KEYS.TOKEN) ?? ''
  }

  const isImpersonating = Cookies.get(COOKIES_KEYS.ADMIN_TOKEN) ? 'true' : 'false'

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
      'x-impersonating': isImpersonating,
    },
  }
})

const createApolloClient = () => {
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            partner: {
              merge(existing: Record<string, unknown> = {}, incoming: Record<string, unknown>) {
                return { ...existing, ...incoming }
              },
            },
          },
        },
        Contract: {
          fields: {
            customer: {
              merge(existing: Record<string, unknown> = {}, incoming: Record<string, unknown>) {
                return { ...existing, ...incoming }
              },
            },
          },
        },
      },
    }),
  })
}

export { createApolloClient }
