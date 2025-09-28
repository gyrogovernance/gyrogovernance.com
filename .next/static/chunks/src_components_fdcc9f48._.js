(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ArticleToc.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ArticleToc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function buildTree(headings) {
    const tree = [];
    let current = null;
    headings.filter((h)=>h.depth === 2 || h.depth === 3) // keep ToC clean
    .forEach((h)=>{
        if (h.depth === 2) {
            current = {
                id: h.id,
                text: h.text,
                children: []
            };
            tree.push(current);
        } else if (h.depth === 3) {
            if (!current) {
                // stray h3 without a preceding h2 – treat as h2
                current = {
                    id: h.id,
                    text: h.text,
                    children: []
                };
                tree.push(current);
            } else {
                current.children.push({
                    id: h.id,
                    text: h.text
                });
            }
        }
    });
    return tree;
}
function ArticleToc(param) {
    let { headings, offsetTop = 96 } = param;
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const firstLinkRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dialogRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Build hierarchical tree only once per render
    const tree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ArticleToc.useMemo[tree]": ()=>buildTree(headings)
    }["ArticleToc.useMemo[tree]"], [
        headings
    ]);
    // Body scroll lock for mobile dialog
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArticleToc.useEffect": ()=>{
            if (!open) return;
            const prev = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            return ({
                "ArticleToc.useEffect": ()=>{
                    document.body.style.overflow = prev;
                }
            })["ArticleToc.useEffect"];
        }
    }["ArticleToc.useEffect"], [
        open
    ]);
    // Close on Escape (works for both desktop and mobile)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArticleToc.useEffect": ()=>{
            const onEsc = {
                "ArticleToc.useEffect.onEsc": (e)=>{
                    if (e.key === "Escape") setOpen(false);
                }
            }["ArticleToc.useEffect.onEsc"];
            window.addEventListener("keydown", onEsc);
            return ({
                "ArticleToc.useEffect": ()=>window.removeEventListener("keydown", onEsc)
            })["ArticleToc.useEffect"];
        }
    }["ArticleToc.useEffect"], []);
    // Focus trap for the mobile dialog
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArticleToc.useEffect": ()=>{
            if (!open) return;
            // focus first link
            const t = setTimeout({
                "ArticleToc.useEffect.t": ()=>{
                    var _firstLinkRef_current;
                    return (_firstLinkRef_current = firstLinkRef.current) === null || _firstLinkRef_current === void 0 ? void 0 : _firstLinkRef_current.focus();
                }
            }["ArticleToc.useEffect.t"], 0);
            const onKeyDown = {
                "ArticleToc.useEffect.onKeyDown": (e)=>{
                    if (e.key !== "Tab" || !dialogRef.current) return;
                    const focusables = dialogRef.current.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
                    if (focusables.length === 0) return;
                    const first = focusables[0];
                    const last = focusables[focusables.length - 1];
                    if (e.shiftKey && document.activeElement === first) {
                        e.preventDefault();
                        last.focus();
                    } else if (!e.shiftKey && document.activeElement === last) {
                        e.preventDefault();
                        first.focus();
                    }
                }
            }["ArticleToc.useEffect.onKeyDown"];
            document.addEventListener("keydown", onKeyDown);
            return ({
                "ArticleToc.useEffect": ()=>{
                    clearTimeout(t);
                    document.removeEventListener("keydown", onKeyDown);
                }
            })["ArticleToc.useEffect"];
        }
    }["ArticleToc.useEffect"], [
        open
    ]);
    // Scroll-spy with IntersectionObserver
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArticleToc.useEffect": ()=>{
            const ids = headings.map({
                "ArticleToc.useEffect.ids": (h)=>h.id
            }["ArticleToc.useEffect.ids"]);
            // Produce HTMLElement[] (not (HTMLElement | null)[])
            const elements = ids.map({
                "ArticleToc.useEffect.elements": (id)=>document.getElementById(id)
            }["ArticleToc.useEffect.elements"]).filter({
                "ArticleToc.useEffect.elements": (el)=>el !== null
            }["ArticleToc.useEffect.elements"]);
            if (elements.length === 0) return;
            const observer = new IntersectionObserver({
                "ArticleToc.useEffect": (entries)=>{
                    // Pick the entry closest to the top that is intersecting
                    const visible = entries.filter({
                        "ArticleToc.useEffect.visible": (e)=>e.isIntersecting
                    }["ArticleToc.useEffect.visible"]).sort({
                        "ArticleToc.useEffect.visible": (a, b)=>Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top)
                    }["ArticleToc.useEffect.visible"]);
                    if (visible[0]) {
                        setActiveId(visible[0].target.id);
                        return;
                    }
                    // Fallback: last section above the viewport
                    const above = elements.filter({
                        "ArticleToc.useEffect.above": (el)=>el.getBoundingClientRect().top - offsetTop <= 0
                    }["ArticleToc.useEffect.above"]).sort({
                        "ArticleToc.useEffect.above": (a, b)=>a.getBoundingClientRect().top - b.getBoundingClientRect().top
                    }["ArticleToc.useEffect.above"]);
                    const last = above[above.length - 1];
                    if (last) setActiveId(last.id);
                }
            }["ArticleToc.useEffect"], {
                rootMargin: "-".concat(offsetTop + 8, "px 0px -65% 0px"),
                threshold: [
                    0,
                    1
                ]
            });
            // Type is HTMLElement[], so observe() receives Element (OK)
            elements.forEach({
                "ArticleToc.useEffect": (el)=>observer.observe(el)
            }["ArticleToc.useEffect"]);
            return ({
                "ArticleToc.useEffect": ()=>observer.disconnect()
            })["ArticleToc.useEffect"];
        }
    }["ArticleToc.useEffect"], [
        headings,
        offsetTop
    ]);
    const prefersReducedMotion = "object" !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const handleJump = (id)=>(e)=>{
            e.preventDefault();
            const el = document.getElementById(id);
            if (!el) return;
            const y = el.getBoundingClientRect().top + window.scrollY - offsetTop;
            if (prefersReducedMotion) {
                window.scrollTo(0, y);
            } else {
                window.scrollTo({
                    top: y,
                    behavior: "smooth"
                });
            }
            setOpen(false);
        };
    if (!headings || headings.length === 0 || tree.length === 0) return null;
    // Desktop aside (sticky, right column)
    const desktop = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "hidden lg:block sticky top-24 self-start max-h-[calc(100vh-8rem)] overflow-auto bg-surface-elevated/60 border border-border/80 rounded-lg p-3 shadow-xl",
        "aria-label": "Table of contents",
        role: "doc-toc",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs font-semibold text-foreground-tertiary mb-2",
                children: "On this page"
            }, void 0, false, {
                fileName: "[project]/src/components/ArticleToc.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-1 text-sm",
                children: tree.map((node)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#".concat(node.id),
                                onClick: handleJump(node.id),
                                "aria-current": activeId === node.id ? "true" : undefined,
                                className: "block py-1 text-foreground-secondary hover:text-apple-blue aria-[current=true]:text-apple-blue aria-[current=true]:font-semibold",
                                children: node.text
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleToc.tsx",
                                lineNumber: 171,
                                columnNumber: 13
                            }, this),
                            node.children.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "mt-1 ml-3 pl-3 border-l border-border/60 space-y-1",
                                children: node.children.map((ch)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#".concat(ch.id),
                                            onClick: handleJump(ch.id),
                                            "aria-current": activeId === ch.id ? "true" : undefined,
                                            className: "block py-0.5 text-foreground-tertiary hover:text-apple-blue aria-[current=true]:text-apple-blue",
                                            children: ch.text
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ArticleToc.tsx",
                                            lineNumber: 183,
                                            columnNumber: 21
                                        }, this)
                                    }, ch.id, false, {
                                        fileName: "[project]/src/components/ArticleToc.tsx",
                                        lineNumber: 182,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleToc.tsx",
                                lineNumber: 180,
                                columnNumber: 15
                            }, this) : null
                        ]
                    }, node.id, true, {
                        fileName: "[project]/src/components/ArticleToc.tsx",
                        lineNumber: 170,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ArticleToc.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ArticleToc.tsx",
        lineNumber: 162,
        columnNumber: 5
    }, this);
    // Mobile floating button + accessible dialog
    const mobile = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setOpen(true),
                className: "lg:hidden fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-apple-blue text-white shadow-xl",
                "aria-label": "Open table of contents",
                "aria-haspopup": "dialog",
                "aria-expanded": open ? "true" : "false",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "ToC"
                }, void 0, false, {
                    fileName: "[project]/src/components/ArticleToc.tsx",
                    lineNumber: 212,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ArticleToc.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this),
            open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden fixed inset-0 z-50",
                role: "dialog",
                "aria-modal": "true",
                "aria-label": "Table of contents",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/40",
                        onClick: ()=>setOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ArticleToc.tsx",
                        lineNumber: 216,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: dialogRef,
                        className: "absolute bottom-0 left-0 right-0 bg-surface-elevated/90 backdrop-blur-md border-t border-border/80 rounded-t-xl p-4 max-h-[70vh] overflow-auto focus:outline-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-foreground",
                                        children: "On this page"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleToc.tsx",
                                        lineNumber: 222,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setOpen(false),
                                        className: "px-3 py-1 rounded-md border border-border/80 text-foreground-secondary",
                                        "aria-label": "Close table of contents",
                                        children: "Close"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleToc.tsx",
                                        lineNumber: 223,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ArticleToc.tsx",
                                lineNumber: 221,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-2 text-sm",
                                children: tree.map((node, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                ref: i === 0 ? firstLinkRef : undefined,
                                                href: "#".concat(node.id),
                                                onClick: handleJump(node.id),
                                                className: "block py-1 text-foreground-secondary hover:text-apple-blue",
                                                children: node.text
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ArticleToc.tsx",
                                                lineNumber: 235,
                                                columnNumber: 19
                                            }, this),
                                            node.children.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "mt-1 ml-3 pl-3 border-l border-border/60 space-y-1",
                                                children: node.children.map((ch)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#".concat(ch.id),
                                                            onClick: handleJump(ch.id),
                                                            className: "block py-0.5 text-foreground-tertiary hover:text-apple-blue",
                                                            children: ch.text
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ArticleToc.tsx",
                                                            lineNumber: 247,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, ch.id, false, {
                                                        fileName: "[project]/src/components/ArticleToc.tsx",
                                                        lineNumber: 246,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ArticleToc.tsx",
                                                lineNumber: 244,
                                                columnNumber: 21
                                            }, this) : null
                                        ]
                                    }, node.id, true, {
                                        fileName: "[project]/src/components/ArticleToc.tsx",
                                        lineNumber: 234,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleToc.tsx",
                                lineNumber: 232,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ArticleToc.tsx",
                        lineNumber: 217,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ArticleToc.tsx",
                lineNumber: 215,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            desktop,
            mobile
        ]
    }, void 0, true);
}
_s(ArticleToc, "iSvycsjCe2bVIbGwrKbkgfWwCvo=");
_c = ArticleToc;
var _c;
__turbopack_context__.k.register(_c, "ArticleToc");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CopyControls.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CopyControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function CopyControls(param) {
    let { targetElementId = 'article-content', className = '' } = param;
    _s();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const copyLink = async ()=>{
        try {
            await navigator.clipboard.writeText(window.location.href);
            setStatus('copied-link');
            setTimeout(()=>setStatus('idle'), 1500);
        } catch (e) {}
    };
    const copyText = async ()=>{
        try {
            var _el_innerText;
            const el = document.getElementById(targetElementId);
            const text = (el === null || el === void 0 ? void 0 : (_el_innerText = el.innerText) === null || _el_innerText === void 0 ? void 0 : _el_innerText.trim()) || '';
            if (text) {
                await navigator.clipboard.writeText(text);
                setStatus('copied-text');
                setTimeout(()=>setStatus('idle'), 1500);
            }
        } catch (e) {}
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2 ".concat(className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: copyLink,
                className: "inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-surface-elevated/60 border border-border hover:bg-surface focus:outline-none",
                "aria-label": "Copy link",
                children: "🔗 Copy link"
            }, void 0, false, {
                fileName: "[project]/src/components/CopyControls.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: copyText,
                className: "inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-surface-elevated/60 border border-border hover:bg-surface focus:outline-none",
                "aria-label": "Copy text",
                children: "📋 Copy text"
            }, void 0, false, {
                fileName: "[project]/src/components/CopyControls.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            status !== 'idle' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs text-foreground-tertiary ml-1",
                children: status === 'copied-link' ? 'Link copied' : 'Text copied'
            }, void 0, false, {
                fileName: "[project]/src/components/CopyControls.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CopyControls.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(CopyControls, "pMVgpsUAJOHrZfHrrx/6nNCpzkc=");
_c = CopyControls;
var _c;
__turbopack_context__.k.register(_c, "CopyControls");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_fdcc9f48._.js.map