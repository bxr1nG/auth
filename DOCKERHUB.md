## Usage

### docker-compose

```
version: "3.9"
services:
  auth-proxy:
    image: bxr1ng/auth:latest
    build: .
    ports:
      - "80:80"
    volumes:
      - /path/to/ini/file.ini:/opt/file.ini
    environment:
      - LOCAL_STORAGE_SCOPE=AP
      - TESTUSERS_INI_FILE=opt/file.ini
      - PROXY_URL=http://localhost:10000
```

### Environment variables

| Variable            | Description                                                     |
|---------------------|-----------------------------------------------------------------|
| LOCAL_STORAGE_SCOPE | Scope for localStorage login history                            |
| TESTUSERS_INI_FILE  | Path to .ini file describing users, their roles and permissions |
| PROXY_URL           | Proxy delivery URL                                              |
