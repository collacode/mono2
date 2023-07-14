# berry

## 설치

### 스크립트 실행

```bash
nvm use 16
yarn
yarn dlx @yarnpkg/sdks vscode
```

### VSCode 실행

Select TypeScript Version > Use Workspace Version (5.1.6)

## VSCode 확장 설치

- ESLint
- HeadWind
- ZipFS

## 안내 사항

### Prettier 설정

각 패키지의 `.prettierrc.cjs`에서 override 가능하지만 `Reload Window`가 필요합니다 (이유 알 수 없음).

### ESLint 설정

ESLint는 패키지 root의 공통 설정에 각 workspace의 설정을 합치고 덮어쓰는 방식입니다. 개별 workspace에서 필요한 plugin/config는 개별 workspace에서 설치해야 합니다. 공통 plugin/config는 패키지 root에 설치하면 됩니다.
