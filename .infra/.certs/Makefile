prod:
	acme.sh --issue --server letsencrypt --dns dns_porkbun \
		-d "wolontariusz.app" \
		-d "*.wolontariusz.app"

dev:
	acme.sh --issue --server letsencrypt --dns dns_porkbun --force \
		--cert-file wolontariusz.app.cer \
		--key-file wolontariusz.app.key \
		-d "*.dev.wolontariusz.app"
