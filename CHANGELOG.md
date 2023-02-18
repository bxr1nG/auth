# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.1.12](https://github.com/bxr1nG/auth/compare/v1.1.11...v1.1.12) (2023-02-18)


### Features

* **cross-var:** add typescript ([0364884](https://github.com/bxr1nG/auth/commit/036488461c9238535a55a82cc4684a447d04f34a)), closes [#1](https://github.com/bxr1nG/auth/issues/1)


### Bug Fixes

* **cross-var:** add Babel ([4f9c063](https://github.com/bxr1nG/auth/commit/4f9c0632eb2e5ff07a75bc6ae3b4cdc89cfa5a89)), closes [#5](https://github.com/bxr1nG/auth/issues/5)
* **logstable:** fix sending requests while waiting search sync ([362a6d4](https://github.com/bxr1nG/auth/commit/362a6d455cc4a6ede8f4cdddd7012874b5c8dbf6))

### [1.1.11](https://github.com/bxr1nG/auth/compare/v1.1.10...v1.1.11) (2023-02-12)


### Features

* **ui:** create request builder ([df180f2](https://github.com/bxr1nG/auth/commit/df180f24ef5a9a6034b1eeaec1d60425374c2326)), closes [#4](https://github.com/bxr1nG/auth/issues/4)
* **ui:** start using react query for managing fetching data ([b9b0567](https://github.com/bxr1nG/auth/commit/b9b0567681fef223ef693e1bdbce1f2b71ce652f))


### Bug Fixes

* **api/getlogs:** use axios params instead of stringifying them manually ([70ff518](https://github.com/bxr1nG/auth/commit/70ff518a0342afe62997a433c592197d4dc86eb0))
* **api/login:** add headers to request ([7f9eeb4](https://github.com/bxr1nG/auth/commit/7f9eeb4c969fafa7e8022d027a54fffc6d38d389))
* **index.html:** fix front drop when using hot reload ([0be8be3](https://github.com/bxr1nG/auth/commit/0be8be37b386d3cf58b09736d85d426050bfeeec))
* **logstable:** fix unique rows keys problem ([b5a4607](https://github.com/bxr1nG/auth/commit/b5a4607bb59f43607745d0c2a4143dd5ef1bfba1))
* **proxy:** refactor config object ([7da0e2e](https://github.com/bxr1nG/auth/commit/7da0e2e9c18ad78acc9aaf13b551adb671981bbe)), closes [#3](https://github.com/bxr1nG/auth/issues/3)
* **ui/src/api:** rewrite login and logout fetches using axios ([a0fda58](https://github.com/bxr1nG/auth/commit/a0fda5887d0d8f5de3f50af8afb418277a746a4f))
* **ui:** use axios instead of fetch ([f37a4e0](https://github.com/bxr1nG/auth/commit/f37a4e03a2f622102369c9572c0080d0bb15339e))

### [1.1.10](https://github.com/bxr1nG/auth/compare/v1.1.9...v1.1.10) (2023-02-06)


### Bug Fixes

* add import order rules to ESLint ([222018b](https://github.com/bxr1nG/auth/commit/222018bf148e26f113a65b968df3c53b6c018a09))
* **config.ts:** return environment variables for backward compatibility ([eb86244](https://github.com/bxr1nG/auth/commit/eb86244fc28f0fce2ea45b2e6229981ff9217563)), closes [#2](https://github.com/bxr1nG/auth/issues/2)
* **proxy:** add check login middleware ([91dfe07](https://github.com/bxr1nG/auth/commit/91dfe07a35052fdcd10f3d997fdbb927101402b1))
* **proxy:** add strategy pattern for rights ([c6b7292](https://github.com/bxr1nG/auth/commit/c6b729238bd3c5743bda1fdd7266d4967767bcd5))
* **proxy:** change types names (remove I at the beginning) ([13c019c](https://github.com/bxr1nG/auth/commit/13c019cc10ce3abdf043b14404b5b12a01402337))
* **proxy:** create logs params parser ([6466209](https://github.com/bxr1nG/auth/commit/646620994b9948f5256fd3611b89c21e4bcdb87e))
* **proxy:** split management routes to files ([4346b76](https://github.com/bxr1nG/auth/commit/4346b764fd1344a26a3740ee9245223380fd6405))
* **proxy:** use config variable instead of __dirname ([b136318](https://github.com/bxr1nG/auth/commit/b1363187bbc1e27c1eb7e0819fe762f57c77536a))
* **strategies/rights:** add usage of generics to StrategyFactory ([574f5f8](https://github.com/bxr1nG/auth/commit/574f5f8fffb8a5119d881f32cea656ce0d8599ba))
* **ui:** add lazy load of routes ([8863560](https://github.com/bxr1nG/auth/commit/8863560834662e5565e50daafb54089f2ed5c653))

### [1.1.9](https://github.com/bxr1nG/auth/compare/v1.1.8...v1.1.9) (2023-02-01)


### Features

* add usage of config YAML file ([bc3c71f](https://github.com/bxr1nG/auth/commit/bc3c71fddc7a90b6422635edc28c324329279e29))
* **proxy:** use extra fields from config ([1d25526](https://github.com/bxr1nG/auth/commit/1d255262adbd0636a8a25398b203c05be9682295))
* **ui:** get extra fields from server and use them instead of hardcoded extra fields ([34acc47](https://github.com/bxr1nG/auth/commit/34acc47a282daa89fac7477745b8eb1f39d38981))


### Bug Fixes

* add responsibility to extra fields ([e51d7af](https://github.com/bxr1nG/auth/commit/e51d7af33983b75c72f35d66461fb481fef4a1ae))
* **changelog.md:** fix bug with updating CHANGELOG.md file ([6cac05b](https://github.com/bxr1nG/auth/commit/6cac05b8e9af425f65338b7b461fd82ee3fc7670))
* create library that unifies access to variables from npm scripts ([91b1508](https://github.com/bxr1nG/auth/commit/91b1508f042454102c0bb3cf14f8e14aba75362f))
* **dockerhub.md:** update DOCKERHUB.md file ([aaf1207](https://github.com/bxr1nG/auth/commit/aaf12077a8f5e1f23b47bb8ef24418953b0d7502))
* **infobutton:** add scroll to long strings in info table ([a13f43a](https://github.com/bxr1nG/auth/commit/a13f43ac435391042aa0fe087ddf1a65a44c217a))
* **infobutton:** disable button when path is root and hide columns in table if they are empty ([d918b04](https://github.com/bxr1nG/auth/commit/d918b04fcec9192f14caf771e42bf3ee027a4466))
* **logstable:** refactor and divide сode into components ([d0e0c0c](https://github.com/bxr1nG/auth/commit/d0e0c0c2f4b8e6fc7dcf4156d084d42e49b1267b))
* **management.routes.ts:** remove comment ([137d877](https://github.com/bxr1nG/auth/commit/137d877a924f1e382a488b26757ca0aa63bc4a99))
* **proxy:** remove unnecessary config variables ([e37c123](https://github.com/bxr1nG/auth/commit/e37c1237c47c51eb38a1e22fe9d757bc1ee9cce2))
* remove dotenv packages ([08820df](https://github.com/bxr1nG/auth/commit/08820df7e28f6688c253d6b4c0536cdf9cb53b75))
* **statefield:** change possibly used in config variables names ([2b76c58](https://github.com/bxr1nG/auth/commit/2b76c58779290207590cfe7f456316768ba3d6cb))
* **ui:** add fade animations for modals ([d5785ee](https://github.com/bxr1nG/auth/commit/d5785ee3123c8e4a488abfb7b715c5a6e54b004c))

### [1.1.8](https://github.com/bxr1nG/auth/compare/v1.1.7...v1.1.8) (2023-01-25)


### Features

* add favicon ([b0befd2](https://github.com/bxr1nG/auth/commit/b0befd26ae98cdfd0ab49ab6f04b434a3520d880))
* **logstable:** add search field to Logs table ([d29c5d9](https://github.com/bxr1nG/auth/commit/d29c5d9358b6ed16778e3ae8ae404a2b3b732aa5))


### Bug Fixes

* add name to filter by client menu in Logs table ([4962e95](https://github.com/bxr1nG/auth/commit/4962e952383dad644d722c142f0dd9d53116bd68))
* add server side pagination to Logs table ([3863ab0](https://github.com/bxr1nG/auth/commit/3863ab02e6682be70f4b5f0fa99d0b484f91c296))
* **changelog.md:** fix CHANGELOG.md file ([4e89a23](https://github.com/bxr1nG/auth/commit/4e89a23a0290fc169149cf5d081cc2b9c19a5ba3))
* **historybutton:** add fixed width for table columns ([2e45a0c](https://github.com/bxr1nG/auth/commit/2e45a0ca58a0d65a80ac1f867a5ea037107eb31a))
* **historybutton:** add max height for permissions and roles containers in history table ([0e47128](https://github.com/bxr1nG/auth/commit/0e4712827eb2d3dcfe77e457dfb696fa5840fa46))
* **index.html:** add mobile responsibility ([2aa33c9](https://github.com/bxr1nG/auth/commit/2aa33c96868738537845f0e704b492a395d6a529))
* **infobutton:** add fixed width for table columns ([c8f7a66](https://github.com/bxr1nG/auth/commit/c8f7a664222b9fdbb2b3e797ebdd8a6032ce650f))
* **listener:** remove ports value from dockerhub readme ([97d7bd1](https://github.com/bxr1nG/auth/commit/97d7bd17861db3004bf56ec9f97620e6b29f91bb))
* **loginform:** fix default context bug ([62466f9](https://github.com/bxr1nG/auth/commit/62466f92b24bcbf1396dcdee784123bb5ce618fa))
* **logstable:** add fixed width for table columns ([e2f47fc](https://github.com/bxr1nG/auth/commit/e2f47fcdec08f32ccc51566df5ba712300859a47))
* **logstable:** decode URL string ([934b320](https://github.com/bxr1nG/auth/commit/934b32040a827935c7189b65317a89c6bb618ddd))
* **logstable:** fix client select display condition ([b0e0a8d](https://github.com/bxr1nG/auth/commit/b0e0a8d961e0e0d4cbb5746d737622095094515a))
* **management.routes.ts:** decode URI before filter by search query ([022bcf6](https://github.com/bxr1nG/auth/commit/022bcf6b6771153461aa722154bf15bf43df6c12))
* **ui:** remove domain name from requests ([5ecbcb3](https://github.com/bxr1nG/auth/commit/5ecbcb3e97f94f27ba3604533fc2097155188864))
* use static build of ui in dev mode ([9405989](https://github.com/bxr1nG/auth/commit/94059898c0f3c8f36de8a6453768da29dc48bf8c))

### [1.1.7](https://github.com/bxr1nG/auth/compare/v1.1.6...v1.1.7) (2023-01-25)


### Features

* **listener:** separate listener project to different docker image ([b61cf9a](https://github.com/bxr1nG/auth/commit/b61cf9ad48b4e94b001bd616111258a4a5836e43))
* remove listener project from docker build, add graceful shutdown ([3f3a149](https://github.com/bxr1nG/auth/commit/3f3a149e382ed5308dd44f7f8173d1919c7d496d))


### Bug Fixes

* add default path for Login button ([a4dd7dd](https://github.com/bxr1nG/auth/commit/a4dd7ddc8734bde44d70eb3e8f67b000ef1fc93b))

### [1.1.6](https://github.com/bxr1nG/auth/compare/v1.1.5...v1.1.6) (2023-01-25)


### Features

* **proxy:** add client field to logs ([26814d7](https://github.com/bxr1nG/auth/commit/26814d776cee4a6dde8797ab30777027bdfd1086))
* **ui:** add filter by client to logs table ([9e2b82e](https://github.com/bxr1nG/auth/commit/9e2b82e717f1078a86152dc68df15d37be4944cb))


### Bug Fixes

* add redirect to requested path while not authorized ([fd18c91](https://github.com/bxr1nG/auth/commit/fd18c91b52a68e82b1fb2827abfb1a640b71d1a2))
* **logstable:** fix bug with counting rows in Logs table ([c3f8781](https://github.com/bxr1nG/auth/commit/c3f87819179f46a878897a95dd9b7664ae0269be))
* **logsview:** fix bug with logs page and table height, add pagination ([81eba1c](https://github.com/bxr1nG/auth/commit/81eba1c41e333497b01105071fd08ee0bc69bf32))
* **proxy:** fix session middleware and dockerhub.md file ([a4054de](https://github.com/bxr1nG/auth/commit/a4054dead67284785499c4a4bf96832914405dba))

### [1.1.5](https://github.com/bxr1nG/auth/compare/v1.1.4...v1.1.5) (2023-01-25)


### Features

* **proxy:** add browser session scoped mode for login rights ([cc87997](https://github.com/bxr1nG/auth/commit/cc87997295b5f1a9f9025aabcf657e4b8c166b68))

### [1.1.4](https://github.com/bxr1nG/auth/compare/v1.1.3...v1.1.4) (2023-01-25)


### Features

* add URL parser and modal for logs table ([74d3ffb](https://github.com/bxr1nG/auth/commit/74d3ffb5911dbc09271f455838c4d01c52a1d178))

### [1.1.3](https://github.com/bxr1nG/auth/compare/v1.1.2...v1.1.3) (2023-01-25)


### Bug Fixes

* **historybutton:** change history modal styles ([e504d62](https://github.com/bxr1nG/auth/commit/e504d62668f7f8dd48338f331916f3f05b693676))
* **loginform:** add validation of semicolons in permissions field ([1c263bd](https://github.com/bxr1nG/auth/commit/1c263bdc9316cfc48e8bdc686f69ae0b4898d6fd))
* **loginform:** fix input in permissions field ([5ba5574](https://github.com/bxr1nG/auth/commit/5ba5574983b15956eaaab7e087a313ca31c62573))
* **loginform:** fix state 'out of range' warning when using values from history ([8247cda](https://github.com/bxr1nG/auth/commit/8247cdab75b52934fee6d8e0fb60b61bfd182bdd))
* **logstable:** change logs table styles, add copy and open buttons ([041b6d5](https://github.com/bxr1nG/auth/commit/041b6d5e3100f48917947730e5019dc74bbc8e2c))

### [1.1.2](https://github.com/bxr1nG/auth/compare/v1.1.1...v1.1.2) (2023-01-25)


### Features

* **loginform:** save rarely used fields in localStorage ([a794181](https://github.com/bxr1nG/auth/commit/a79418147613238815aa030a09a2495a64793c18))

### [1.1.1](https://github.com/bxr1nG/auth/compare/v1.1.0...v1.1.1) (2023-01-25)


### Bug Fixes

* change number fields type to string ([d8a48dd](https://github.com/bxr1nG/auth/commit/d8a48dd285eaec025e3315717cdfafab9b64ee6f))
* **cookiescleaner:** fix cookie cleanup ([d4e5b46](https://github.com/bxr1nG/auth/commit/d4e5b46fa0ac5c24f87a3107702640c7380af1f9))
* **loginform:** change IAMUserID field width ([574f656](https://github.com/bxr1nG/auth/commit/574f6563c662a04c76af87fb81207d074357ed69))
* **loginform:** change styles for state menu and history button line ([763a006](https://github.com/bxr1nG/auth/commit/763a006e067660f5415c813a6c609931eba2c359))
* **loginform:** create an accordion and move fields after divider into it ([ed803bf](https://github.com/bxr1nG/auth/commit/ed803bfd1246a0ad258a8784d82b7a54cc059422))
* **loginform:** replace IAMUserID field ([60825a0](https://github.com/bxr1nG/auth/commit/60825a042b7d5b6722f28d4a47e1a32aafcc4b9f))
* **management:** fix bug with redirect to login page on development mode ([0cc1f8d](https://github.com/bxr1nG/auth/commit/0cc1f8daf1a2ca286139b99381bc859933a935df))
* **permissionsfield:** disable spellcheck on permissions field ([fc8d96c](https://github.com/bxr1nG/auth/commit/fc8d96cfbed07fe8161bb82eaa282d91a460153f))
* **proxy:** change onstart console logs ([c3f5a02](https://github.com/bxr1nG/auth/commit/c3f5a023de781843e50c0fc9384e881bdbd7fc75))
* **statefield:** add default first name for values from testusers.ini file ([241775c](https://github.com/bxr1nG/auth/commit/241775c22ee1a4f173ada7cbd78928259794952f))
* **statefield:** remove Password1 value from roles in state menu ([b4de94c](https://github.com/bxr1nG/auth/commit/b4de94c586dc767b8302eb6d15f923cb575c686f))

## [1.1.0](https://github.com/bxr1nG/auth/compare/v1.0.3...v1.1.0) (2023-01-25)

### [1.0.3](https://github.com/bxr1nG/auth/compare/v1.0.2...v1.0.3) (2023-01-25)


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
