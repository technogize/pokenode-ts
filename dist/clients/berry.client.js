"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BerryClient = void 0;
const tslib_1 = require("tslib");
const constants_1 = require("../constants");
const base_1 = require("../structures/base");
/**
 * ### Berry Client
 *
 * Client used to access the Berry Endpoints:
 *  - [Berries](https://pokeapi.co/docs/v2#berries)
 *  - [Berry Firmnesses](https://pokeapi.co/docs/v2#berry-firmnesses)
 *  - [Berry Flavors](https://pokeapi.co/docs/v2#berry-flavors)
 * ---
 * See [PokéAPI Documentation](https://pokeapi.co/docs/v2#berries-section)
 */
class BerryClient extends base_1.BaseClient {
    constructor(clientOptions) {
        super(clientOptions);
    }
    /**
     * Get a Berry by it's name
     * @param name The berry name
     * @returns A Berry
     */
    getBerryByName(name) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.Berry}/${name}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Get a Berry by it's ID
     * @param id The Berry ID
     * @returns A Berry
     */
    getBerryById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.Berry}/${id}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Get a Berry Firmness by it's ID
     * @param id The Berry ID
     * @returns Berry Firmness
     */
    getBerryFirmnessById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.BerryFirmness}/${id}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Get a Berry Firmness by it's ID
     * @param name The Berry name
     * @returns Berry Firmness
     */
    getBerryFirmnessByName(name) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.BerryFirmness}/${name}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Flavors determine whether a Pokémon will benefit or suffer from eating a berry based on their nature.
     * Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Flavor) for greater detail.
     * @param id The Berry Flavor ID
     * @returns Berry Flavor
     */
    getBerryFlavorById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.BerryFlavor}/${id}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Flavors determine whether a Pokémon will benefit or suffer from eating a berry based on their nature.
     * Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Flavor) for greater detail.
     * @param name The Berry Flavor name
     * @returns Berry Flavor
     */
    getBerryFlavorByName(name) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.BerryFlavor}/${name}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * List Berries
     * @param offset The first item that you will get
     * @param limit How many berries per page
     * @returns A list of berries
     */
    listBerries(offset, limit) {
        return new Promise((resolve, reject) => {
            this.api
                .get(`${constants_1.Endpoints.Berry}?offset=${offset || 0}&limit=${limit || 20}`)
                .then((response) => resolve(response.data))
                .catch((error) => reject(error));
        });
    }
    /**
     * List Berries
     * @param offset The first item that you will get
     * @param limit How many berry firmnesses per page
     * @returns A list of berry firmnesses
     */
    listBerryFirmnesses(offset, limit) {
        return new Promise((resolve, reject) => {
            this.api
                .get(`${constants_1.Endpoints.BerryFirmness}?offset=${offset || 0}&limit=${limit || 20}`)
                .then((response) => resolve(response.data))
                .catch((error) => reject(error));
        });
    }
    /**
     * List Berry Flavors
     * @param offset The first item that you will get
     * @param limit How many Berry Flavors per page
     * @returns A list of Berry Flavors
     */
    listBerryFlavors(offset, limit) {
        return new Promise((resolve, reject) => {
            this.api
                .get(`${constants_1.Endpoints.BerryFlavor}?offset=${offset || 0}&limit=${limit || 20}`)
                .then((response) => resolve(response.data))
                .catch((error) => reject(error));
        });
    }
}
exports.BerryClient = BerryClient;
