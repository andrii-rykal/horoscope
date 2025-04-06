import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface CatFact {
  fact: string;
  length: number;
}

export const catFactsApi = createApi({
  reducerPath: 'catFactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://catfact.ninja/' }),
  endpoints: (builder) => ({
    getFact: builder.query<CatFact, string>({
      query: () => 'fact',
      serializeQueryArgs: ({ queryArgs }) => queryArgs,
      merge: undefined,
      forceRefetch: ({ currentArg, previousArg }) => currentArg !== previousArg,
    }),
  }),
});

export const { useGetFactQuery } = catFactsApi;
