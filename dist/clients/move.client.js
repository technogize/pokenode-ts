"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveClient = void 0;
const tslib_1 = require("tslib");
const constants_1 = require("../constants");
const base_1 = require("../structures/base");
/**
 * ### Move Client
 *
 * Client used to access the Move Endpoints:
 *  - [Moves](https://pokeapi.co/docs/v2#moves)
 *  - [Move Ailments](https://pokeapi.co/docs/v2#move-ailments)
 *  - [Move Battle Styles](https://pokeapi.co/docs/v2#move-battle-styles)
 *  - [Move Categories](https://pokeapi.co/docs/v2#move-categories)
 *  - [Move Damage Classes](https://pokeapi.co/docs/v2#move-damage-classes)
 *  - [Move Learn Methods](https://pokeapi.co/docs/v2#move-learn-methods)
 *  - [Move Move Targets](https://pokeapi.co/docs/v2#move-targets)
 * ---
 * See [PokéAPI Documentation](https://pokeapi.co/docs/v2#moves-section)
 */
class MoveClient extends base_1.BaseClient {
    /**
     * @argument clientOptions Options for the client.
     */
    constructor(clientOptions) {
        super(clientOptions);
    }
    /**
     * Get a Move by it's name
     * @param name The move name
     * @returns A Move
     */
    getMoveByName(name) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.Move}/${name}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Get a Move by it's ID
     * @param id The Move ID
     * @returns A Move
     */
    getMoveById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.Move}/${id}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Get a Move Ailment by it's name
     * @param name The Move Ailment name
     * @returns A Move Ailment
     */
    getMoveAilmentByName(name) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.MoveAilment}/${name}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Get a Move Ailment by it's ID
     * @param id The Move Ailment ID
     * @returns A Move Ailment
     */
    getMoveAilmentById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.MoveAilment}/${id}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Get a Move Battle Style by it's name
     * @param name The Move Battle Style name
     * @returns A Move Battle Style
     */
    getMoveBattleStyleByName(name) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.MoveBattleStyle}/${name}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Get a Move Battle Style by it's ID
     * @param id The Move Battle Style ID
     * @returns A Move Battle Style
     */
    getMoveBattleStyleById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.MoveBattleStyle}/${id}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Get a Move Battle Category by it's name
     * @param name The Move Category name
     * @returns A Move Category
     */
    getMoveCategoryByName(name) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.MoveCategory}/${name}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Get a Move Battle Category by it's ID
     * @param id The Move Category ID
     * @returns A Move Category
     */
    getMoveCategoryById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.MoveCategory}/${id}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Get a Move Damage Class by it's name
     * @param name The Move Damage Class name
     * @returns A Move Damage Class
     */
    getMoveDamageClassByName(name) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.MoveDamageClass}/${name}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Get a Move Damage Class by it's ID
     * @param id The Move Damage Class ID
     * @returns A Move Damage Class
     */
    getMoveDamageClassById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.MoveDamageClass}/${id}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Get a Move Learn Method by it's name
     * @param name The Move Learn Method name
     * @returns A Move Learn Method
     */
    getMoveLearnMethodByName(name) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.MoveLearnMethod}/${name}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Get a Move Learn Method by it's ID
     * @param id The Move Learn Method ID
     * @returns A Move Learn Method
     */
    getMoveLearnMethodById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.MoveLearnMethod}/${id}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Get a Move Target by it's name
     * @param name The Move Target name
     * @returns A Move Target
     */
    getMoveTargetByName(name) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.MoveTarget}/${name}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Get a Move Target by it's ID
     * @param id The Move Target ID
     * @returns A Move Target
     */
    getMoveTargetById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.MoveTarget}/${id}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * List Moves
     * @param offset The first item that you will get
     * @param limit How many Moves per page
     * @returns A list of Moves
     */
    listMoves(offset, limit) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.Move}?offset=${offset || 0}&limit=${limit || 20}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * List Move Ailments
     * @param offset The first item that you will get
     * @param limit How many Move Ailments per page
     * @returns A list of Move Ailments
     */
    listMoveAilments(offset, limit) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.MoveAilment}?offset=${offset || 0}&limit=${limit || 20}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * List Move Battle Styles
     * @param offset The first item that you will get
     * @param limit How many Move Battle Styles per page
     * @returns A list of Move Battle Styles
     */
    listMoveBattleStyles(offset, limit) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.MoveBattleStyle}?offset=${offset || 0}&limit=${limit || 20}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * List Move Categories
     * @param offset The first item that you will get
     * @param limit How many Move Categories per page
     * @returns A list of Move Categories
     */
    listMoveCategories(offset, limit) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.MoveCategory}?offset=${offset || 0}&limit=${limit || 20}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * List Move Damage Classes
     * @param offset The first item that you will get
     * @param limit How many Move Damage Classes per page
     * @returns A list of Move Damage Classes
     */
    listMoveDamageClasses(offset, limit) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.MoveDamageClass}?offset=${offset || 0}&limit=${limit || 20}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * List Move Learn Methods
     * @param offset The first item that you will get
     * @param limit How many Move Learn Methods per page
     * @returns A list of Move Learn Methods
     */
    listMoveLearnMethods(offset, limit) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.MoveLearnMethod}?offset=${offset || 0}&limit=${limit || 20}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * List Move Targets
     * @param offset The first item that you will get
     * @param limit How many Move Targets per page
     * @returns A list of Move Targets
     */
    listMoveTargets(offset, limit) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${constants_1.Endpoints.MoveTarget}?offset=${offset || 0}&limit=${limit || 20}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
}
exports.MoveClient = MoveClient;
