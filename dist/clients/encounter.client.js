"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncounterClient = void 0;
const tslib_1 = require("tslib");
const constants_1 = require("../constants");
const base_1 = require("../structures/base");
/**
 * ### Encounter Client
 *
 * Client used to access the Encounter Endpoints:
 *  - [Encounter Methods](https://pokeapi.co/docs/v2#encounter-methods)
 *  - [Encounter Conditions](https://pokeapi.co/docs/v2#encounter-conditions)
 *  - [Encounter Condition Values](https://pokeapi.co/docs/v2#encounter-condition-values)
 * ---
 * See [PokéAPI Documentation](https://pokeapi.co/docs/v2#encounters-section)
 */
class EncounterClient extends base_1.BaseClient {
    /**
     * @argument clientOptions Options for the client.
     */
    constructor(clientOptions) {
        super(clientOptions);
    }
    /**
     * Get an Encounter Method by it's name
     * @param name The Encounter Method name
     * @returns An Encounter Method
     */
    getEncounterMethodByName(name) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.EncouterMethod}/${name}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Get an Encounter Method by it's ID
     * @param id The Encounter Method ID
     * @returns An Encounter Method
     */
    getEncounterMethodById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.EncouterMethod}/${id}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Get an Encounter Condition by it's ID
     * @param id The Encounter Condition ID
     * @returns An Encounter Condition
     */
    getEncounterConditionById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.EncounterCondition}/${id}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Get an Encounter Condition by it's name
     * @param name The Encounter Condition name
     * @returns An Encounter Condition
     */
    getEncounterConditionByName(name) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.EncounterCondition}/${name}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Get an Encounter Condition Value by it's name
     * @param name The Encounter Condition Value name
     * @returns An Encounter Condition Value
     */
    getEncounterConditionValueByName(name) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.EncouterConditionValue}/${name}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Get an Encounter Condition Value by it's ID
     * @param id The Encounter Condition Value ID
     * @returns An Encounter Condition Value
     */
    getEncounterConditionValueById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.EncouterConditionValue}/${id}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * List Encounter Methods
     * @param offset The first item that you will get
     * @param limit How many Encounter Methods per page
     * @returns A list of Encounter Methods
     */
    listEncounterMethods(offset, limit) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.EncouterMethod}?offset=${offset || 0}&limit=${limit || 20}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * List Encounter Conditions
     * @param offset The first item that you will get
     * @param limit How many Encounter Conditions per page
     * @returns A list of Encounter Methods
     */
    listEncounterConditions(offset, limit) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.EncounterCondition}?offset=${offset || 0}&limit=${limit || 20}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * List Encounter Condition Values
     * @param offset The first item that you will get
     * @param limit How many Encounter Condition Values per page
     * @returns A list of Encounter Condition Values
     */
    listEncounterConditionValues(offset, limit) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.EncouterConditionValue}?offset=${offset || 0}&limit=${limit || 20}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
}
exports.EncounterClient = EncounterClient;
