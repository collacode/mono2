# API

## Prisma 주의사항

- `schema.prisma`는 `generator.client.output` 설정이 필요하다.
- 삭제할 경우 직접 output 설정 구문을 추가해줘야 한다.
- GitHub Issue 참고: <https://github.com/prisma/prisma/issues/8765#issuecomment-1086611596>
- 다만 이렇게 되면 import 정렬이 보기 좋지 않아서 tsconfig paths로 설정해두었다.
