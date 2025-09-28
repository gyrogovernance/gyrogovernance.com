(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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

//# sourceMappingURL=src_components_CopyControls_tsx_9f3c57db._.js.map