rm -rf netlify
mkdir -p netlify/functions/api
pnpm esbuild --bundle ./packages/api/.graphweaver/backend --platform=node --outfile=./netlify/functions/api/index.js
