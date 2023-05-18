/*
 * @Description: validate
 * @Author: zhaobin
 * @Date: 2023-05-18 15:43:44
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-05-18 15:43:53
 */
/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}
