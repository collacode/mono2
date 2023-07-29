# berry

## 1. 설치

### 1-1. 스크립트 실행

```bash
nvm use 16
yarn
yarn dlx @yarnpkg/sdks vscode
yarn f msw init public # msw 설치
```

### 1-2. VSCode 실행

Select TypeScript Version > Use Workspace Version (5.1.6)

### 1-3. VSCode 확장 설치

- ESLint
- HeadWind
- ZipFS

## 2. 실행 (사용 방법)

`yarn {패키지alias} {script}`을 prefix로 명령을 실행할 수 있다. 직접 폴더로 들어가서 `yarn {script}`를 실행해도 된다.
공통적으로 `lint` script를 갖고 있다.
`test` script는 API SPEC을 제외한 패키지들이 모두 갖고 있다.

### 2-1. API 서버

- alias: `a` (e.g. `yarn a start`)
- 개발 서버를 실행하려면 `start`
- HMR을 적용하려면 `start:dev`
- 빌드하려면 `build`
- 테스트하려면 `test`

주의: 서버 시작 전에 `API SPEC`을 직접 빌드해야 한다.

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

각 패키지의 `.prettierrc.cjs`에서 override 가능하지만 `Reload Window`가 필요합니다 (이유 알 수 없음).

### 3-2. ESLint 설정

ESLint는 패키지 root의 공통 설정에 각 workspace의 설정을 합치고 덮어쓰는 방식입니다. 개별 workspace에서 필요한 plugin/config는 개별 workspace에서 설치해야 합니다. 공통 plugin/config는 패키지 root에 설치하면 됩니다.

### 3-3. Lint-staged 회피 방법

환경 변수에 BYPASS_LINT_STAGED=true로 설정
