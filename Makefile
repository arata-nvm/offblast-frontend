ENV_LOCAL_FILE := env.local
ENV_LOCAL := $(shell cat $(ENV_LOCAL_FILE))

serve:
	$(ENV_LOCAL) yarn serve

.PHONY: serve