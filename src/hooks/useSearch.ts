import * as React from "react";

export function useSearch<T = object>(
  key: keyof T,
  address: keyof T,
  items: T[]
) {
  const [search, setSearch] = React.useState("");
  const [filtered, setFiltered] = React.useState<T[]>(items);

  // if the 'items' change, make sure we update our state.
  React.useEffect(() => {
    setFiltered(items);
  }, [items]);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setSearch(value);

    // if there's no hits found, set filtered back to all items
    if (value.length <= 0) {
      setFiltered(items);

      // else, search on the provided 'key'
    } else {
      setFiltered(
        items.filter(
          (v: any) =>
            v[key].toString().toLowerCase().includes(value.toLowerCase()) ||
            v[address].toString().toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  }

  return {
    search,
    onChange,
    filtered,
  };
}

/* Original file */
/*
import * as React from "react";
 
export function useSearch<T = object>(key: keyof T, items: T[]) {
  const [search, setSearch] = React.useState("");
  const [filtered, setFiltered] = React.useState<T[]>(items);
 
  // if the 'items' change, make sure we update our state.
  React.useEffect(() => {
    setFiltered(items);
  }, [items]);
 
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setSearch(value);
 
    // if there's no hits found, set filtered back to all items
    if (value.length <= 0) {
      setFiltered(items);
 
      // else, search on the provided 'key'
    } else {
      setFiltered(
        items.filter((v) =>
          (v[key] as unknown as string).toString().toLowerCase().includes(value.toLowerCase()),
        ),
      );
    }
  }
 
  return {
    search,
    onChange,
    filtered,
  };
}
*/
