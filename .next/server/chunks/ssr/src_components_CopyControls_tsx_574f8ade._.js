module.exports = [
"[project]/src/components/CopyControls.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CopyControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function CopyControls({ targetElementId = 'article-content', className = '' }) {
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('idle');
    const copyLink = async ()=>{
        try {
            await navigator.clipboard.writeText(window.location.href);
            setStatus('copied-link');
            setTimeout(()=>setStatus('idle'), 1500);
        } catch  {}
    };
    const copyText = async ()=>{
        try {
            const el = document.getElementById(targetElementId);
            const text = el?.innerText?.trim() || '';
            if (text) {
                await navigator.clipboard.writeText(text);
                setStatus('copied-text');
                setTimeout(()=>setStatus('idle'), 1500);
            }
        } catch  {}
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center gap-2 ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            status !== 'idle' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
];

//# sourceMappingURL=src_components_CopyControls_tsx_574f8ade._.js.map