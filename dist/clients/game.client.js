"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameClient = void 0;
const tslib_1 = require("tslib");
const constants_1 = require("../constants");
const base_1 = require("../structures/base");
/**
 * ### Game Client
 *
 * Client used to access the Game Endpoints:
 *  - [Generations](https://pokeapi.co/docs/v2#generations)
 *  - [Pokedexes](https://pokeapi.co/docs/v2#pokedexes)
 *  - [Versions](https://pokeapi.co/docs/v2#version)
 *  - [Version Groups](https://pokeapi.co/docs/v2#version-groups)
 * ---
 * See [PokéAPI Documentation](https://pokeapi.co/docs/v2#games-section)
 */
class GameClient extends base_1.BaseClient {
    /**
     * @argument clientOptions Options for the client.
     */
    constructor(clientOptions) {
        super(clientOptions);
    }
    /**
     * Get a Generation by it's name
     * @param name The generation name
     * @returns A Generation
     */
    getGenerationByName(name) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.Generation}/${name}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Get a Generation by it's ID
     * @param id The generation ID
     * @returns A Generation
     */
    getGenerationById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.Generation}/${id}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Get a Pokedex by it's name
     * @param name The pokedex name
     * @returns A Pokedex
     */
    getPokedexByName(name) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.Pokedex}/${name}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Get a Pokedex by it's ID
     * @param id The pokedex ID
     * @returns A Pokedex
     */
    getPokedexById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.Pokedex}/${id}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Get a Version by it's name
     * @param name The version name
     * @returns A Version
     */
    getVersionByName(name) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.Version}/${name}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Get a Version by it's ID
     * @param id The version ID
     * @returns A Version
     */
    getVersionById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.Version}/${id}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Get a Version Group by it's name
     * @param name The version group name
     * @returns A Version Group
     */
    getVersionGroupByName(name) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.VersionGroup}/${name}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Get a Version Group by it's ID
     * @param id The version group ID
     * @returns A Version Group
     */
    getVersionGroupById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.VersionGroup}/${id}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * List Generations
     * @param offset The first item that you will get
     * @param limit How many Generations per page
     * @returns A list of Generations
     */
    listGenerations(offset, limit) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.Generation}?offset=${offset || 0}&limit=${limit || 20}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * List Pokedexes
     * @param offset The first item that you will get
     * @param limit How many Pokedexes per page
     * @returns A list of Pokedexes
     */
    listPokedexes(offset, limit) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.Pokedex}?offset=${offset || 0}&limit=${limit || 20}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * List Versions
     * @param offset The first item that you will get
     * @param limit How many Versions per page
     * @returns A list of Versions
     */
    listVersions(offset, limit) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.Version}?offset=${offset || 0}&limit=${limit || 20}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * List Version Groups
     * @param offset The first item that you will get
     * @param limit How many Version Groups per page
     * @returns A list of Version Groups
     */
    listVersionGroups(offset, limit) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.VersionGroup}?offset=${offset || 0}&limit=${limit || 20}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
}
exports.GameClient = GameClient;
