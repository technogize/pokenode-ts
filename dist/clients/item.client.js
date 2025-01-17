"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemClient = void 0;
const tslib_1 = require("tslib");
const endpoints_1 = require("../constants/endpoints");
const base_1 = require("../structures/base");
/**
 * ### Item Client
 *
 * Client used to access the Item Endpoints:
 *  - [Item](https://pokeapi.co/docs/v2#item)
 *  - [Item Attributes](https://pokeapi.co/docs/v2#item-attributes)
 *  - [Item Categories](https://pokeapi.co/docs/v2#item-categories)
 *  - [Item Filing Effects](https://pokeapi.co/docs/v2#item-fling-effects)
 *  - [Item Pockets](https://pokeapi.co/docs/v2#item-pockets)
 * ---
 * See [PokéAPI Documentation](https://pokeapi.co/docs/v2#items-section)
 */
class ItemClient extends base_1.BaseClient {
    /**
     * @argument clientOptions Options for the client.
     */
    constructor(clientOptions) {
        super(clientOptions);
    }
    /**
     * Get an Item by it's name
     * @param name The item name
     * @returns An Item
     */
    getItemByName(name) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${endpoints_1.Endpoints.Item}/${name}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Get an Item by it's ID
     * @param id The item ID
     * @returns An Item
     */
    getItemById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${endpoints_1.Endpoints.Item}/${id}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Get an Item Attribute by it's name
     * @param name The item attribute name
     * @returns An Item Attribute
     */
    getItemAttributeByName(name) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${endpoints_1.Endpoints.ItemAttribute}/${name}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Get an Item Attribute by it's ID
     * @param id The item attribute ID
     * @returns An Item Attribute
     */
    getItemAttributeById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${endpoints_1.Endpoints.ItemAttribute}/${id}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Get an Item Category by it's name
     * @param name The item category name
     * @returns An Item Category
     */
    getItemCategoryByName(name) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${endpoints_1.Endpoints.ItemCategory}/${name}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Get an Item Category by it's ID
     * @param id The item category ID
     * @returns An Item Category
     */
    getItemCategoryById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${endpoints_1.Endpoints.ItemCategory}/${id}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Get an Item Filing Effect by it's name
     * @param name The item filing effect name
     * @returns An Item Filing Effect
     */
    getItemFlingEffectByName(name) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${endpoints_1.Endpoints.ItemFlingEffect}/${name}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Get an Item Filing Effect by it's ID
     * @param id The item filing effect ID
     * @returns An Item Filing Effect
     */
    getItemFlingEffectById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${endpoints_1.Endpoints.ItemFlingEffect}/${id}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Get an Item Pocket by it's name
     * @param name The item pocket name
     * @returns An Item Pocket
     */
    getItemPocketByName(name) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${endpoints_1.Endpoints.ItemPocket}/${name}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * Get an Item Pocket by it's ID
     * @param id The item pocket ID
     * @returns An Item Pocket
     */
    getItemPocketById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${endpoints_1.Endpoints.ItemPocket}/${id}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * List Items
     * @param offset The first item that you will get
     * @param limit How many Items per page
     * @returns A list of Items
     */
    listItems(offset, limit) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${endpoints_1.Endpoints.Item}?offset=${offset || 0}&limit=${limit || 20}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * List Item Attributes
     * @param offset The first item that you will get
     * @param limit How many Item Attributes per page
     * @returns A list of Item Attributes
     */
    listItemAttributes(offset, limit) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${endpoints_1.Endpoints.ItemAttribute}?offset=${offset || 0}&limit=${limit || 20}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * List Item Categories
     * @param offset The first item that you will get
     * @param limit How many Item Categories per page
     * @returns A list of Item Categories
     */
    listItemCategories(offset, limit) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${endpoints_1.Endpoints.ItemCategory}?offset=${offset || 0}&limit=${limit || 20}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * List Item Filing Effects
     * @param offset The first item that you will get
     * @param limit How many Item Filing Effects per page
     * @returns A list of Item Filing Effects
     */
    listItemFilingEffects(offset, limit) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${endpoints_1.Endpoints.ItemFlingEffect}?offset=${offset || 0}&limit=${limit || 20}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
    /**
     * List Item Pockets
     * @param offset The first item that you will get
     * @param limit How many Item Pockets per page
     * @returns A list of Item Pockets
     */
    listItemPockets(offset, limit) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api
                    .get(`${endpoints_1.Endpoints.ItemPocket}?offset=${offset || 0}&limit=${limit || 20}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error));
            });
        });
    }
}
exports.ItemClient = ItemClient;
