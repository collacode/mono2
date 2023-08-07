# Yarn PnP 모노레포 보일러플레이트

Yarn PnP Workspace 상에서 Next.js + Nest.js + Components + Api Specification로 패키지를 구성한 보일러플레이트입니다.

구성 내역

- ESLint, Prettier
- TypeScript
- msw
- Storybook
- Vitest, React-testing-library

## 1. 설치

`msw`의 의존성 문제로 인해 Node.js v16(`16.20.1`)을 사용해야 합니다.

### 1-1. 스크립트 실행

```bash
nvm use 16 # Node 16 사용
yarn # 의존성 설치
yarn dlx @yarnpkg/sdks vscode # VSCode Plugin에 Yarn PnP의 바이너리 등록
yarn f msw init public # msw 설치
```

### 1-2. VSCode 실행

Clone한 Workspace에서 Yarn PnP에서 사용하는 TypeScript의 바이너리를 쓰도록 지정해야 합니다.

`Select TypeScript Version > Use Workspace Version (5.1.6)`

### 1-3. VSCode 확장 설치

- ESLint
- Prettier
- HeadWind
  - Tailwind classname의 정렬에 필요합니다.
- ZipFS
  - Yarn PnP로 설치한 의존성에 대해 `정의로 이동하기`와 같은 VSCode 기능을 사용할 때 필요합니다.

## 2. 실행 (사용 방법)

`yarn {패키지alias} {script}`을 prefix로 명령을 실행할 수 있습니다.

- e.g. `yarn a lint` <=> `yarn workspace @collacode/api lint` 입니다.

직접 폴더로 들어가서 `yarn {script}`를 실행해도 됩니다.

모든 패키지는 공통적으로 `lint` script를 갖고 있습니다.

`test` script는 API SPEC을 제외한 패키지들이 모두 갖고 있습니다.

### 2-1. API 서버

- alias: `a` (e.g. `yarn a start`)
- 개발 서버를 실행하려면 `start`
- HMR을 적용하려면 `start:dev`
- 빌드하려면 `build`
- 테스트하려면 `test`

주의: 서버 시작 전에 `API SPEC`을 직접 빌드해야 합니다.

### 2-2. API SPEC

- alias: `as` (e.g. `yarn as dev`)
- watch 모드로 트랜스파일링하려면 `dev`
- 한 번만 트랜스파일링하려면 `build`

### 2-3. Components

- alias: `c` (e.g. `yarn c dev`)
- 개발 서버를 실행하려면 `dev`
- 빌드하려면 `build`
- 테스트하려면 `test`
- 스토리북을 키려면 `storybook`

### 2-3. frontend (Next.js 서버)

- alias: `f` (e.g. `yarn f dev`)
- 개발 서버를 실행하려면 `dev`
- 빌드하려면 `build`
- 테스트하려면 `test`

## 3. 안내 사항

### 3-1. Prettier 설정

각 패키지의 `.prettierrc.cjs`에서 설정 덮어쓰기가 가능하지만 `Reload Window`가 필요합니다.

### 3-2. ESLint 설정

ESLint는 패키지 root의 공통 설정에 각 workspace의 설정을 합치고 덮어쓰는 방식입니다.

개별 workspace에서 필요한 plugin/config는 개별 workspace에서 설치해야 합니다.

공통 plugin/config는 패키지 root에 설치하면 됩니다.

### 3-3. Lint-staged 회피 방법

환경 변수에 BYPASS_LINT_STAGED=true로 설정 후 commit하면 회피할 수 있습니다.
