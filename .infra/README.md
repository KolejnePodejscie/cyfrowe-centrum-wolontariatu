First - init secrets and configs with the following command:

```sh
make init
```

Second - start docker containers using:

```sh
make up
```

Add the following/similar entries to `/etc/hosts`

```
127.0.0.1   auth.dev.wolontariusz.app
127.0.0.1   api.dev.wolontariusz.app
```

To remove volumes after:

```sh
make deep-clean
```

---

There is a mock mailserver running on port `4436`.
