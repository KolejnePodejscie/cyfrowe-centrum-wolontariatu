init:
	@echo "Creating secrets..."
	openssl rand -hex 24 > secrets/postgres_password.txt
	openssl rand -hex 24 > secrets/wolontariusz_app_postgres_password.txt

	openssl rand -hex 24 > secrets/kratos_postgres_password.txt
	sed "s/<postgres_password>/$$(cat secrets/kratos_postgres_password.txt)/g" \
		kratos/kratos.template.yaml > kratos/kratos.yaml

	openssl rand -hex 24 > secrets/keto_postgres_password.txt
	sed "s/<postgres_password>/$$(cat secrets/keto_postgres_password.txt)/g" \
		keto/keto.template.yaml > keto/keto.yaml

	openssl rand -hex 24 > secrets/hydra_postgres_password.txt
	sed "s/<postgres_password>/$$(cat secrets/hydra_postgres_password.txt)/g" \
		hydra/hydra.template.yaml > hydra/hydra.yaml

init-clean:
	rm secrets/*.txt kratos/kratos.yaml keto/keto.yaml hydra/hydra.yaml

up:
	docker compose up -d

clean:
	docker volume rm \
		infra_ory-hydra-data infra_ory-keto-data \
		infra_ory-kratos-data infra_pg-data
