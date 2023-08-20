# Yarn PnP 모노레포 보일러플레이트

Yarn PnP Workspace 상에서 Next.js + Nest.js + Components + Api Specification로 패키지를 구성한 보일러플레이트입니다.

구성 내역

- ESLint, Prettier
- TypeScript
- msw
- Storybook
- Vitest, React-testing-library

## 1. 프로젝트 설치 방법

> 주의: `msw`의 의존성 문제로 인해 Node.js v16(`16.20.1`)을 사용해야 합니다.

### 1-1. 설치 및 설치 스크립트 실행

Yarn PnP를 사용해 대부분의 의존성은 install이 필요 없습니다.

다만 일부 의존성은 PnP 상에서 실행될 수 없거나 `postinstall` 스크립트가 있어, `yarn (install)`을 실행해야 합니다.

```bash
nvm use 16 # Node 16 사용
yarn # 일부 의존성의 postinstall 실행
yarn dlx @yarnpkg/sdks vscode 
yarn f msw init public # msw 설정
yarn f playwright install # playwright 브라우저 설치
yarn f playwright install-deps # playwright 브라우저 실행에 필요한 의존성 설치
```

위 스크립트를 모두 실행한 이후 `Reload Window`를 해주세요. Prettier, ESLint가 프로젝트 설정을 인식하는데 필요합니다.

### 1-1-1. `yarn sdks vscode`가 하는 일에 대하여

1. `.yarn/sdks/` 폴더에 `eslint`, `prettier`, `typescript` 폴더를 만들고 바이너리를 패치하는 js를 생성합니다.

2. `.vscode/settings.json`를 만들고 아래의 속성을 추가해 (1)에서 생성한 js를 각 플러그인과 TypeScript에서 사용하도록 설정합니다.

```json
"eslint.nodePath": ".yarn/sdks",
"prettier.prettierPath": ".yarn/sdks/prettier/index.js",
"typescript.tsdk": ".yarn/sdks/typescript/lib",
```

`sdks` 폴더 아래의 js 파일은 아래와 유사한 내용을 포함합니다. 정확히 무슨 일을 하는 코드인지는 잘 모르겠지만 해당 js를 거쳐서 실행해야 Yarn PnP 환경에서도 ESLint, Prettier 플러그인과 TypeScript가 정상 동작하는 걸로 공식 문서에서 안내하고 있습니다.

```js
#!/usr/bin/env node

const {existsSync} = require(`fs`);
const {createRequire} = require(`module`);
const {resolve} = require(`path`);

const relPnpApiPath = "../../../../.pnp.cjs";

const absPnpApiPath = resolve(__dirname, relPnpApiPath);
const absRequire = createRequire(absPnpApiPath);

if (existsSync(absPnpApiPath)) {
  if (!process.versions.pnp) {
    // Setup the environment to be able to require eslint/bin/eslint.js
    require(absPnpApiPath).setup();
  }
}

// Defer to the real eslint/bin/eslint.js your application uses
module.exports = absRequire(`eslint/bin/eslint.js`);
```

출처

- <https://yarnpkg.com/getting-started/editor-sdks>
- <https://yarnpkg.com/sdks/cli/default>

### 1-2. VSCode 설정

#### 1-2-1. VSCode의 TypeScript 버전 설정

Type 정의를 불러오지 못하는 오류가 있을 수 있습니다.

이 때는 Clone한 Workspace에서 Yarn PnP에서 사용하는 TypeScript의 바이너리를 쓰도록 지정해야 합니다. 해당 버전을 쓰도록 수동으로 VSCode를 설정해야 합니다.

패키지 내의 아무 `.ts` 파일을 연 후 Ctrl + P를 눌러 `Select TypeScript Version > Use Workspace Version (5.1.6)`를 실행해주세요.

#### 1-2-2. VSCode 확장 플러그인 설치

아래 플러그인들은 프로젝트에서 사용되므로 꼭 설치해주세요.

- ESLint
  - js 계열의 파일의 lint, format에 필요합니다.
- Prettier
  - js 이외의 파일의 format에 필요합니다.
- HeadWind
  - Tailwind classname의 정렬에 필요합니다.
- ZipFS
  - Yarn PnP로 설치한 의존성에 대해 `정의로 이동하기`와 같은 VSCode 기능을 사용할 때 필요합니다.

## 2. 각 패키지 별 script 실행 방법

이 프로젝트는 Yarn Workspace 기능을 사용해 4개의 하위 패키지로 구성되어 있습니다.

각 패키지의 script를 실행하기 위해서 매번 해당 폴더로 진입할 수도 있지만, `yarn workspace {패키지명} {script}`로 프로젝트 루트 폴더에서 패키지를 지정해 script를 실행할 수도 있습니다.

이 프로젝트에서는 프로젝트 루트의 `script`에 alias를 미리 등록해서 `yarn {패키지alias} {script}`로 더 편하게 명령을 실행할 수 있습니다.

- e.g. `yarn a lint` <=> `yarn workspace @collacode/api lint` 입니다.
- p.s. `@collacode/api`는 해당 패키지의 이름입니다. 패키지의 이름은 각 패키지의 `package.json`의 `name` 필드에서 지정할 수 있습니다.

### 2-1. API 서버의 script 소개

- alias: `a` (e.g. `yarn a start`)
- 개발 서버를 실행하려면 `start`
- HMR을 적용하려면 `start:dev`
- 빌드하려면 `build`
- 테스트하려면 `test`

주의: 서버 시작 전에 `API SPEC`을 직접 빌드해야 합니다.

### 2-2. API SPEC의 script 소개

- alias: `as` (e.g. `yarn as dev`)
- watch 모드로 트랜스파일링하려면 `dev`
- 한 번만 트랜스파일링하려면 `build`

### 2-3. Components의 script 소개

- alias: `c` (e.g. `yarn c dev`)
- 개발 서버를 실행하려면 `dev`
- 빌드하려면 `build`
- 테스트하려면 `test`
- 스토리북을 키려면 `storybook`

### 2-3. frontend의 script 소개

- alias: `f` (e.g. `yarn f dev`)
- 개발 서버를 실행하려면 `dev`
- 빌드하려면 `build`
- 테스트하려면 `test`

## 3. 주의 사항

### 3-1. Prettier 설정 수정 시

각 패키지의 `.prettierrc.cjs`에서 설정 덮어쓰기가 가능하지만 `Reload Window`가 필요할 수 있습니다.

### 3-2. ESLint 설정 수정 시

ESLint는 패키지 root의 공통 설정에 각 workspace의 설정을 합치고 덮어쓰는 방식입니다.

개별 workspace에서 필요한 plugin/config는 개별 workspace에서 설치해야 합니다.

공통 plugin/config는 패키지 root에 설치하면 됩니다.

### 3-3. Lint-staged 생략이 필요 시

환경 변수에 BYPASS_LINT_STAGED=true로 설정 후 commit하면 회피할 수 있습니다.
