#!/usr/bin/env bash
set -e

# AUTH stack
KRATOS_PASSWORD=$(cat /run/secrets/kratos_postgres_password)
KETO_PASSWORD=$(cat /run/secrets/keto_postgres_password)
HYDRA_PASSWORD=$(cat /run/secrets/hydra_postgres_password)

psql -v ON_ERROR_STOP=1 <<-EOSQL
	CREATE USER kratos_user WITH PASSWORD '$KRATOS_PASSWORD';
	CREATE DATABASE kratos OWNER kratos_user;
EOSQL
psql -v ON_ERROR_STOP=1 <<-EOSQL
	CREATE USER keto_user WITH PASSWORD '$KETO_PASSWORD';
	CREATE DATABASE keto OWNER keto_user;
EOSQL
psql -v ON_ERROR_STOP=1 <<-EOSQL
	CREATE USER hydra_user WITH PASSWORD '$HYDRA_PASSWORD';
	CREATE DATABASE hydra OWNER hydra_user;
EOSQL

# App stack
WOLONTARIUSZ_APP_PASSWORD=$(cat /run/secrets/wolontariusz_app_postgres_password)

psql -v ON_ERROR_STOP=1 <<-EOSQL
	CREATE USER wolontariusz_app_user WITH PASSWORD '$WOLONTARIUSZ_APP_PASSWORD';
	CREATE DATABASE wolontariusz_app OWNER wolontariusz_app_user;
EOSQL
