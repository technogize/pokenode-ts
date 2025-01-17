"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContestClient = void 0;
const tslib_1 = require("tslib");
const constants_1 = require("../constants");
const base_1 = require("../structures/base");
/**
 * ### Contest Client
 *
 * Client used to access the Contest Endpoints:
 *  - [Contest Types](https://pokeapi.co/docs/v2#contest-types)
 *  - [Contest Effects](https://pokeapi.co/docs/v2#contest-effects)
 *  - [Super Contest Effects](https://pokeapi.co/docs/v2#super-contest-effects)
 * ---
 * See [PokéAPI Documentation](https://pokeapi.co/docs/v2#contests-section)
 */
class ContestClient extends base_1.BaseClient {
    /**
     * @argument clientOptions Options for the client.
     */
    constructor(clientOptions) {
        super(clientOptions);
    }
    /**
     * Get a Contest Type by it's name
     * @param name  The contest type name
     * @returns A Contest Type
     */
    getContestTypeByName(name) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.ContestType}/${name}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Get a Contest Type by it's ID
     * @param id The Contest Type ID
     * @returns A Contest Type
     */
    getContestTypeById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.ContestType}/${id}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Get a Contest Effect by it's ID
     * @param id The Contest Effect ID
     * @returns Contest Effect
     */
    getContestEffectById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.ContestEffect}/${id}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Get a Super Contest Effect by it's ID
     * @param id The Super Contest Effect ID
     * @returns Super Contest Effect
     */
    getSuperContestEffectById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.SuperContestEffect}/${id}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * List Contest Types
     * @param offset The first item that you will get
     * @param limit How many contest types per page
     * @returns A list of contest types
     */
    listContestTypes(offset, limit) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.ContestType}?offset=${offset || 0}&limit=${limit || 20}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * List Contest Effects
     * @param offset The first item that you will get
     * @param limit How many contest effects per page
     * @returns A list of contest effects
     */
    listContestEffects(offset, limit) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.ContestEffect}?offset=${offset || 0}&limit=${limit || 20}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * List Super Contest Effects
     * @param offset The first item that you will get
     * @param limit How many Super Contest Effect per page
     * @returns A list of Super Contest Effect
     */
    listSuperContestEffects(offset, limit) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.SuperContestEffect}?offset=${offset || 0}&limit=${limit || 20}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
}
exports.ContestClient = ContestClient;
