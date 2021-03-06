.PHONY: help

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'


lint:
	@yarn lint

test:
	@yarn test

build:
	@yarn build

integrity:
	sh scripts/generate_integrity.sh $(DIST)
