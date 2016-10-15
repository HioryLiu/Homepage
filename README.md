//The error like this when I use 'npm start':

liudong@ubt:~/Public/proj/Homepage$ npm start

> homepage@1.0.0 start /home/liudong/Public/proj/Homepage
> webpack -d

Hash: 6a42b460a6ba653aad67
Version: webpack 1.13.2
Time: 55ms
   [0] ./app/main.jsx 0 bytes [built] [failed]

ERROR in ./app/main.jsx
Module parse failed: /home/liudong/Public/proj/Homepage/app/main.jsx Unexpected token (6:7)
You may need an appropriate loader to handle this file type.
SyntaxError: Unexpected token (6:7)
    at Parser.pp$4.raise (/home/liudong/Public/proj/Homepage/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp.unexpected (/home/liudong/Public/proj/Homepage/node_modules/acorn/dist/acorn.js:603:10)
    at Parser.pp$3.parseExprAtom (/home/liudong/Public/proj/Homepage/node_modules/acorn/dist/acorn.js:1822:12)
    at Parser.pp$3.parseExprSubscripts (/home/liudong/Public/proj/Homepage/node_modules/acorn/dist/acorn.js:1715:21)
    at Parser.pp$3.parseMaybeUnary (/home/liudong/Public/proj/Homepage/node_modules/acorn/dist/acorn.js:1692:19)
    at Parser.pp$3.parseExprOps (/home/liudong/Public/proj/Homepage/node_modules/acorn/dist/acorn.js:1637:21)
    at Parser.pp$3.parseMaybeConditional (/home/liudong/Public/proj/Homepage/node_modules/acorn/dist/acorn.js:1620:21)
    at Parser.pp$3.parseMaybeAssign (/home/liudong/Public/proj/Homepage/node_modules/acorn/dist/acorn.js:1597:21)
    at Parser.pp$3.parseExprList (/home/liudong/Public/proj/Homepage/node_modules/acorn/dist/acorn.js:2165:22)
    at Parser.pp$3.parseSubscripts (/home/liudong/Public/proj/Homepage/node_modules/acorn/dist/acorn.js:1741:35)
    at Parser.pp$3.parseExprSubscripts (/home/liudong/Public/proj/Homepage/node_modules/acorn/dist/acorn.js:1718:17)
    at Parser.pp$3.parseMaybeUnary (/home/liudong/Public/proj/Homepage/node_modules/acorn/dist/acorn.js:1692:19)
    at Parser.pp$3.parseExprOps (/home/liudong/Public/proj/Homepage/node_modules/acorn/dist/acorn.js:1637:21)
    at Parser.pp$3.parseMaybeConditional (/home/liudong/Public/proj/Homepage/node_modules/acorn/dist/acorn.js:1620:21)
    at Parser.pp$3.parseMaybeAssign (/home/liudong/Public/proj/Homepage/node_modules/acorn/dist/acorn.js:1597:21)
    at Parser.pp$3.parseExpression (/home/liudong/Public/proj/Homepage/node_modules/acorn/dist/acorn.js:1573:21)
    at Parser.pp$1.parseStatement (/home/liudong/Public/proj/Homepage/node_modules/acorn/dist/acorn.js:727:47)
    at Parser.pp$1.parseTopLevel (/home/liudong/Public/proj/Homepage/node_modules/acorn/dist/acorn.js:638:25)
    at Parser.parse (/home/liudong/Public/proj/Homepage/node_modules/acorn/dist/acorn.js:516:17)
    at Object.parse (/home/liudong/Public/proj/Homepage/node_modules/acorn/dist/acorn.js:3098:39)
    at Parser.parse (/home/liudong/Public/proj/Homepage/node_modules/webpack/lib/Parser.js:902:15)
    at DependenciesBlock.<anonymous> (/home/liudong/Public/proj/Homepage/node_modules/webpack/lib/NormalModule.js:104:16)
    at DependenciesBlock.onModuleBuild (/home/liudong/Public/proj/Homepage/node_modules/webpack-core/lib/NormalModuleMixin.js:310:10)
    at nextLoader (/home/liudong/Public/proj/Homepage/node_modules/webpack-core/lib/NormalModuleMixin.js:275:25)
    at /home/liudong/Public/proj/Homepage/node_modules/webpack-core/lib/NormalModuleMixin.js:259:5
    at Storage.finished (/home/liudong/Public/proj/Homepage/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:38:16)
    at /home/liudong/Public/proj/Homepage/node_modules/graceful-fs/graceful-fs.js:78:16
    at FSReqWrap.readFileAfterClose [as oncomplete] (fs.js:445:3)
