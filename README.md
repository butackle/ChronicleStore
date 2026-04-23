# システム構造

```mermaid
flowchart LR
  P((People)) --> CR[[Curatorium]]
  A((Archivist)) --> AE[[ArchiveEngine]]
  AE --> OR[(Omnirecord)]
  OR --> CR
```



