export const SELECT_BRAND = 'SELECT_BRAND';

export const selectBrand = (brand) => {
    return {
        type: SELECT_BRAND,
        payload: brand
    };
};