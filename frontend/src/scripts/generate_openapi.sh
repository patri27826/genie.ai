#!/bin/bash

REPO_ROOT=$($(which git) rev-parse --show-toplevel)
FRONTEND_ROOT="$REPO_ROOT/frontend"
SCHEMA_DOC_FOLDER="$REPO_ROOT/openapi"

LOCAL_SCHEMA_DOC_FOLDER="${FRONTEND_ROOT}/src/scripts/doc"
mkdir "${LOCAL_SCHEMA_DOC_FOLDER}"
cp -r "${SCHEMA_DOC_FOLDER}" "${LOCAL_SCHEMA_DOC_FOLDER}"

# build _merge_api.yaml
cd "${FRONTEND_ROOT}/src/scripts/" && npx openapi-merge-cli
# build typescript models from _merge_api.yaml
openapi-generator generate -i "${LOCAL_SCHEMA_DOC_FOLDER}/openapi/_merge_api.yaml" -g "typescript-axios" -o "${FRONTEND_ROOT}/src/api/openapi"

rm -rf "${LOCAL_SCHEMA_DOC_FOLDER}"
