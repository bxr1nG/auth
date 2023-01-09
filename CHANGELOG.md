# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.1.3](https://github.com/bxr1nG/auth/compare/v1.1.1...v1.1.3) (2023-01-09)


### Features

* **loginform:** save rarely used fields in localStorage ([7828678](https://github.com/bxr1nG/auth/commit/78286789d2d4e5011edcea931b37e040ed837522))


### Bug Fixes

* **historybutton:** change history modal styles ([10c9a33](https://github.com/bxr1nG/auth/commit/10c9a33d257a75499f582b9f91665b8cbaa30351))
* **loginform:** add validation of semicolons in permissions field ([8d56f8a](https://github.com/bxr1nG/auth/commit/8d56f8aa844461312f73d1b30d7978fff0fbb858))
* **loginform:** fix input in permissions field ([b1f6bff](https://github.com/bxr1nG/auth/commit/b1f6bff0a6a46dc8b00dd39f339583146ade254d))
* **loginform:** fix state 'out of range' warning when using values from history ([cd97745](https://github.com/bxr1nG/auth/commit/cd97745afd7227d9e07c416ba3cb0ade45ec4226))
* **logstable:** change logs table styles, add copy and open buttons ([7f667ec](https://github.com/bxr1nG/auth/commit/7f667ec384cafd3873fbc3c24aee88f58b97a547))

### 1.1.2 (2023-01-05)


### ⚠ BREAKING CHANGES

* **proxy:** Now there is no need to fill out all the fields of Login form
* **ui:** Now there is no need to fill out all the fields of Login form
* **loginform:** State select menu no longer shows values saved in localStorage

### Features

* **loginform:** add History modal ([b987543](https://github.com/bxr1nG/auth/commit/b98754302169e2f3d56b5b2fe64795b162deb358))
* **loginform:** remove history values from state select menu ([98d888a](https://github.com/bxr1nG/auth/commit/98d888a53c61f5004a71af22e5d5fd8f4d0feb59))
* **loginform:** save rarely used fields in localStorage ([7828678](https://github.com/bxr1nG/auth/commit/78286789d2d4e5011edcea931b37e040ed837522))
* **proxy:** make fields optional ([ee65824](https://github.com/bxr1nG/auth/commit/ee65824ad9cabbdbe416442626285cce917b81c1))
* **ui:** make fields optional ([74c0dbe](https://github.com/bxr1nG/auth/commit/74c0dbe2ff6de181655f0223b08b1a1aeaa23a9c))


### Bug Fixes

* change number fields type to string ([b05f5cc](https://github.com/bxr1nG/auth/commit/b05f5ccffe8d2c2270dda28543081baa91bdce76))
* **cookiescleaner:** fix cookie cleanup ([df04c93](https://github.com/bxr1nG/auth/commit/df04c93199a819977d1f8503352e6ec937d2a1fd))
* **loginform:** add permissions sorting when displaying ([1f56748](https://github.com/bxr1nG/auth/commit/1f567482872e7cb77ac60866e9d61578acac9214))
* **loginform:** change IAMUserID field width ([b62c661](https://github.com/bxr1nG/auth/commit/b62c6610ea2213b465dde9c8b0bf3803d22f8c7d))
* **loginform:** change order of fields ([500e11c](https://github.com/bxr1nG/auth/commit/500e11c3bea1f66ab7b69ea938383f0486d19b30))
* **loginform:** change styles for state menu and history button line ([50b660d](https://github.com/bxr1nG/auth/commit/50b660d39a245997f131cc4e12af3d3a35b2bd77))
* **loginform:** create an accordion and move fields after divider into it ([73a0b6b](https://github.com/bxr1nG/auth/commit/73a0b6b73ed06d835ac381a96b73b60a997ecbc8))
* **loginform:** move reverse formatting of permissions from onChange to onSubmit function ([d81530b](https://github.com/bxr1nG/auth/commit/d81530b51e4e88ec7d2c3f3714f674fb89165e09))
* **loginform:** optimize process of inserting a new value into history ([b8b1051](https://github.com/bxr1nG/auth/commit/b8b10511444813ccc3ce14436f628be9f02d0d1a))
* **loginform:** remove Logout button from Login form ([408b1cb](https://github.com/bxr1nG/auth/commit/408b1cbadb68e3b2dac92b06238e1eee26e19ac1))
* **loginform:** replace IAMUserID field ([204281c](https://github.com/bxr1nG/auth/commit/204281cf34732aa484e1e5f7e2bcc592691e49d2))
* **management:** fix bug with redirect to login page on development mode ([051c403](https://github.com/bxr1nG/auth/commit/051c4032e724c1292c117cb7559df58dac89750c))
* **permissionsfield:** disable spellcheck on permissions field ([ffd16e4](https://github.com/bxr1nG/auth/commit/ffd16e4edba227bf17833f72138be2412d964e1e))
* **proxy:** change onstart console logs ([a303e1f](https://github.com/bxr1nG/auth/commit/a303e1ff95fa95bc0e0fb97c131228d385c08004))
* **statefield:** add default first name for values from testusers.ini file ([47f69c2](https://github.com/bxr1nG/auth/commit/47f69c2e21e4634ef5af72fadbb54e4910dff0e0))
* **statefield:** change text format in select menu ([acbcba2](https://github.com/bxr1nG/auth/commit/acbcba26b8231e4ecc4b9390df7f8ee0134d8159))
* **statefield:** remove Password1 value from roles in state menu ([0e349a8](https://github.com/bxr1nG/auth/commit/0e349a83f1335cb5252f64a989af8465ee31611b))

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
* **loginform:** move reverse formatting of permissions from onChange to onSubmit function ([d81530b](https://github.com/bxr1nG/auth/commit/d81530b51e4e88ec7d2c3f3714f674fb89165e09))
* **loginform:** optimize process of inserting a new value into history ([b8b1051](https://github.com/bxr1nG/auth/commit/b8b10511444813ccc3ce14436f628be9f02d0d1a))
* **loginform:** remove Logout button from Login form ([408b1cb](https://github.com/bxr1nG/auth/commit/408b1cbadb68e3b2dac92b06238e1eee26e19ac1))
* **statefield:** change text format in select menu ([acbcba2](https://github.com/bxr1nG/auth/commit/acbcba26b8231e4ecc4b9390df7f8ee0134d8159))

## [2.0.0](https://github.com/bxr1nG/auth/compare/v1.0.2...v2.0.0) (2023-01-03)


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
