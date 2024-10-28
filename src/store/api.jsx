import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token = JSON.parse(localStorage.getItem("token"))

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://e-commerse-back-bulbul.vercel.app/" }),
    tagTypes: ['Category', 'Brand', 'Product', 'Cart'],
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (obj) => ({
                url: `/login`,
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: obj
            })
        }),
        registerUser: builder.mutation({
            query: (obj) => ({
                url: `/register`,
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: obj
            })
        }),
        allCategory: builder.query({
            query: () => ({
                url: `/categories/all`
            }),
            providesTags: ['Category'],
        }),
        getCategoryById: builder.query({
            query: (id) => ({
                url: `/categories/get/${id}`
            })
        }),
        allBrand: builder.query({
            query: () => ({
                url: `/brands/all`
            }),
            providesTags: ['Brand']
        }),
        getBrandById: builder.query({
            query: (id) => ({
                url: `/brands/get/${id}`
            })
        }),
        allProduct: builder.query({
            query: () => ({
                url: `/products/all`
            }),
            providesTags: ['Product']
        }),
        getProductById: builder.query({
            query: (id) => ({
                url: `/products/get/${id}`
            })
        }),
        filterProduct: builder.query({
            query: (params) => {
                const {
                    page,
                    limit,
                    sortBy,
                    sortOrder,
                    categoryId,
                    subcategoryId,
                    brandId,
                    color = [],
                    size = [],
                    minPrice,
                    maxPrice,
                    discount
                } = params;

                const colorStr = color.length > 0 ? color.join(',') : '';
                const sizeStr = size.length > 0 ? size.join(',') : '';

                let url = `products/all?page=${page}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}`;

                if (categoryId) url += `&categoryId=${categoryId}`;
                if (subcategoryId) url += `&subcategoryId=${subcategoryId}`;
                if (brandId) url += `&brandId=${brandId}`;
                if (minPrice) url += `&minPrice=${minPrice}`;
                if (maxPrice) url += `&maxPrice=${maxPrice}`;
                if (discount) url += `&discount=${discount}`;

                if (colorStr) url += `&color=${colorStr}`;
                if (sizeStr) url += `&size=${sizeStr}`;

                return url; 
            },
        }),
        searchProduct : builder.query({
            query : (q) => ({
                url : `/products/search?q=${q}`
            })
        }),
        allCart: builder.query({
            query: () => ({
                url: `/cart/all`,
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }),
            providesTags: ["Cart"]
        }),
        addCart: builder.mutation({
            query: (obj) => ({
                url: `/cart/add`,
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: obj
            }),
            invalidatesTags: ["Cart"]
        }),
        deleteCart: builder.mutation({
            query: (id) => ({
                url: `/cart/delete/${id}`,
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            }),
            invalidatesTags: ["Cart"]
        }),
        updateCart: builder.mutation({
            query: ({ productId, count }) => ({
                url: `/cart/change`,
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: { productId, count }
            }),
            invalidatesTags: ["Cart"]
        })
    })
})

export const {
    useLoginUserMutation,
    useRegisterUserMutation,
    useAllCategoryQuery,
    useGetCategoryByIdQuery,
    useAllBrandQuery,
    useGetBrandByIdQuery,
    useAllProductQuery,
    useSearchProductQuery,
    useGetProductByIdQuery,
    useFilterProductQuery,
    useAllCartQuery,
    useAddCartMutation,
    useDeleteCartMutation,
    useUpdateCartMutation
} = api;