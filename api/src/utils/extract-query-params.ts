export function extractQueryParams(query: string) {
    return query.substring(1).split('&').reduce((queryParams: any, param) => {
        const [key, value] = param.split('=')
        
        queryParams[key] = value;

        return queryParams;
    }, {})
}