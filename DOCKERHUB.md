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
      - /path/to/file/config.yml:/opt/config.yml
      - /path/to/file/testusers.ini:/opt/testusers.yml
```

## config.yml

```
testusers: "/opt/testusers.ini"
scope: "session"
localStorage: "APP"
defaultContext: "/"
cache: false
router:
  "/a": "http://localhost:10000/hello"
  "/b/hello": "http://localhost:10000/hello"
  "/c/hello": "http://localhost:10000"
  "/": "https://www.google.com"
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

Path to .ini or .yml (.yaml) file describing users, their roles and permissions.

> **ATTENTION:**  Using the ini format for testusers is outdated, suggest using yaml format.

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

### defaultContext

`string = '/': <any string>`

Default path for Login button.

### cache

`boolean = true: true | false`

| Option  | Description                          |
|---------|--------------------------------------|
| `true`  | Cache config file data on first load |
| `false` | Check for updates in config file     |

### router

`object = {}: <string key-value pairs>`

The proxyURL of previous versions has been replaced by router, making it possible to specify multiple proxy targets.

**Examples**

```
router:
  "/a": "http://localhost:10000/hello"       # /a/world       => http://localhost:10000/hello/world
  "/b/hello": "http://localhost:10000/hello" # /b/hello/world => http://localhost:10000/hello/world
  "/c/hello": "http://localhost:10000"       # /c/hello/world => http://localhost:10000/world
  "/": "https://www.google.com"              # /something     => https://www.google.com/something
```

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

## If you want to use the old functionality, we suggest using [bxr1ng/auth@1.1.18](https://hub.docker.com/layers/bxr1ng/auth/1.1.18/images/sha256-62837039b2ea8629a8bb0e87a93ea558119b74ebeee3cd5f98c083b8d7443202?context=repo)
