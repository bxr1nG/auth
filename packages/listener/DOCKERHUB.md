## Usage

### docker-compose

```
version: "3.9"
services:
  auth-listener:
    image: bxr1ng/auth-listener:latest
```

## Need to be used with [bxr1ng/auth](https://hub.docker.com/r/bxr1ng/auth) image

Change the `PROXY_URL` environment variable to the URL of the `auth-listener` container. For example, like this:

```
- PROXY_URL=http://auth-listener:10000
```