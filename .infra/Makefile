HOST_URL ?= dev.wolontariusz.app

init:
	@echo "Creating secrets..."
	openssl rand -hex 24 > secrets/postgres_password.txt
	openssl rand -hex 24 > secrets/wolontariusz_app_postgres_password.txt

	openssl rand -hex 24 > secrets/kratos_postgres_password.txt
	openssl rand -hex 24 > secrets/keto_postgres_password.txt
	openssl rand -hex 24 > secrets/hydra_postgres_password.txt

	sed "s/<postgres_password>/$$(cat secrets/kratos_postgres_password.txt)/g" \
		kratos/kratos.template.yaml > kratos/kratos.yaml
	sed "s/<postgres_password>/$$(cat secrets/keto_postgres_password.txt)/g" \
		keto/keto.template.yaml > keto/keto.yaml
	sed "s/<postgres_password>/$$(cat secrets/hydra_postgres_password.txt)/g" \
		hydra/hydra.template.yaml > hydra/hydra.yaml

	@echo "Configuring hosts..."
	sed "s/<auth_hostname>/auth.$(HOST_URL)/g" \
		kratos/kratos.yaml > kratos/kratos.yaml.tmp
	sed "s/<domain_hostname>/$(HOST_URL)/g" \
		kratos/kratos.yaml.tmp > kratos/kratos.yaml
	rm kratos/kratos.yaml.tmp

	sed "s/<domain_host>/$(HOST_URL)/g" \
		nginx/site.tmpl.conf > nginx/site.conf


deep-clean:
	rm secrets/*.txt || true
	rm kratos/kratos.yaml keto/keto.yaml hydra/hydra.yaml || true
	docker volume rm \
		infra_ory-kratos-data infra_pg-data
	# docker volume rm \
	# 	infra_ory-hydra-data infra_ory-keto-data \
	# 	infra_ory-kratos-data infra_pg-data

up:
	docker compose up -d

down:
	docker compose down
