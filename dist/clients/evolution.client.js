"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvolutionClient = void 0;
const tslib_1 = require("tslib");
const constants_1 = require("../constants");
const base_1 = require("../structures/base");
/**
 * ### Evolution Client
 *
 * Client used to access the Berry Endpoints:
 *  - [Evolution Chains](https://pokeapi.co/docs/v2#evolution-chains)
 *  - [Evolution Triggers](https://pokeapi.co/docs/v2#evolution-triggers)
 * ---
 * See [PokéAPI Documentation](https://pokeapi.co/docs/v2#evolution-section)
 */
class EvolutionClient extends base_1.BaseClient {
    /**
     * @argument clientOptions Options for the client.
     */
    constructor(clientOptions) {
        super(clientOptions);
    }
    /**
     * Get an Evolution Chain by it's ID
     * @param id The Evolution Chain ID
     * @returns An Evolution Chain
     */
    getEvolutionChainById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.EvolutionChain}/${id}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Get an Evolution Trigger by it's ID
     * @param id The Evolution Trigger ID
     * @returns An Evolution Trigger
     */
    getEvolutionTriggerById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.EvolutionTrigger}/${id}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => {
                    reject(error);
                });
            });
        });
    }
    /**
     * Get an Evolution Trigger by it's name
     * @param name The Evolution Trigger name
     * @returns An Evolution Trigger
     */
    getEvolutionTriggerByName(name) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.EvolutionTrigger}/${name}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * List Evolution Chains
     * @param offset The first item that you will get
     * @param limit How many Evolution Chains per page
     * @returns A list of Evolution Chains
     */
    listEvolutionChains(offset, limit) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.EvolutionChain}?offset=${offset || 0}&limit=${limit || 20}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * List Evolution Triggers
     * @param offset The first item that you will get
     * @param limit How many Evolution Triggers per page
     * @returns A list of Evolution Triggers
     */
    listEvolutionTriggers(offset, limit) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.EvolutionTrigger}?offset=${offset || 0}&limit=${limit || 20}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
}
exports.EvolutionClient = EvolutionClient;
