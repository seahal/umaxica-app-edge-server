import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable, json } from "@remix-run/node";
import { RemixServer, Meta, Links, Outlet, ScrollRestoration, Scripts, useLoaderData, useRouteError, isRouteErrorResponse, Form, useActionData } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx("h1", { children: "Remix and Rails Project" }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsx(Outlet, {}),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Layout
}, Symbol.toStringTag, { value: "Module" }));
function index_account() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("p", { children: "index" }),
    /* @__PURE__ */ jsxs("form", { action: "http://rails:3333/connects", method: "post", children: [
      /* @__PURE__ */ jsx("input", { type: "text", placeholder: "title", className: "border-2 block", name: "connect[title]" }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("textarea", { placeholder: "description", className: "border-2 block", name: "connect[description]" }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("input", { type: "submit", value: "送信" })
    ] }),
    /* @__PURE__ */ jsx("a", { href: "http://localhost:3333/session/", children: "ログイン？" })
  ] });
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index_account
}, Symbol.toStringTag, { value: "Module" }));
async function clientLoader({ request, params, serverLoader }) {
  const response = await fetch("http://rails:3333/connects/new.json", { method: "GET", mode: "cors" });
  const data = await response.json();
  return data;
}
function create_new_account() {
  const data = useLoaderData();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("p", { children: "新規登録" }),
    /* @__PURE__ */ jsx("p", { children: data.form_authenticity_token }),
    /* @__PURE__ */ jsxs("form", { action: "http://rails:3333/connects", method: "post", children: [
      /* @__PURE__ */ jsx("input", { type: "hidden", name: "authenticity_token", value: data.authenticity_token }),
      /* @__PURE__ */ jsx("input", { type: "text", placeholder: "title", className: "border-2 block", name: "connect[title]" }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("textarea", { placeholder: "description", className: "border-2 block", name: "connect[description]" }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("input", { type: "submit", value: "送信" })
    ] }),
    /* @__PURE__ */ jsx("a", { href: "http://localhost:3333/session/", children: "ログイン？" })
  ] });
}
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clientLoader,
  default: create_new_account
}, Symbol.toStringTag, { value: "Module" }));
const meta = ({ error }) => {
  if (error) {
    return [
      ...error.status === 404 ? [{ title: "Page Not Found" }] : [],
      { name: "robots", content: "noindex, nofollow" }
    ];
  }
};
function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return /* @__PURE__ */ jsx("p", { children: "404" });
    }
    throw new Error(`${error.status} ${error.statusText}`);
  }
  throw new Error(error instanceof Error ? error.message : "Unknown Error");
}
function layout() {
  return /* @__PURE__ */ jsx(Outlet, {});
}
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  default: layout,
  meta
}, Symbol.toStringTag, { value: "Module" }));
function conncetNew() {
  return /* @__PURE__ */ jsx(Fragment, {});
}
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: conncetNew
}, Symbol.toStringTag, { value: "Module" }));
const appStylesHref = "/assets/app-CFSg7KbS.css";
const links = () => [{ rel: "stylesheet", href: appStylesHref }];
function index() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "font-sans p-4", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-3xl", children: "Welcome to Remix" }),
    /* @__PURE__ */ jsx("ul", { className: "list-disc mt-4 pl-6 space-y-2", children: /* @__PURE__ */ jsx("li", { children: "A" }) })
  ] }) });
}
const loader$1 = async () => {
  console.log(process.env.RAILS_URL);
  return null;
};
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index,
  links,
  loader: loader$1
}, Symbol.toStringTag, { value: "Module" }));
function SampleHeader() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "Sample Index Page 1" }),
    /* @__PURE__ */ jsx("hr", {})
  ] });
}
function footer() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("hr", {}),
    /* @__PURE__ */ jsxs("center", { children: [
      /* @__PURE__ */ jsx("p", { children: "This is the end fo line" }),
      (/* @__PURE__ */ new Date()).getTime().toString()
    ] })
  ] });
}
function SampleForm() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("fieldset", { children: /* @__PURE__ */ jsxs(Form, { method: "post", action: "/sample", children: [
    /* @__PURE__ */ jsx("input", { type: "text", name: "title", className: "border-2 block" }),
    /* @__PURE__ */ jsx("textarea", { name: "description", className: "border-2 block" }),
    /* @__PURE__ */ jsx("button", { type: "submit", className: "border-2 block", children: "送信" })
  ] }) }) });
}
const loader = async ({ params, request }) => {
  const url = new URL(request.url);
  const title = url.searchParams.get("title");
  console.log(`[L] title: ${title}, description: ${params.description}`);
  return json({ params });
};
function sample_index() {
  const data = useActionData();
  console.log("[C] " + data);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("p", { children: (data == null ? void 0 : data.message) ?? "" }),
    /* @__PURE__ */ jsx(SampleHeader, {}),
    /* @__PURE__ */ jsx(SampleForm, {}),
    /* @__PURE__ */ jsx(footer, {})
  ] });
}
const action = async ({ request }) => {
  const formData = await request.formData();
  const title = formData.get("title");
  const description = formData.get("description");
  console.log(`[A] title: ${title}, description: ${description}`);
  {
    return json({ title, description, message: "you are not good write" });
  }
};
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action,
  default: sample_index,
  loader
}, Symbol.toStringTag, { value: "Module" }));
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const route8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-Bkx1muag.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js", "/assets/index-B4IxLV5s.js", "/assets/components-BVODvgJn.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-ktBQTDLG.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js", "/assets/index-B4IxLV5s.js", "/assets/components-BVODvgJn.js"], "css": ["/assets/root-BHM5fN-8.css"] }, "routes/accounts._index": { "id": "routes/accounts._index", "parentId": "root", "path": "accounts", "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/accounts._index-LXoyjOEl.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js"], "css": [] }, "routes/accounts.new": { "id": "routes/accounts.new", "parentId": "root", "path": "accounts/new", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": true, "hasErrorBoundary": false, "module": "/assets/accounts.new-kDlbzq4v.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js", "/assets/index-B4IxLV5s.js", "/assets/components-BVODvgJn.js"], "css": [] }, "routes/_layout": { "id": "routes/_layout", "parentId": "root", "path": void 0, "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/_layout-C40HA-jJ.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js", "/assets/index-B4IxLV5s.js"], "css": [] }, "routes/connect": { "id": "routes/connect", "parentId": "root", "path": "connect", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/connect-DNOl4mGl.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js"], "css": [] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-Cz2FnJgs.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js"], "css": [] }, "routes/sample": { "id": "routes/sample", "parentId": "root", "path": "sample", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/sample-BzqyiwTN.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js", "/assets/index-B4IxLV5s.js", "/assets/components-BVODvgJn.js"], "css": [] }, "routes/rails": { "id": "routes/rails", "parentId": "root", "path": "rails", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/rails-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/app": { "id": "routes/app", "parentId": "root", "path": "app", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/app-DzdFXI1f.css", "imports": [], "css": [] } }, "url": "/assets/manifest-0cd356bb.js", "version": "0cd356bb" };
const mode = "production";
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "v3_fetcherPersist": true, "v3_relativeSplatPath": true, "v3_throwAbortReason": true, "unstable_singleFetch": false, "unstable_lazyRouteDiscovery": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/accounts._index": {
    id: "routes/accounts._index",
    parentId: "root",
    path: "accounts",
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/accounts.new": {
    id: "routes/accounts.new",
    parentId: "root",
    path: "accounts/new",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/_layout": {
    id: "routes/_layout",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/connect": {
    id: "routes/connect",
    parentId: "root",
    path: "connect",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route5
  },
  "routes/sample": {
    id: "routes/sample",
    parentId: "root",
    path: "sample",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "routes/rails": {
    id: "routes/rails",
    parentId: "root",
    path: "rails",
    index: void 0,
    caseSensitive: void 0,
    module: route7
  },
  "routes/app": {
    id: "routes/app",
    parentId: "root",
    path: "app",
    index: void 0,
    caseSensitive: void 0,
    module: route8
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};
