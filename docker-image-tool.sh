#!/usr/bin/env bash

sudo_prefix="sudo"
REGISTRY_NAME=drones/frontend
REGISTRY_TAG=latest

function build {
    ${sudo_prefix} docker build . \
        -t ${REGISTRY_NAME}:${REGISTRY_TAG}  \
        -t ${REGISTRY_NAME}:latest

}

function push {
    ${sudo_prefix} docker push \
        ${REGISTRY_NAME}:${REGISTRY_TAG}

    ${sudo_prefix} docker push \
        ${REGISTRY_NAME}:latest
}

function run {
  ${sudo_prefix} docker run \
      ${REGISTRY_NAME}:${REGISTRY_TAG}
}

function usage {
    cat << EOF
Builds or pushes Docker image with llPlatform
Commands:
  build       Build image.
  push        Push a pre-built image to a registry.
  deploy      Deploy image to k8s
 Options:
  -t tag                Tag to apply to the built image, or to identify the image to be pushed.
  -s                    use if docker available without sudo
EOF
}


while getopts t:s option
do
 case "${option}"
 in
 t) REGISTRY_TAG=${OPTARG};;
 s) sudo_prefix="";;
 *) echo "wrong tag ${option}";;
 esac
done



case "${@: -1}" in
  build)
    build
    ;;
  push)
    push
    ;;
  run)
    run
    ;;
  all)
    build \
    &&
    push \
    &&
    run;
    ;;
  *)
    usage
    exit 1
    ;;
esac
