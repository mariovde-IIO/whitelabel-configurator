var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: !0 });
  },
  __copyProps = (to, from, except, desc) => {
    if ((from && typeof from == "object") || typeof from == "function")
      for (let key of __getOwnPropNames(from))
        !__hasOwnProp.call(to, key) &&
          key !== except &&
          __defProp(to, key, {
            get: () => from[key],
            enumerable:
              !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
          });
    return to;
  };
var __toCommonJS = (mod) =>
  __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes,
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest,
});
var import_react = require("@remix-run/react"),
  import_server = require("react-dom/server"),
  import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      import_react.RemixServer,
      {
        context: remixContext,
        url: request.url,
      },
      void 0,
      !1,
      {
        fileName: "app/entry.server.jsx",
        lineNumber: 11,
        columnNumber: 5,
      },
      this
    )
  );
  return (
    responseHeaders.set("Content-Type", "text/html"),
    new Response("<!DOCTYPE html>" + markup, {
      status: responseStatusCode,
      headers: responseHeaders,
    })
  );
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta,
});
var import_react2 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-2H5WEKTX.css";

// app/root.jsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"),
  meta = () => ({
    charset: "utf-8",
    title: "SneakerShop | Shoe config",
    description: "",
    viewport: "width=device-width,initial-scale=1",
  }),
  links = () => [{ rel: "stylesheet", href: tailwind_default }];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "html",
    {
      lang: "en",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "head",
          {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                import_react2.Meta,
                {},
                void 0,
                !1,
                {
                  fileName: "app/root.jsx",
                  lineNumber: 25,
                  columnNumber: 9,
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                import_react2.Links,
                {},
                void 0,
                !1,
                {
                  fileName: "app/root.jsx",
                  lineNumber: 26,
                  columnNumber: 9,
                },
                this
              ),
            ],
          },
          void 0,
          !0,
          {
            fileName: "app/root.jsx",
            lineNumber: 24,
            columnNumber: 7,
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "body",
          {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "main",
                {
                  className: "container w-full max-w-none pt-8 pb-8",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    import_react2.Outlet,
                    {},
                    void 0,
                    !1,
                    {
                      fileName: "app/root.jsx",
                      lineNumber: 30,
                      columnNumber: 11,
                    },
                    this
                  ),
                },
                void 0,
                !1,
                {
                  fileName: "app/root.jsx",
                  lineNumber: 29,
                  columnNumber: 9,
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                import_react2.ScrollRestoration,
                {},
                void 0,
                !1,
                {
                  fileName: "app/root.jsx",
                  lineNumber: 32,
                  columnNumber: 9,
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                import_react2.Scripts,
                {},
                void 0,
                !1,
                {
                  fileName: "app/root.jsx",
                  lineNumber: 33,
                  columnNumber: 9,
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                import_react2.LiveReload,
                {},
                void 0,
                !1,
                {
                  fileName: "app/root.jsx",
                  lineNumber: 34,
                  columnNumber: 9,
                },
                this
              ),
            ],
          },
          void 0,
          !0,
          {
            fileName: "app/root.jsx",
            lineNumber: 28,
            columnNumber: 7,
          },
          this
        ),
      ],
    },
    void 0,
    !0,
    {
      fileName: "app/root.jsx",
      lineNumber: 23,
      columnNumber: 5,
    },
    this
  );
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader,
});

// app/components/Configurator/Canvas.jsx
var import_react3 = require("react"),
  import_fiber = require("@react-three/fiber"),
  import_drei = require("@react-three/drei"),
  import_valtio = require("valtio"),
  import_jsx_dev_runtime = require("react/jsx-dev-runtime"),
  state = (0, import_valtio.proxy)({
    current: null,
  });
function Shoe({ snapShot }) {
  let ref = (0, import_react3.useRef)(),
    { nodes, materials } = (0, import_drei.useGLTF)("shoe-draco.glb");
  (0, import_fiber.useFrame)((state2) => {
    let t = state2.clock.getElapsedTime();
    (ref.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20),
      (ref.current.rotation.x = Math.cos(t / 4) / 8),
      (ref.current.rotation.y = Math.sin(t / 4) / 8),
      (ref.current.position.y = (1 + Math.sin(t / 1.5)) / 90);
  });
  let [hovered, set] = (0, import_react3.useState)(null);
  return (
    (0, import_react3.useEffect)(() => {
      if (snapShot) {
        let cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snapShot.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="12" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`,
          auto =
            '<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>';
        document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
          hovered ? cursor : auto
        )}'), auto`;
      }
    }, [hovered]),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "group",
      {
        ref,
        dispose: null,
        onPointerOver: (e) => (
          e.stopPropagation(), set(e.object.material.name)
        ),
        onPointerOut: (e) => e.intersections.length === 0 && set(null),
        onPointerMissed: () => (state.current = null),
        onPointerDown: (e) => (
          e.stopPropagation(), (state.current = e.object.material.name)
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "mesh",
            {
              geometry: nodes.shoe.geometry,
              material: materials.laces,
              "material-color": snapShot.items.laces,
            },
            void 0,
            !1,
            {
              fileName: "app/components/Configurator/Canvas.jsx",
              lineNumber: 58,
              columnNumber: 7,
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "mesh",
            {
              geometry: nodes.shoe_1.geometry,
              material: materials.mesh,
              "material-color": snapShot.items.mesh,
            },
            void 0,
            !1,
            {
              fileName: "app/components/Configurator/Canvas.jsx",
              lineNumber: 63,
              columnNumber: 7,
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "mesh",
            {
              geometry: nodes.shoe_2.geometry,
              material: materials.caps,
              "material-color": snapShot.items.caps,
            },
            void 0,
            !1,
            {
              fileName: "app/components/Configurator/Canvas.jsx",
              lineNumber: 68,
              columnNumber: 7,
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "mesh",
            {
              geometry: nodes.shoe_3.geometry,
              material: materials.inner,
              "material-color": snapShot.items.inner,
            },
            void 0,
            !1,
            {
              fileName: "app/components/Configurator/Canvas.jsx",
              lineNumber: 73,
              columnNumber: 7,
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "mesh",
            {
              geometry: nodes.shoe_4.geometry,
              material: materials.sole,
              "material-color": snapShot.items.sole,
            },
            void 0,
            !1,
            {
              fileName: "app/components/Configurator/Canvas.jsx",
              lineNumber: 78,
              columnNumber: 7,
            },
            this
          ),
          snapShot.withStripes &&
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "mesh",
              {
                geometry: nodes.shoe_5.geometry,
                material: materials.stripes,
                "material-color": snapShot.items.stripes,
              },
              void 0,
              !1,
              {
                fileName: "app/components/Configurator/Canvas.jsx",
                lineNumber: 84,
                columnNumber: 9,
              },
              this
            ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "mesh",
            {
              geometry: nodes.shoe_6.geometry,
              material: materials.band,
              "material-color": snapShot.items.band,
            },
            void 0,
            !1,
            {
              fileName: "app/components/Configurator/Canvas.jsx",
              lineNumber: 90,
              columnNumber: 7,
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "mesh",
            {
              geometry: nodes.shoe_7.geometry,
              material: materials.patch,
              "material-color": snapShot.items.patch,
            },
            void 0,
            !1,
            {
              fileName: "app/components/Configurator/Canvas.jsx",
              lineNumber: 95,
              columnNumber: 7,
            },
            this
          ),
        ],
      },
      void 0,
      !0,
      {
        fileName: "app/components/Configurator/Canvas.jsx",
        lineNumber: 48,
        columnNumber: 5,
      },
      this
    )
  );
}
function ThreeCanvas({ snapShot }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    import_jsx_dev_runtime.Fragment,
    {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_fiber.Canvas,
        {
          style: { height: "100vh" },
          concurrent: !0,
          pixelRatio: [1, 1.5],
          camera: { position: [0, 0, 1.75] },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "ambientLight",
              {
                intensity: 0.3,
              },
              void 0,
              !1,
              {
                fileName: "app/components/Configurator/Canvas.jsx",
                lineNumber: 113,
                columnNumber: 9,
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "spotLight",
              {
                intensity: 0.3,
                angle: 0.1,
                penumbra: 1,
                position: [5, 25, 20],
              },
              void 0,
              !1,
              {
                fileName: "app/components/Configurator/Canvas.jsx",
                lineNumber: 114,
                columnNumber: 9,
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              import_react3.Suspense,
              {
                fallback: null,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    Shoe,
                    {
                      snapShot,
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/Configurator/Canvas.jsx",
                      lineNumber: 121,
                      columnNumber: 11,
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    import_drei.Environment,
                    {
                      files: "royal_esplanade_1k.hdr",
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/Configurator/Canvas.jsx",
                      lineNumber: 122,
                      columnNumber: 11,
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    import_drei.ContactShadows,
                    {
                      "rotation-x": Math.PI / 2,
                      position: [0, -0.8, 0],
                      opacity: 0.25,
                      width: 10,
                      height: 10,
                      blur: 2,
                      far: 1,
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/Configurator/Canvas.jsx",
                      lineNumber: 123,
                      columnNumber: 11,
                    },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              {
                fileName: "app/components/Configurator/Canvas.jsx",
                lineNumber: 120,
                columnNumber: 9,
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              import_drei.OrbitControls,
              {
                minPolarAngle: Math.PI / 2,
                maxPolarAngle: Math.PI / 2,
                enableZoom: !1,
                enablePan: !1,
              },
              void 0,
              !1,
              {
                fileName: "app/components/Configurator/Canvas.jsx",
                lineNumber: 133,
                columnNumber: 9,
              },
              this
            ),
          ],
        },
        void 0,
        !0,
        {
          fileName: "app/components/Configurator/Canvas.jsx",
          lineNumber: 107,
          columnNumber: 7,
        },
        this
      ),
    },
    void 0,
    !1,
    {
      fileName: "app/components/Configurator/Canvas.jsx",
      lineNumber: 106,
      columnNumber: 5,
    },
    this
  );
}

// app/components/Configurator/index.jsx
var import_react4 = require("react"),
  import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Configurator({ filters }) {
  let [shoeConfig, setShoeConfig] = (0, import_react4.useState)({
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
    withStripes: !0,
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "main",
    {
      className: "w-full px-4 sm:px-6 lg:px-8",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "border-b border-gray-200 pb-10",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "h1",
                {
                  className: "text-4xl font-bold tracking-tight text-gray-900",
                  children: "Sneaker configurator",
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Configurator/index.jsx",
                  lineNumber: 23,
                  columnNumber: 9,
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "p",
                {
                  className: "mt-4 text-base text-gray-500",
                  children:
                    "Customize your sneaker below by giving all parts their own color",
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Configurator/index.jsx",
                  lineNumber: 26,
                  columnNumber: 9,
                },
                this
              ),
            ],
          },
          void 0,
          !0,
          {
            fileName: "app/components/Configurator/index.jsx",
            lineNumber: 22,
            columnNumber: 7,
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "aside",
                {
                  className: "h-screen overflow-y-auto	",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      "h2",
                      {
                        className: "sr-only",
                        children: "Filters",
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/components/Configurator/index.jsx",
                        lineNumber: 33,
                        columnNumber: 11,
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      "div",
                      {
                        className: "hidden lg:block",
                        children: /* @__PURE__ */ (0,
                        import_jsx_dev_runtime.jsxDEV)(
                          "form",
                          {
                            className: "space-y-10 divide-y divide-gray-200",
                            children: filters.map((filter, filterIdx) =>
                              /* @__PURE__ */ (0,
                              import_jsx_dev_runtime.jsxDEV)(
                                "div",
                                {
                                  className: filterIdx === 0 ? null : "pt-4",
                                  children: /* @__PURE__ */ (0,
                                  import_jsx_dev_runtime.jsxDEV)(
                                    "fieldset",
                                    {
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_dev_runtime.jsxDEV)(
                                          "legend",
                                          {
                                            className:
                                              "block text-sm font-medium text-gray-900",
                                            children: [
                                              filter.label,
                                              " ",
                                              filter.name === "stripes" &&
                                                /* @__PURE__ */ (0,
                                                import_jsx_dev_runtime.jsxDEV)(
                                                  import_jsx_dev_runtime.Fragment,
                                                  {
                                                    children: [
                                                      " ",
                                                      "-",
                                                      " ",
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_dev_runtime.jsxDEV)(
                                                        "span",
                                                        {
                                                          className:
                                                            "text-blue-500",
                                                          role: "button",
                                                          onClick: () => {
                                                            setShoeConfig({
                                                              items:
                                                                shoeConfig.items,
                                                              withStripes:
                                                                !shoeConfig.withStripes,
                                                            });
                                                          },
                                                          children:
                                                            shoeConfig.withStripes
                                                              ? "hide"
                                                              : "show",
                                                        },
                                                        void 0,
                                                        !1,
                                                        {
                                                          fileName:
                                                            "app/components/Configurator/index.jsx",
                                                          lineNumber: 49,
                                                          columnNumber: 27,
                                                        },
                                                        this
                                                      ),
                                                    ],
                                                  },
                                                  void 0,
                                                  !0,
                                                  {
                                                    fileName:
                                                      "app/components/Configurator/index.jsx",
                                                    lineNumber: 46,
                                                    columnNumber: 25,
                                                  },
                                                  this
                                                ),
                                            ],
                                          },
                                          void 0,
                                          !0,
                                          {
                                            fileName:
                                              "app/components/Configurator/index.jsx",
                                            lineNumber: 43,
                                            columnNumber: 21,
                                          },
                                          this
                                        ),
                                        /* @__PURE__ */ (0,
                                        import_jsx_dev_runtime.jsxDEV)(
                                          "div",
                                          {
                                            className: "space-y-2 pt-4",
                                            children: filter.items.map(
                                              (value, optionIdx) =>
                                                /* @__PURE__ */ (0,
                                                import_jsx_dev_runtime.jsxDEV)(
                                                  "div",
                                                  {
                                                    className:
                                                      "flex items-center",
                                                    children: [
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_dev_runtime.jsxDEV)(
                                                        "input",
                                                        {
                                                          id: `${filter.label}-${optionIdx}`,
                                                          name: `${filter.label}`,
                                                          radioGroup:
                                                            filter.name,
                                                          defaultValue:
                                                            value.hexValue,
                                                          type: "radio",
                                                          className:
                                                            "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500",
                                                          onChange: () => {
                                                            let config = {
                                                              ...shoeConfig.items,
                                                            };
                                                            (config[
                                                              filter.name
                                                            ] = value.hexValue),
                                                              setShoeConfig({
                                                                items: config,
                                                                withStripes:
                                                                  shoeConfig.withStripes,
                                                              });
                                                          },
                                                        },
                                                        void 0,
                                                        !1,
                                                        {
                                                          fileName:
                                                            "app/components/Configurator/index.jsx",
                                                          lineNumber: 67,
                                                          columnNumber: 27,
                                                        },
                                                        this
                                                      ),
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_dev_runtime.jsxDEV)(
                                                        "label",
                                                        {
                                                          htmlFor: `${filter.label}-${optionIdx}`,
                                                          className:
                                                            "ml-3 text-sm text-gray-600",
                                                          children: value.label,
                                                        },
                                                        void 0,
                                                        !1,
                                                        {
                                                          fileName:
                                                            "app/components/Configurator/index.jsx",
                                                          lineNumber: 85,
                                                          columnNumber: 27,
                                                        },
                                                        this
                                                      ),
                                                    ],
                                                  },
                                                  value.hexValue,
                                                  !0,
                                                  {
                                                    fileName:
                                                      "app/components/Configurator/index.jsx",
                                                    lineNumber: 66,
                                                    columnNumber: 25,
                                                  },
                                                  this
                                                )
                                            ),
                                          },
                                          void 0,
                                          !1,
                                          {
                                            fileName:
                                              "app/components/Configurator/index.jsx",
                                            lineNumber: 64,
                                            columnNumber: 21,
                                          },
                                          this
                                        ),
                                      ],
                                    },
                                    void 0,
                                    !0,
                                    {
                                      fileName:
                                        "app/components/Configurator/index.jsx",
                                      lineNumber: 42,
                                      columnNumber: 19,
                                    },
                                    this
                                  ),
                                },
                                filter.name,
                                !1,
                                {
                                  fileName:
                                    "app/components/Configurator/index.jsx",
                                  lineNumber: 38,
                                  columnNumber: 17,
                                },
                                this
                              )
                            ),
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/components/Configurator/index.jsx",
                            lineNumber: 36,
                            columnNumber: 13,
                          },
                          this
                        ),
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/components/Configurator/index.jsx",
                        lineNumber: 35,
                        columnNumber: 11,
                      },
                      this
                    ),
                  ],
                },
                void 0,
                !0,
                {
                  fileName: "app/components/Configurator/index.jsx",
                  lineNumber: 32,
                  columnNumber: 9,
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "div",
                {
                  className: "mt-6 lg:col-span-3 lg:mt-0",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    ThreeCanvas,
                    {
                      snapShot: shoeConfig,
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/Configurator/index.jsx",
                      lineNumber: 103,
                      columnNumber: 11,
                    },
                    this
                  ),
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Configurator/index.jsx",
                  lineNumber: 102,
                  columnNumber: 9,
                },
                this
              ),
            ],
          },
          void 0,
          !0,
          {
            fileName: "app/components/Configurator/index.jsx",
            lineNumber: 31,
            columnNumber: 7,
          },
          this
        ),
      ],
    },
    void 0,
    !0,
    {
      fileName: "app/components/Configurator/index.jsx",
      lineNumber: 21,
      columnNumber: 5,
    },
    this
  );
}

// app/routes/index.jsx
var import_node = require("@remix-run/node"),
  import_react5 = require("@remix-run/react");

// app/models/contentful.server.js
var SPACE = process.env.CONTENTFUL_SPACE_ID,
  TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
async function apiCall(query, variables) {
  let fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/master`,
    options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({ query, variables }),
    };
  return await fetch(fetchUrl, options);
}
async function getFilters() {
  let json2 = await (
    await apiCall(`
  {
    filterCollection {
      items {
        name
        label
        valuesCollection {
          items {
            label
            hexValue
          }
        }
      }
    }
  }`)
  ).json();
  let formattedData = await json2.data.filterCollection.items.map(
    async (filter) => {
      let { name, label } = filter;
      return {
        name,
        label,
        items: filter.valuesCollection.items,
      };
    }
  );
  return Promise.all(formattedData);
}
var client = {
  getFilters,
};

// app/routes/index.jsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader() {
  let filters = await client.getFilters();
  return console.log(filters), (0, import_node.json)({ filters });
}
function Index() {
  let { filters } = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Configurator,
        {
          filters,
        },
        void 0,
        !1,
        {
          fileName: "app/routes/index.jsx",
          lineNumber: 17,
          columnNumber: 7,
        },
        this
      ),
    },
    void 0,
    !1,
    {
      fileName: "app/routes/index.jsx",
      lineNumber: 16,
      columnNumber: 5,
    },
    this
  );
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = {
  version: "416232e9",
  entry: {
    module: "/build/entry.client-LKPT25NC.js",
    imports: ["/build/_shared/chunk-NPI6A3WN.js"],
  },
  routes: {
    root: {
      id: "root",
      parentId: void 0,
      path: "",
      index: void 0,
      caseSensitive: void 0,
      module: "/build/root-F7N42QRU.js",
      imports: void 0,
      hasAction: !1,
      hasLoader: !1,
      hasCatchBoundary: !1,
      hasErrorBoundary: !1,
    },
    "routes/index": {
      id: "routes/index",
      parentId: "root",
      path: void 0,
      index: !0,
      caseSensitive: void 0,
      module: "/build/routes/index-QUP3XS4K.js",
      imports: void 0,
      hasAction: !1,
      hasLoader: !0,
      hasCatchBoundary: !1,
      hasErrorBoundary: !1,
    },
  },
  url: "/build/manifest-416232E9.js",
};

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build",
  publicPath = "/build/",
  entry = { module: entry_server_exports },
  routes = {
    root: {
      id: "root",
      parentId: void 0,
      path: "",
      index: void 0,
      caseSensitive: void 0,
      module: root_exports,
    },
    "routes/index": {
      id: "routes/index",
      parentId: "root",
      path: void 0,
      index: !0,
      caseSensitive: void 0,
      module: routes_exports,
    },
  };
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    assets,
    assetsBuildDirectory,
    entry,
    publicPath,
    routes,
  });
//# sourceMappingURL=server.js.map
