export default [
    {
        url: '/api/createUser',
        method: 'post',
        response: ({ body }) => {
            console.log('body>>>>>>>>', body);
            return {
                code: 200,
                message: 'ok',
                data: null,
            };
        },
    },
];