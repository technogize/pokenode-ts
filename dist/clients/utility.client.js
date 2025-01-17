"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilityClient = void 0;
const tslib_1 = require("tslib");
const constants_1 = require("../constants");
const base_1 = require("../structures/base");
/**
 * ### Utility Client
 *
 * Client used to access the Utility Endpoints:
 *  - [Languages](https://pokeapi.co/docs/v2#utility-section)
 *  - Resources
 * ---
 * See [PokéAPI Documentation](https://pokeapi.co/docs/v2#utility-section)
 */
class UtilityClient extends base_1.BaseClient {
    constructor(clientOptions) {
        super(clientOptions);
    }
    /**
     * Get a Language by it's ID
     * @param id The Language ID
     * @returns Language
     */
    getLanguageById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.Language}/${id}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Get a Language by it's name
     * @param name The Language name
     * @returns Language
     */
    getLanguageByName(name) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.Language}/${name}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Get a Resource by it's url
     * @param url The Resource url
     * @returns Resource
     */
    /* eslint-disable @typescript-eslint/no-explicit-any */
    getResourceByUrl(url) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(url, { baseURL: '' })
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /* eslint-enable @typescript-eslint/no-explicit-any */
    /**
     * List Languages
     * @param offset The first item that you will get
     * @param limit How many Languages per page
     * @returns A list of Languages
     */
    listLanguages(offset, limit) {
        return new Promise((resolve, reject) => {
            this.api
                .get(`${constants_1.Endpoints.Language}?offset=${offset || 0}&limit=${limit || 20}`)
                .then((response) => resolve(response.data))
                .catch((error) => reject(error));
        });
    }
}
exports.UtilityClient = UtilityClient;
