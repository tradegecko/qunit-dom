export default class DOMAssertions {
    private target;
    private rootElement;
    private testContext;
    constructor(target: string | Element | null, rootElement: Element, testContext: Assert);
    /**
     * Assert an [HTMLElement][] (or multiple) matching the `selector` exists.
     *
     * @param {string?} message
     *
     * @example
     * assert.dom('#title').exists();
     *
     * @see {@link #doesNotExist}
     */
    exists(message?: string): void;
    /**
     * Assert an [HTMLElement][] (or multiple) matching the `selector` exists.
     *
     * @param {object?} options
     * @param {string?} message
     *
     * @example
     * assert.dom('.choice').exists({ count: 4 });
     *
     * @see {@link #doesNotExist}
     */
    exists(options: {
        count: number;
    }, message?: string): void;
    /**
     * Assert an [HTMLElement][] matching the `selector` does not exists.
     *
     * @param {string?} message
     *
     * @example
     * assert.dom('.should-not-exist').doesNotExist();
     *
     * @see {@link #exists}
     */
    doesNotExist(message?: string): void;
    /**
     * Assert that the [HTMLElement][] or an [HTMLElement][] matching the
     * `selector` is currently checked.
     *
     * @param {string?} message
     *
     * @example
     * assert.dom('input.active').isChecked();
     *
     * @see {@link #isNotChecked}
     */
    isChecked(message?: string): void;
    /**
     * Assert that the [HTMLElement][] or an [HTMLElement][] matching the
     * `selector` is currently unchecked.
     *
     * @param {string?} message
     *
     * @example
     * assert.dom('input.active').isNotChecked();
     *
     * @see {@link #isChecked}
     */
    isNotChecked(message?: string): void;
    /**
     * Assert that the [HTMLElement][] or an [HTMLElement][] matching the
     * `selector` is currently focused.
     *
     * @param {string?} message
     *
     * @example
     * assert.dom('input.email').isFocused();
     *
     * @see {@link #isNotFocused}
     */
    isFocused(message?: string): void;
    /**
     * Assert that the [HTMLElement][] or an [HTMLElement][] matching the
     * `selector` is not currently focused.
     *
     * @param {string?} message
     *
     * @example
     * assert.dom('input[type="password"]').isNotFocused();
     *
     * @see {@link #isFocused}
     */
    isNotFocused(message?: string): void;
    /**
     * Assert that the [HTMLElement][] or an [HTMLElement][] matching the
     * `selector` is currently required.
     *
     * @param {string?} message
     *
     * @example
     * assert.dom('input[type="text"]').isRequired();
     *
     * @see {@link #isNotRequired}
     */
    isRequired(message?: string): void;
    /**
     * Assert that the [HTMLElement][] or an [HTMLElement][] matching the
     * `selector` is currently not required.
     *
     * @param {string?} message
     *
     * @example
     * assert.dom('input[type="text"]').isNotRequired();
     *
     * @see {@link #isRequired}
     */
    isNotRequired(message?: string): void;
    /**
     * Assert that the [HTMLElement][] or an [HTMLElement][] matching the
     * `selector` exists and is visible.
     *
     * Visibility is determined by asserting that:
     *
     * - the element's offsetWidth and offsetHeight are non-zero
     * - any of the element's DOMRect objects have a non-zero size
     *
     * Additionally, visibility in this case means that the element is visible on the page,
     * but not necessarily in the viewport.
     *
     * @param {string?} message
     *
     * @example
     * assert.dom('.foo').isVisible();
     *
     * @see {@link #isNotVisible}
     */
    isVisible(message?: string): void;
    /**
     * Assert that the [HTMLElement][] or an [HTMLElement][] matching the
     * `selector` does not exist or is not visible on the page.
     *
     * Visibility is determined by asserting that:
     *
     * - the element's offsetWidth or offsetHeight are zero
     * - all of the element's DOMRect objects have a size of zero
     *
     * Additionally, visibility in this case means that the element is visible on the page,
     * but not necessarily in the viewport.
     *
     * @param {string?} message
     *
     * @example
     * assert.dom('.foo').isNotVisible();
     *
     * @see {@link #isVisible}
     */
    isNotVisible(message?: string): void;
    /**
     * Assert that the [HTMLElement][] has an attribute with the provided `name`.
     *
     * @param {string} name
     *
     * @example
     * assert.dom('input.password-input').hasAttribute('disabled');
     *
     * @see {@link #doesNotHaveAttribute}
     */
    hasAttribute(name: string): void;
    /**
     * Assert that the [HTMLElement][] has an attribute with the provided `name`
     * and checks if the attribute `value` matches the provided text or regular
     * expression.
     *
     * @param {string} name
     * @param {string|RegExp|object} value
     * @param {string?} message
     *
     * @example
     * assert.dom('input.password-input').hasAttribute('type', 'password');
     *
     * @see {@link #doesNotHaveAttribute}
     */
    hasAttribute(name: string, value: string | RegExp | {
        any: true;
    }, message?: string): void;
    /**
     * Assert that the [HTMLElement][] has no attribute with the provided `name`.
     *
     * **Aliases:** `hasNoAttribute`, `lacksAttribute`
     *
     * @param {string} name
     * @param {string?} message
     *
     * @example
     * assert.dom('input.username').hasNoAttribute('disabled');
     *
     * @see {@link #hasAttribute}
     */
    doesNotHaveAttribute(name: string, message?: string): void;
    hasNoAttribute(name: string, message?: string): void;
    lacksAttribute(name: string, message?: string): void;
    /**
     * Assert that the [HTMLElement][] has a style property with the provided `value`.
     * @name hasStyle
     * @param {string} name
     * @param {string} value
     * @param {string?} message
     *
     * @example
     * assert.dom('.progress-bar').hasStyle('backgroundColor', 'rgb(248, 183, 21)');
     *
     * @see {@link #hasStyle}
     */
    hasStyle(name: any, value: any, message: any): void;
    /**
     *  Assert that the [HTMLElement][] or an [HTMLElement][] matching the
     * `selector` is disabled.
     *
     * @param {string?} message
     *
     * @example
     * assert.dom('.foo').isDisabled();
     *
     * @see {@link #isNotDisabled}
     */
    isDisabled(message?: string): void;
    /**
     *  Assert that the [HTMLElement][] or an [HTMLElement][] matching the
     * `selector` is not disabled.
     *
     * @param {string?} message
     *
     * @example
     * assert.dom('.foo').isNotDisabled();
     *
     * @see {@link #isDisabled}
     */
    isNotDisabled(message?: string): void;
    /**
     * Assert that the [HTMLElement][] has the `expected` CSS class using
     * [`classList`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList).
     *
     * @param {string} expected
     * @param {string?} message
     *
     * @example
     * assert.dom('input[type="password"]').hasClass('secret-password-input');
     *
     * @see {@link #doesNotHaveClass}
     */
    hasClass(expected: string, message?: string): void;
    /**
     * Assert that the [HTMLElement][] does not have the `expected` CSS class using
     * [`classList`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList).
     *
     * **Aliases:** `hasNoClass`, `lacksClass`
     *
     * @param {string} expected
     * @param {string?} message
     *
     * @example
     * assert.dom('input[type="password"]').doesNotHaveClass('username-input');
     *
     * @see {@link #hasClass}
     */
    doesNotHaveClass(expected: string, message?: string): void;
    hasNoClass(expected: string, message?: string): void;
    lacksClass(expected: string, message?: string): void;
    /**
     * Assert that the text of the [HTMLElement][] or an [HTMLElement][]
     * matching the `selector` matches the `expected` text, using the
     * [`textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
     * attribute and stripping/collapsing whitespace.
     *
     * `expected` can also be a regular expression.
     *
     * **Aliases:** `matchesText`
     *
     * @param {string|RegExp} expected
     * @param {string?} message
     *
     * @example
     * // <h2 id="title">
     * //   Welcome to <b>QUnit</b>
     * // </h2>
     *
     * assert.dom('#title').hasText('Welcome to QUnit');
     *
     * @example
     * assert.dom('.foo').hasText(/[12]\d{3}/);
     *
     * @see {@link #includesText}
     */
    hasText(expected: string | RegExp | {
        any: true;
    }, message?: string): void;
    matchesText(expected: string | RegExp | {
        any: true;
    }, message?: string): void;
    /**
     * Assert that the `textContent` property of an [HTMLElement][] is not empty.
     *
     * @param {string?} message
     *
     * @example
     * assert.dom('button.share').hasAnyText();
     *
     * @see {@link #hasText}
     */
    hasAnyText(message?: string): void;
    /**
     * Assert that the text of the [HTMLElement][] or an [HTMLElement][]
     * matching the `selector` contains the given `text`, using the
     * [`textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
     * attribute.
     *
     * **Aliases:** `containsText`, `hasTextContaining`
     *
     * @param {string} text
     * @param {string?} message
     *
     * @example
     * assert.dom('#title').includesText('Welcome');
     *
     * @see {@link #hasText}
     */
    includesText(text: string, message?: string): void;
    containsText(expected: string, message?: string): void;
    hasTextContaining(expected: string, message?: string): void;
    /**
     * Assert that the text of the [HTMLElement][] or an [HTMLElement][]
     * matching the `selector` does not include the given `text`, using the
     * [`textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
     * attribute.
     *
     * **Aliases:** `doesNotContainText`, `doesNotHaveTextContaining`
     *
     * @param {string} text
     * @param {string?} message
     *
     * @example
     * assert.dom('#title').doesNotIncludeText('Welcome');
     */
    doesNotIncludeText(text: string, message?: string): void;
    doesNotContainText(unexpected: string, message?: string): void;
    doesNotHaveTextContaining(unexpected: string, message?: string): void;
    /**
     * Assert that the `value` property of an [HTMLInputElement][] matches
     * the `expected` text or regular expression.
     *
     * If no `expected` value is provided, the assertion will fail if the
     * `value` is an empty string.
     *
     * @param {string|RegExp|object?} expected
     * @param {string?} message
     *
     * @example
     * assert.dom('input.username').hasValue('HSimpson');
  
     * @see {@link #hasAnyValue}
     * @see {@link #hasNoValue}
     */
    hasValue(expected: string | RegExp | {
        any: true;
    }, message?: string): void;
    /**
     * Assert that the `value` property of an [HTMLInputElement][] is not empty.
     *
     * @param {string?} message
     *
     * @example
     * assert.dom('input.username').hasAnyValue();
     *
     * @see {@link #hasValue}
     * @see {@link #hasNoValue}
     */
    hasAnyValue(message?: string): void;
    /**
     * Assert that the `value` property of an [HTMLInputElement][] is empty.
     *
     * **Aliases:** `lacksValue`
     *
     * @param {string?} message
     *
     * @example
     * assert.dom('input.username').hasNoValue();
     *
     * @see {@link #hasValue}
     * @see {@link #hasAnyValue}
     */
    hasNoValue(message?: string): void;
    lacksValue(message?: string): void;
    /**
     * @private
     */
    private pushResult;
    /**
     * Finds a valid HTMLElement from target, or pushes a failing assertion if a valid
     * element is not found.
     * @private
     * @returns (HTMLElement|null) a valid HTMLElement, or null
     */
    private findTargetElement;
    /**
     * Finds a valid HTMLElement from target
     * @private
     * @returns (HTMLElement|null) a valid HTMLElement, or null
     * @throws TypeError will be thrown if target is an unrecognized type
     */
    private findElement;
    /**
     * @private
     */
    private readonly targetDescription;
}
