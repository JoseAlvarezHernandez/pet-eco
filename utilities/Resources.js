
export default class Resources {
    getCountries = async () => {
        try {
            const countries = await fetch('https://restcountries.eu/rest/v2/all');
            return countries;
        } catch (error) {
            return error;
        }
    }
}