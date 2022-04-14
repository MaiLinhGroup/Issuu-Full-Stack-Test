.PHONY: today list

objects = $(wildcard *.in)
outputs := $(objects:.in=.txt)

setup:
	@pip install -r requirements.txt --no-cache-dir
	@echo 'Installed all requirements to (virtual) environment'

install: add compile update check
	@echo "Installed $(package_name) to (virtual) environment"

add:
	@echo >> requirements.in && echo $(package_name) >> requirements.in
	@sed -i "" '/^\s*$$/d' requirements.in

compile: $(outputs)

%.txt: %.in
	@CUSTOM_COMPILE_COMMAND="make compile" \
	pip-compile --allow-unsafe --generate-hashes -v --output-file $@ $<

update:
	@echo "Update (virtual) environment to match the content of requirements.txt"
	@pip-sync requirements.txt

check:
	@pip check
	@which pip-compile > /dev/null

clean: check
	- rm requirements.txt

refresh: clean compile update check

today:
	@date

list:
	@LC_ALL=C $(MAKE) -pRrq -f $(lastword $(MAKEFILE_LIST)) : 2>/dev/null \
	| awk -v RS= -F: '/^# File/,/^# Finished Make data base/ {if ($$1 !~ "^[#.]") {print $$1}}' \
	| sort | egrep -v -e '^[^[:alnum:]]' -e '^$@$$'

run:
	@uvicorn src.app:api --host 0.0.0.0 --port 8000 --reload --log-level info
