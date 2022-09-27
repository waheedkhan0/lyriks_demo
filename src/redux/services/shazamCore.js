import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const ShazamCoreApi = createApi({
    reducerPath:"shazamCoreApi",
    baseQuery: fetchBaseQuery({
        baseUrl:"https://shazam-core.p.rapidapi.com/v1",
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key','e6cad9a695msh213190d8fb38bfap10efbejsnb6cfdfb5d5f7');
            // headers.set('X-RapidAPI-Host','shazam-core.p.rapidapi.com');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts : builder.query({query: () => '/charts/world'})
    })
});

export const {
    useGetTopChartsQuery,
} = ShazamCoreApi;