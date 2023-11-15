// @ts-check

// import { doesHtmlExist, getHtml } from "./helpers.js";
// eslint-disable-next-line no-unused-vars
import { Task, state } from "./state.js";

/**
 * Description
 *
 * @param {string} dataAttr
 * @param {string} [value]
 * @returns {HTMLElement}
 */
export const getHtml = (dataAttr, value) => {
  const selector = value
    ? `[data-${dataAttr}="${value}"]`
    : `[data-${dataAttr}]`;

  const element = document.querySelector(selector);
  const isHtmlElement = element instanceof HTMLElement;

  if (!isHtmlElement) {
    throw new Error(`${selector} attribute not found in HTML `);
  }

  return element;
};

/**
 * Description
 *
 * @param {string} dataAttr
 * @param {string} [value]
 * @returns {boolean}
 */
export const doesHtmlExist = (dataAttr, value) => {
  const selector = value
    ? `[data-${dataAttr}="${value}"]`
    : `[data-${dataAttr}]`;

  const element = document.querySelector(selector);
  const isHtmlElement = element instanceof HTMLElement;
  return isHtmlElement;
};

/**
 * description
 *
 * @param {string} id - description
 */

const addTaskToHtml = (id) => {
  const isExisting = document.querySelector(`[data-task="${id}"]`);
  if (isExisting) throw new Error("Task with that ID already added");

  const list = getHtml("list");
  const isHtmlElement = list instanceof HTMLElement;
  if (!isHtmlElement) {
    throw new Error('"data-list" attribute not found in HTML');
  }

  const preview = document.createElement("li");
  preview.className = "task";
  preview.dataset.task = id;

  preview.innerHTML = /* html */ `
        <label class="task__check">
        <input class="task__input" type="checkbox" disabled />
        </label>
        <button class="task__title" disabled></button>
        <label class="task__check">
        <svg
        class="task__icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 96 960 960"
        style="display: none"
        >
        <path
            d ="M253 961q-40.212 0-67.606-27.1Q158 906.8 158 867V314h-58v-94h231v-48h297v48h232v94h-58v553q0 39.05-27.769 66.525Q746.463 961 707 961H253Zm454-647H253v553h454V314ZM354 789h77V390h-77v399Zm175 0h78V390h-78v399ZM253 314v553-553Z"
        ></path>
     </svg>
    </label>
`;

  list.appendChild(preview);
};

window.addEventListener("error", () => {
  document.body.innerHTML = "Something went very very wrong. Please refresh.";
});

addTaskToHtml("test");
addTaskToHtml("test");

/**
 *
 * @param {string} id
 * @param {Partial<Pick<Task, 'completed' | 'due' | 'title' | 'urgency'>>} changes
 */
const updateHtmlTask = (id, changes) => {
  const element = document.querySelector(`[data-task="${id}"]`);
  const isHtmlElement = element instanceof HTMLElement;
  if (!isHtmlElement) throw new Error("");
};

/**
 *
 */
export const addTask = () => {};
