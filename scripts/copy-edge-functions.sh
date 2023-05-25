rm -rf netlify
mkdir -p netlify/edge-functions/hello
cp -r packages/config-function/dist/* netlify/edge-functions/hello
