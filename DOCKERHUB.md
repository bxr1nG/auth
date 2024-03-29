# Usage

## docker-compose.yml

```
version: "3.9"
services:
  auth-proxy:
    image: bxr1ng/auth:latest
    ports:
      - "80:80"
    volumes:
      - /path/to/file/testusers.yml:/opt/testusers.yml
      - /path/to/file/config.yml:/opt/config.yml
```

## config.yml

```
testusers: "/opt/testusers.yml"
scope: "session"
localStorage: "APP"
proxyURL: "https://www.google.com"
defaultContext: "/"
cache: false
extraFields:
  -
    name: "Extra-Field-Name"
    label: "Extra field label"
    value: "'Extra field value'"
    size: "medium"
```

## Config variables

### testusers

`string: <any string>`

Path to .yaml (.yml) or .ini file describing users, their roles and permissions.

> **ATTENTION:**  This field is required.

> **ATTENTION:**  Using the ini format for testusers is outdated, suggest switching to the yaml format.

### scope

`string = 'global': 'global' | 'session'`

| Option    | Description                                           |
|-----------|-------------------------------------------------------|
| `global`  | Uses a shared store of rights that covers all clients |
| `session` | Uses shared rights only within the browser session    |

> **NOTE:**  Other values will use `'global'`.

### localStorage

`string = null: <any string>`

Scope for localStorage login history and storage of extra fields.

> **NOTE:**  It is recommended to use different values for different sets of extra fields.

### proxyURL

`string: <any string>`

Proxy delivery URL.

> **NOTE:**  You can use [testing delivery server](https://hub.docker.com/r/bxr1ng/auth-listener) if you don't have your own.

> **ATTENTION:**  This field is required.

### defaultContext

`string = '/': <any string>`

Default path for Login button.

### cache

`boolean = true: true | false`

| Option  | Description                          |
|---------|--------------------------------------|
| `true`  | Cache config file data on first load |
| `false` | Check for updates in config file     |

### extraFields

`object[] = []: <array of objects>`

### extraFields[].name

`string: <any string>`

Header field name.

### extraFields[].label

`string: <any string>`

Displayed field name.

### extraFields[].value

`string = null: <any string>`

The code that will be executed using the `eval` function to set the default value of the field.

The tagged values described in the table can be used in the string.

| Variable | Description                                                              |
|----------|--------------------------------------------------------------------------|
| `index`  | User index from the `testusers.ini` file                                 |
| `scope`  | Value of the `localStorage` field from the `config.yml` file             |
| `values` | The object containing all extra fields that were used for the last login |

**Examples**

```
extraFields:
  # ...
  -
    # ...
    value: "`John${index}`"
```

```
extraFields:
  # ...
  -
    # ...
    name: "user-surname"
    value: "values['user-surname'] || 'Doe'"
```

### extraFields[].size

`string = 'large': 'small' | 'medium' | 'large'`

| Option     | Description                                       |
|------------|---------------------------------------------------|
| `'small'`  | One line can contain up to 4 such fields          |
| `'medium'` | One line can contain up to 2 such fields          |
| `'large'`  | Each field occupies the entire width of the block |

> **NOTE:**  If the width of the block is reduced, the fields will be moved to the next line if possible.

## You still can use environment variables

```
version: "3.9"
  services:
    ports:
      - "80:80"
    volumes:
      - /path/to/file/testusers.ini:/opt/testusers.ini
    environment:
      - TESTUSERS_FILE=opt/testusers.ini
      - APP_SCOPE=session
      - LOCAL_STORAGE_SCOPE=APP
      - PROXY_URL=https://www.google.com
      - DEFAULT_CONTEXT=/
      - CACHE=false
```
