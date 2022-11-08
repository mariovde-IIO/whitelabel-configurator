import Canvas from "./Canvas";

import { useState } from "react";

export default function Configurator({ filters }) {
  const [shoeConfig, setShoeConfig] = useState({
    items: {
      laces: "#FFF",
      mesh: "#ffffff",
      caps: "#ffffff",
      inner: "#ffffff",
      sole: "#ffffff",
      stripes: "#ffffff",
      band: "#ffffff",
      patch: "#ffffff",
    },
    withStripes: true,
  });

  return (
    <main className="w-full px-4 sm:px-6 lg:px-8">
      <div className="border-b border-gray-200 pb-10">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Sneaker configurator
        </h1>
        <p className="mt-4 text-base text-gray-500">
          Customize your sneaker below by giving all parts their own color
        </p>
      </div>

      <div className="pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
        <aside className="h-screen overflow-y-auto	">
          <h2 className="sr-only">Filters</h2>

          <div className="hidden lg:block">
            <form className="space-y-10 divide-y divide-gray-200">
              {filters.map((filter, filterIdx) => (
                <div
                  key={filter.name}
                  className={filterIdx === 0 ? null : "pt-4"}
                >
                  <fieldset>
                    <legend className="block text-sm font-medium text-gray-900">
                      {filter.label}{" "}
                      {filter.name === "stripes" && (
                        <>
                          {" "}
                          -{" "}
                          <span
                            className="text-blue-500"
                            role="button"
                            onClick={() => {
                              setShoeConfig({
                                items: shoeConfig.items,
                                withStripes: !shoeConfig.withStripes,
                              });
                            }}
                          >
                            {shoeConfig.withStripes ? "hide" : "show"}
                          </span>
                        </>
                      )}
                    </legend>
                    <div className="space-y-2 pt-4">
                      {filter.items.map((value, optionIdx) => (
                        <div key={value.hexValue} className="flex items-center">
                          <input
                            id={`${filter.label}-${optionIdx}`}
                            name={`${filter.label}`}
                            radioGroup={filter.name}
                            defaultValue={value.hexValue}
                            type="radio"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            onChange={() => {
                              const config = {
                                ...shoeConfig.items,
                              };
                              config[filter.name] = value.hexValue;
                              setShoeConfig({
                                items: config,
                                withStripes: shoeConfig.withStripes,
                              });
                            }}
                          />
                          <label
                            htmlFor={`${filter.label}-${optionIdx}`}
                            className="ml-3 text-sm text-gray-600"
                          >
                            {value.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                </div>
              ))}
            </form>
          </div>
        </aside>

        {/* Product grid */}
        <div className="mt-6 lg:col-span-3 lg:mt-0">
          <Canvas snapShot={shoeConfig} />
        </div>
      </div>
    </main>
  );
}
