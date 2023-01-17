## Usage

### docker-compose

```
version: "3.9"
services:
  auth-proxy:
    image: bxr1ng/auth:latest
    ports:
      - "80:80"
    volumes:
      - /path/to/ini/file.ini:/opt/file.ini
    environment:
      - LOCAL_STORAGE_SCOPE=AP
      - TESTUSERS_INI_FILE=opt/file.ini
      - PROXY_URL=http://localhost:10000
      - APP_SCOPE=session
      - SESSION_SECRET=session secret
      - DEFAULT_CONTEXT=/
```

### Environment variables

| Variable            | Values              | Default                  | Description                                                            |
|---------------------|---------------------|--------------------------|------------------------------------------------------------------------|
| LOCAL_STORAGE_SCOPE | `string`            | `null`                   | Scope for localStorage login history                                   |
| TESTUSERS_INI_FILE  | `path`              | `null`                   | Path to .ini file describing users, their roles and permissions        |
| PROXY_URL           | `string`            | "http://localhost:10000" | Proxy delivery URL                                                     |
| APP_SCOPE           | "session", "global" | "global"                 | Identity scope (globally for all requests or at browser session level) |
| SESSION_SECRET      | `string`            | "session secret"         | Secret used to sign the session ID cookie when `APP_SCOPE=session`     |
| DEFAULT_CONTEXT     | `string`            | "/"                      | Default path for Login button                                          |
