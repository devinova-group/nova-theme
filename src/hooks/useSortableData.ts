import React from "react";

/**
 * Sorts an array og objects, either in ascending or descending order, based on
 * the given key.
 *
 * @param {array} array - The array to sort.
 * @param {object} config - The configuration object.
 * @param {string} config.key - The object key to sort by.
 * @param {(ascending|descending)} [config.direction] - The sort direction.
 * @returns {array}
 */
interface Props {
  key: string;
  direction: string;
}

const sortTableData = (array: Array<object>, { key, direction }: Props) => {
  return array.sort((a: any, b: any): number => {
    /* console.log(a); */
    if (a[key] < b[key]) return direction === "ascending" ? -1 : 1;
    if (a[key] > b[key]) return direction === "ascending" ? 1 : -1;
    return 0;
  });
};

/**
 * A React hook that will sort a given array. The configuration object can
 * define the initial sort order and key, if none given, no sort is done.
 *
 * @param {array} items - The data that needs to be sorted.
 * @param {object} [config] - A configuration object.
 * @param {string} [config.key] - Name of key to sort by.
 * @param {(ascending|descending)} [config.direction] - The sort direction.
 * @returns {object}
 */

interface Config {
  key: string;
  direction: string;
}

const useSortableData = (items: object[], config: Config) => {
  const [sortConfig, setSortConfig] = React.useState(config);
  const sortedItems = React.useMemo(() => {
    // If no config was defined then return the unsorted array
    if (!sortConfig) return items;

    return sortTableData(items, { ...sortConfig });
  }, [items, sortConfig]);

  const requestSort = (key: string) => {
    let direction = "descending";

    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig?.direction === "descending"
    ) {
      direction = "ascending";
    }

    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

export default useSortableData;
