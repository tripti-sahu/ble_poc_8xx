/* eslint-disable object-shorthand */
const { Common } = loadLibrary("../helpers/common");

/**
 * @class
 * @summary This a class which converts string to selector with specific pattern
 */
class Find {
    constructor(controller) {
        this._controller = controller;
        this._common = new Common();
    }

    /**
     * @summary Get locator by valuekey pattern
     * @param {string} value
     * @returns {string}
     */
    byValueKey(value) {
        return `valuekey|${value}`;
    }

    /**
     * @summary Get locator by text pattern
     * @param {string} value
     * @returns {string}
     */
    text(value) {
        return `text|${value}`;
    }

    /**
     * @summary Get locator by type pattern
     * @param {string} value
     * @returns {string}
     */
    byType(value) {
        return `type|${value}`;
    }

    /**
     * @summary Get locator by semantic pattern
     * @param {string} value
     * @returns {string}
     */
    bySemantic(value) {
        return `semantic|${value}`;
    }

    /**
     * @summary Get locator by tooltip pattern
     * @param {string} value
     * @returns {string}
     */
    byToolTip(value) {
        return `tooltip|${value}`;
    }

    /**
     * @summary Finds the widget that is an descendant of the `of` parameter and that matches the `matching` parameter.
     * @param {string} of specifying the widget of which the descendant is to be found.
     * @param {string} matching Only a descendant of {@link of} matching this finder will be found.
     * @param {boolean} matchRoot If the {@link matchRoot} argument is true then the widget
     * specified by {@link Find#of} will be considered for a match. The argument defaults to false.
     * @param {boolean} firstMatchOnly If {@link firstMatchOnly} is true then only the first ancestor
     * matching {@link matching} will be returned. Defaults to false.
     * @throws {Error}
     */
    byDescendant(
        of,
        matching,
        matchRoot = false,
        firstMatchOnly = false
    ) {
        switch (true) {
        case this._common.isLocatorIndex(of) && this._common.isLocatorIndex(matching):
            return this._controller.findByDescendant({
                elementNdxOf: of,
                elementNdxMatching: matching,
                matchRoot,
                firstMatchOnly
            });
        case !this._common.isLocatorIndex(of) && !this._common.isLocatorIndex(matching):
            return this._controller.findByDescendant({
                locatorOf: of,
                locatorMatching: matching,
                matchRoot,
                firstMatchOnly
            });
        case this._common.isLocatorIndex(of) && !this._common.isLocatorIndex(matching):
            return this._controller.findByDescendant({
                elementNdxOf: of,
                locatorMatching: matching,
                matchRoot,
                firstMatchOnly
            });
        default:
            return this._controller.findByDescendant({
                locatorOf: of,
                elementNdxMatching: matching,
                matchRoot,
                firstMatchOnly
            });
        }
    }

    /**
     * @summary Finds the widget that is an ancestor of the `of` parameter and that matches the `matching` parameter.
     * @param {string} of specifying the widget of which the ancestor is to be found.
     * @param {string} matching Only an ancestor of {@link of} matching this finder will be found.
     * @param {boolean} matchRoot If the {@link matchRoot} argument is true then the widget
     * specified by {@link of} will be considered for a match. The argument defaults to false.
     * @param {boolean} firstMatchOnly If {@link firstMatchOnly} is true then only the first ancestor
     * matching {@link matching} will be returned. Defaults to false.
     * @throws {Error}
     */
    byAncestor(
        of,
        matching,
        matchRoot = false,
        firstMatchOnly = false
    ) {
        switch (true) {
        case this._common.isLocatorIndex(of) && this._common.isLocatorIndex(matching):
            return this._controller.findByAncestor({
                elementNdxOf: of,
                elementNdxMatching: matching,
                matchRoot,
                firstMatchOnly
            });
        case !this._common.isLocatorIndex(of) && !this._common.isLocatorIndex(matching):
            return this._controller.findByAncestor({
                locatorOf: of,
                locatorMatching: matching,
                matchRoot,
                firstMatchOnly
            });
        case this._common.isLocatorIndex(of) && !this._common.isLocatorIndex(matching):
            return this._controller.findByAncestor({
                elementNdxOf: of,
                locatorMatching: matching,
                matchRoot,
                firstMatchOnly
            });
        default:
            return this._controller.findByAncestor({
                locatorOf: of,
                elementNdxMatching: matching,
                matchRoot,
                firstMatchOnly
            });
        }
    }
}

exports.Find = Find;
