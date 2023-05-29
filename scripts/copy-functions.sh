rm -rf netlify
mkdir -p netlify/functions/api
cp -r packages/api/.graphweaver/backend/* netlify/functions/api
