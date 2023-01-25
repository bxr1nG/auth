# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### 1.1.8 (2023-01-25)


### ⚠ BREAKING CHANGES

* **proxy:** Now there is no need to fill out all the fields of Login form
* **ui:** Now there is no need to fill out all the fields of Login form
* **loginform:** State select menu no longer shows values saved in localStorage

### Features

* add favicon ([b0befd2](https://github.com/bxr1nG/auth/commit/b0befd26ae98cdfd0ab49ab6f04b434a3520d880))
* add URL parser and modal for logs table ([74d3ffb](https://github.com/bxr1nG/auth/commit/74d3ffb5911dbc09271f455838c4d01c52a1d178))
* **listener:** separate listener project to different docker image ([b61cf9a](https://github.com/bxr1nG/auth/commit/b61cf9ad48b4e94b001bd616111258a4a5836e43))
* **loginform:** add History modal ([b987543](https://github.com/bxr1nG/auth/commit/b98754302169e2f3d56b5b2fe64795b162deb358))
* **loginform:** remove history values from state select menu ([98d888a](https://github.com/bxr1nG/auth/commit/98d888a53c61f5004a71af22e5d5fd8f4d0feb59))
* **loginform:** save rarely used fields in localStorage ([a794181](https://github.com/bxr1nG/auth/commit/a79418147613238815aa030a09a2495a64793c18))
* **logstable:** add search field to Logs table ([d29c5d9](https://github.com/bxr1nG/auth/commit/d29c5d9358b6ed16778e3ae8ae404a2b3b732aa5))
* **proxy:** add browser session scoped mode for login rights ([cc87997](https://github.com/bxr1nG/auth/commit/cc87997295b5f1a9f9025aabcf657e4b8c166b68))
* **proxy:** add client field to logs ([26814d7](https://github.com/bxr1nG/auth/commit/26814d776cee4a6dde8797ab30777027bdfd1086))
* **proxy:** make fields optional ([ee65824](https://github.com/bxr1nG/auth/commit/ee65824ad9cabbdbe416442626285cce917b81c1))
* remove listener project from docker build, add graceful shutdown ([3f3a149](https://github.com/bxr1nG/auth/commit/3f3a149e382ed5308dd44f7f8173d1919c7d496d))
* **ui:** add filter by client to logs table ([9e2b82e](https://github.com/bxr1nG/auth/commit/9e2b82e717f1078a86152dc68df15d37be4944cb))
* **ui:** make fields optional ([74c0dbe](https://github.com/bxr1nG/auth/commit/74c0dbe2ff6de181655f0223b08b1a1aeaa23a9c))


### Bug Fixes

* add default path for Login button ([a4dd7dd](https://github.com/bxr1nG/auth/commit/a4dd7ddc8734bde44d70eb3e8f67b000ef1fc93b))
* add name to filter by client menu in Logs table ([4962e95](https://github.com/bxr1nG/auth/commit/4962e952383dad644d722c142f0dd9d53116bd68))
* add redirect to requested path while not authorized ([fd18c91](https://github.com/bxr1nG/auth/commit/fd18c91b52a68e82b1fb2827abfb1a640b71d1a2))
* add server side pagination to Logs table ([3863ab0](https://github.com/bxr1nG/auth/commit/3863ab02e6682be70f4b5f0fa99d0b484f91c296))
* change number fields type to string ([d8a48dd](https://github.com/bxr1nG/auth/commit/d8a48dd285eaec025e3315717cdfafab9b64ee6f))
* **changelog.md:** fix CHANGELOG.md file ([4e89a23](https://github.com/bxr1nG/auth/commit/4e89a23a0290fc169149cf5d081cc2b9c19a5ba3))
* **cookiescleaner:** fix cookie cleanup ([d4e5b46](https://github.com/bxr1nG/auth/commit/d4e5b46fa0ac5c24f87a3107702640c7380af1f9))
* **historybutton:** add fixed width for table columns ([2e45a0c](https://github.com/bxr1nG/auth/commit/2e45a0ca58a0d65a80ac1f867a5ea037107eb31a))
* **historybutton:** add max height for permissions and roles containers in history table ([0e47128](https://github.com/bxr1nG/auth/commit/0e4712827eb2d3dcfe77e457dfb696fa5840fa46))
* **historybutton:** change history modal styles ([e504d62](https://github.com/bxr1nG/auth/commit/e504d62668f7f8dd48338f331916f3f05b693676))
* **index.html:** add mobile responsibility ([2aa33c9](https://github.com/bxr1nG/auth/commit/2aa33c96868738537845f0e704b492a395d6a529))
* **infobutton:** add fixed width for table columns ([c8f7a66](https://github.com/bxr1nG/auth/commit/c8f7a664222b9fdbb2b3e797ebdd8a6032ce650f))
* **listener:** remove ports value from dockerhub readme ([97d7bd1](https://github.com/bxr1nG/auth/commit/97d7bd17861db3004bf56ec9f97620e6b29f91bb))
* **loginform:** add permissions sorting when displaying ([1f56748](https://github.com/bxr1nG/auth/commit/1f567482872e7cb77ac60866e9d61578acac9214))
* **loginform:** add validation of semicolons in permissions field ([1c263bd](https://github.com/bxr1nG/auth/commit/1c263bdc9316cfc48e8bdc686f69ae0b4898d6fd))
* **loginform:** change IAMUserID field width ([574f656](https://github.com/bxr1nG/auth/commit/574f6563c662a04c76af87fb81207d074357ed69))
* **loginform:** change order of fields ([500e11c](https://github.com/bxr1nG/auth/commit/500e11c3bea1f66ab7b69ea938383f0486d19b30))
* **loginform:** change styles for state menu and history button line ([763a006](https://github.com/bxr1nG/auth/commit/763a006e067660f5415c813a6c609931eba2c359))
* **loginform:** create an accordion and move fields after divider into it ([ed803bf](https://github.com/bxr1nG/auth/commit/ed803bfd1246a0ad258a8784d82b7a54cc059422))
* **loginform:** fix default context bug ([62466f9](https://github.com/bxr1nG/auth/commit/62466f92b24bcbf1396dcdee784123bb5ce618fa))
* **loginform:** fix input in permissions field ([5ba5574](https://github.com/bxr1nG/auth/commit/5ba5574983b15956eaaab7e087a313ca31c62573))
* **loginform:** fix state 'out of range' warning when using values from history ([8247cda](https://github.com/bxr1nG/auth/commit/8247cdab75b52934fee6d8e0fb60b61bfd182bdd))
* **loginform:** move reverse formatting of permissions from onChange to onSubmit function ([d81530b](https://github.com/bxr1nG/auth/commit/d81530b51e4e88ec7d2c3f3714f674fb89165e09))
* **loginform:** optimize process of inserting a new value into history ([b8b1051](https://github.com/bxr1nG/auth/commit/b8b10511444813ccc3ce14436f628be9f02d0d1a))
* **loginform:** remove Logout button from Login form ([408b1cb](https://github.com/bxr1nG/auth/commit/408b1cbadb68e3b2dac92b06238e1eee26e19ac1))
* **loginform:** replace IAMUserID field ([60825a0](https://github.com/bxr1nG/auth/commit/60825a042b7d5b6722f28d4a47e1a32aafcc4b9f))
* **logstable:** add fixed width for table columns ([e2f47fc](https://github.com/bxr1nG/auth/commit/e2f47fcdec08f32ccc51566df5ba712300859a47))
* **logstable:** change logs table styles, add copy and open buttons ([041b6d5](https://github.com/bxr1nG/auth/commit/041b6d5e3100f48917947730e5019dc74bbc8e2c))
* **logstable:** decode URL string ([934b320](https://github.com/bxr1nG/auth/commit/934b32040a827935c7189b65317a89c6bb618ddd))
* **logstable:** fix bug with counting rows in Logs table ([c3f8781](https://github.com/bxr1nG/auth/commit/c3f87819179f46a878897a95dd9b7664ae0269be))
* **logstable:** fix client select display condition ([b0e0a8d](https://github.com/bxr1nG/auth/commit/b0e0a8d961e0e0d4cbb5746d737622095094515a))
* **logsview:** fix bug with logs page and table height, add pagination ([81eba1c](https://github.com/bxr1nG/auth/commit/81eba1c41e333497b01105071fd08ee0bc69bf32))
* **management.routes.ts:** decode URI before filter by search query ([022bcf6](https://github.com/bxr1nG/auth/commit/022bcf6b6771153461aa722154bf15bf43df6c12))
* **management:** fix bug with redirect to login page on development mode ([0cc1f8d](https://github.com/bxr1nG/auth/commit/0cc1f8daf1a2ca286139b99381bc859933a935df))
* **permissionsfield:** disable spellcheck on permissions field ([fc8d96c](https://github.com/bxr1nG/auth/commit/fc8d96cfbed07fe8161bb82eaa282d91a460153f))
* **proxy:** change onstart console logs ([c3f5a02](https://github.com/bxr1nG/auth/commit/c3f5a023de781843e50c0fc9384e881bdbd7fc75))
* **proxy:** fix session middleware and dockerhub.md file ([a4054de](https://github.com/bxr1nG/auth/commit/a4054dead67284785499c4a4bf96832914405dba))
* **statefield:** add default first name for values from testusers.ini file ([241775c](https://github.com/bxr1nG/auth/commit/241775c22ee1a4f173ada7cbd78928259794952f))
* **statefield:** change text format in select menu ([acbcba2](https://github.com/bxr1nG/auth/commit/acbcba26b8231e4ecc4b9390df7f8ee0134d8159))
* **statefield:** remove Password1 value from roles in state menu ([b4de94c](https://github.com/bxr1nG/auth/commit/b4de94c586dc767b8302eb6d15f923cb575c686f))
* **ui:** remove domain name from requests ([5ecbcb3](https://github.com/bxr1nG/auth/commit/5ecbcb3e97f94f27ba3604533fc2097155188864))
* use static build of ui in dev mode ([9405989](https://github.com/bxr1nG/auth/commit/94059898c0f3c8f36de8a6453768da29dc48bf8c))

### [1.1.7](https://github.com/bxr1nG/auth/compare/v1.1.2...v1.1.7) (2023-01-18)


### Features

* **listener:** separate listener project to different docker image ([69b352e](https://github.com/bxr1nG/auth/commit/69b352eb3d4d8f6ef6ceeed449a6d8cbb9703aad))
* remove listener project from docker build, add graceful shutdown ([1422be1](https://github.com/bxr1nG/auth/commit/1422be1a0822e0cded5b7de91960a4b4f52b54b4))


### Bug Fixes

* add default path for Login button ([a455447](https://github.com/bxr1nG/auth/commit/a455447aa8c3dd99785c0d314bab95703332f218))

### [1.1.6](https://github.com/bxr1nG/auth/compare/v1.1.5...v1.1.6) (2023-01-17)


### Features

* **proxy:** add client field to logs ([537ea9d](https://github.com/bxr1nG/auth/commit/537ea9df8faafc666f5a4dfbc21b4d92d6667bb3))
* **ui:** add filter by client to logs table ([f0e3c37](https://github.com/bxr1nG/auth/commit/f0e3c3706e0380aef9a6a2a57e8a57cbc3cb8375))


### Bug Fixes

* add redirect to requested path while not authorized ([8ffb89b](https://github.com/bxr1nG/auth/commit/8ffb89b75aca61518f16b38e1efc235d4ed30073))
* **logstable:** fix bug with counting rows in Logs table ([3791d5a](https://github.com/bxr1nG/auth/commit/3791d5af7f27a2e6123d32d020ba56289cf84083))
* **logsview:** fix bug with logs page and table height, add pagination ([b930ef2](https://github.com/bxr1nG/auth/commit/b930ef2735d943ed2474e94fe03af19e00f2606d))
* **proxy:** fix session middleware and dockerhub.md file ([2e3593e](https://github.com/bxr1nG/auth/commit/2e3593e6dd599252421bb1e72dce6214b4f42a64))

### [1.1.5](https://github.com/bxr1nG/auth/compare/v1.1.4...v1.1.5) (2023-01-12)


### Features

* **proxy:** add browser session scoped mode for login rights ([7bcad2b](https://github.com/bxr1nG/auth/commit/7bcad2b8380c7125e52243cba962ba24c69c0b8f))

### [1.1.4](https://github.com/bxr1nG/auth/compare/v1.1.3...v1.1.4) (2023-01-10)


### Features

* add URL parser and modal for logs table ([8d87475](https://github.com/bxr1nG/auth/commit/8d87475fc6bd9335a6666a223b66e1c1829a617a))

### [1.1.3](https://github.com/bxr1nG/auth/compare/v1.1.1...v1.1.3) (2023-01-09)

### Bug Fixes

* **historybutton:** change history modal styles ([10c9a33](https://github.com/bxr1nG/auth/commit/10c9a33d257a75499f582b9f91665b8cbaa30351))
* **loginform:** add validation of semicolons in permissions field ([8d56f8a](https://github.com/bxr1nG/auth/commit/8d56f8aa844461312f73d1b30d7978fff0fbb858))
* **loginform:** fix input in permissions field ([b1f6bff](https://github.com/bxr1nG/auth/commit/b1f6bff0a6a46dc8b00dd39f339583146ade254d))
* **loginform:** fix state 'out of range' warning when using values from history ([cd97745](https://github.com/bxr1nG/auth/commit/cd97745afd7227d9e07c416ba3cb0ade45ec4226))
* **logstable:** change logs table styles, add copy and open buttons ([7f667ec](https://github.com/bxr1nG/auth/commit/7f667ec384cafd3873fbc3c24aee88f58b97a547))

### 1.1.2 (2023-01-05)

### Features

* **loginform:** save rarely used fields in localStorage ([7828678](https://github.com/bxr1nG/auth/commit/78286789d2d4e5011edcea931b37e040ed837522))

### [1.1.1](https://github.com/bxr1nG/auth/compare/v1.1.0...v1.1.1) (2023-01-04)


### Bug Fixes

* change number fields type to string ([b05f5cc](https://github.com/bxr1nG/auth/commit/b05f5ccffe8d2c2270dda28543081baa91bdce76))
* **cookiescleaner:** fix cookie cleanup ([df04c93](https://github.com/bxr1nG/auth/commit/df04c93199a819977d1f8503352e6ec937d2a1fd))
* **loginform:** change IAMUserID field width ([b62c661](https://github.com/bxr1nG/auth/commit/b62c6610ea2213b465dde9c8b0bf3803d22f8c7d))
* **loginform:** change styles for state menu and history button line ([50b660d](https://github.com/bxr1nG/auth/commit/50b660d39a245997f131cc4e12af3d3a35b2bd77))
* **loginform:** create an accordion and move fields after divider into it ([73a0b6b](https://github.com/bxr1nG/auth/commit/73a0b6b73ed06d835ac381a96b73b60a997ecbc8))
* **loginform:** replace IAMUserID field ([204281c](https://github.com/bxr1nG/auth/commit/204281cf34732aa484e1e5f7e2bcc592691e49d2))
* **management:** fix bug with redirect to login page on development mode ([051c403](https://github.com/bxr1nG/auth/commit/051c4032e724c1292c117cb7559df58dac89750c))
* **permissionsfield:** disable spellcheck on permissions field ([ffd16e4](https://github.com/bxr1nG/auth/commit/ffd16e4edba227bf17833f72138be2412d964e1e))
* **proxy:** change onstart console logs ([a303e1f](https://github.com/bxr1nG/auth/commit/a303e1ff95fa95bc0e0fb97c131228d385c08004))
* **statefield:** add default first name for values from testusers.ini file ([47f69c2](https://github.com/bxr1nG/auth/commit/47f69c2e21e4634ef5af72fadbb54e4910dff0e0))
* **statefield:** remove Password1 value from roles in state menu ([0e349a8](https://github.com/bxr1nG/auth/commit/0e349a83f1335cb5252f64a989af8465ee31611b))

## 1.1.0 (2023-01-04)

## [1.0.3](https://github.com/bxr1nG/auth/compare/v1.0.2...v1.0.3) (2023-01-03)


### ⚠ BREAKING CHANGES

* **proxy:** Now there is no need to fill out all the fields of Login form
* **ui:** Now there is no need to fill out all the fields of Login form
* **loginform:** State select menu no longer shows values saved in localStorage

### Features

* **loginform:** add History modal ([b987543](https://github.com/bxr1nG/auth/commit/b98754302169e2f3d56b5b2fe64795b162deb358))
* **loginform:** remove history values from state select menu ([98d888a](https://github.com/bxr1nG/auth/commit/98d888a53c61f5004a71af22e5d5fd8f4d0feb59))
* **proxy:** make fields optional ([ee65824](https://github.com/bxr1nG/auth/commit/ee65824ad9cabbdbe416442626285cce917b81c1))
* **ui:** make fields optional ([74c0dbe](https://github.com/bxr1nG/auth/commit/74c0dbe2ff6de181655f0223b08b1a1aeaa23a9c))


### Bug Fixes

* **loginform:** add permissions sorting when displaying ([1f56748](https://github.com/bxr1nG/auth/commit/1f567482872e7cb77ac60866e9d61578acac9214))
* **loginform:** change order of fields ([500e11c](https://github.com/bxr1nG/auth/commit/500e11c3bea1f66ab7b69ea938383f0486d19b30))
* **loginform:** optimize process of inserting a new value into history ([b8b1051](https://github.com/bxr1nG/auth/commit/b8b10511444813ccc3ce14436f628be9f02d0d1a))
* **statefield:** change text format in select menu ([acbcba2](https://github.com/bxr1nG/auth/commit/acbcba26b8231e4ecc4b9390df7f8ee0134d8159))

### [1.0.2](https://github.com/bxr1nG/auth/compare/v1.0.1...v1.0.2) (2022-12-29)


### Bug Fixes

* **loginform:** move reverse formatting of permissions from onChange to onSubmit function ([d81530b](https://github.com/bxr1nG/auth/commit/d81530b51e4e88ec7d2c3f3714f674fb89165e09))

### [1.0.1](https://github.com/bxr1nG/auth/compare/v1.0.0...v1.0.1) (2022-12-28)


### Bug Fixes

* **loginform:** remove Logout button from Login form ([408b1cb](https://github.com/bxr1nG/auth/commit/408b1cbadb68e3b2dac92b06238e1eee26e19ac1))

## 1.0.0 (2022-12-28)
