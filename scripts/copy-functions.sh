rm -rf netlify
mkdir -p netlify/functions/hello
cp -r packages/config-function/dist/* netlify/functions/hello
