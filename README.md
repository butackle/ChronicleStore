# System Architecture

```mermaid
flowchart LR
  AE[[ArchiveEngine]]
  AE --> HR[(HistoryRecord)]

  subgraph CS1[CurationSystem]
    CEDB1[(CurationDB)]
    CE1[[CurationEngine]]
  end
  HR --> CS1

  subgraph CS2[CurationSystem]
    CEDB2[(CurationDB)]
    CE2[[CurationEngine]]
  end
  HR --> CS2

  subgraph CS3[CurationSystem]
    CEDB3[(CurationDB)]
    CE3[[CurationEngine]]
  end
  HR --> CS3  
```

## HistoryRecord

A database designed to record all historical events.

### Basic Data Structure

#### scene

A unit that records when, where, who, and what happened.

- 22 BBY: Anakin married Padmé on the planet Naboo
- 4 ABY: Luke defeated Darth Vader in Emperor Palpatine’s throne room
- 0 BBY: The Death Star destroyed the planet Alderaan in the Alderaan system
- 32 BBY: A sandstorm occurred on Tatooine
- 33 BBY: Children who learned about the Battle of Naboo were deeply shocked

#### series

A collection of scenes.
A series can contain other series, and a single scene may belong to multiple series.

```mermaid
flowchart TB
    AB["Massive eruption on Mustafar"]
  subgraph SW["Star Wars"]
    SW1[Young Palpatine becomes obsessed with the Force]
    subgraph ANAKIN["Anakin Arc"]

      subgraph PM["The Phantom Menace"]
        PM1["Sandstorm on Tatooine"]
        PM2["Podrace victory"]
        PM3["Recommended to the Jedi Order"]

        subgraph NABOO["Battle of Naboo"]
          N1["Meets Padmé"]
          N2["Leads Jedi in battle"]
        end
      end

      subgraph CW["Clone Wars"]
        CW1["Clone Wars begin"]
        CW2["Jedi lead the army in battle"]
      end

    end

    subgraph LUKE["Luke Arc"]

      subgraph NH["A New Hope"]
        NH1["Meets Obi-Wan"]
        NH2["Trained by Yoda"]
      end

      subgraph ROTJ["Return of the Jedi"]
        R1["Death Star rebuilt"]
        R2["Defeats Darth Vader"]
        R3["Palpatine dies"]
      end

    end

  end
```

#### cast

Any entity that causes or participates in events within a scene.
Scenes and series themselves can also act as cast.

- Obi-Wan Kenobi
- Death Star
- Jedi
- Mustafar
- Podrace
- Naboo
- Lightsaber
- Sandstorm
- Tatooine
- The Force
- Clone Wars
- Battle of Naboo

etc.

### Detailed Data Structure

(2026.4.30) Generated from an ORM entity. I’ll check the output later.

```mermaid
erDiagram

  SOURCEGROUP {
    int id PK
    datetime createdAt
    datetime updatedAt
    string label
    string description
  }

  SOURCE {
    int id PK
    datetime createdAt
    datetime updatedAt
    float reliability
    string name
    string type
  }

  ARCHIVER {
    int id PK
    datetime createdAt
    datetime updatedAt
    float reliability
    string name
    string type
  }

  SERIES {
    int id PK
    datetime createdAt
    datetime updatedAt
    string label
    string description
  }

  ASTRONGROUP {
    int id PK
    datetime createdAt
    datetime updatedAt
    string label
    string description
    string type
  }

  ASTRON {
    int id PK
    datetime createdAt
    datetime updatedAt
    string name
    string type
    float distanceLy
    datetime observedAt
  }

  LOCATIONRELIABILITY {
    int id PK
    datetime createdAt
    datetime updatedAt
    float reliability
    int latitude
    int longitude
    int scene
    int astron
  }

  SCENE {
    int id PK
    datetime createdAt
    datetime updatedAt
    float reliability
    datetime time
    json startPosition
    json endPosition
    string summery
    int source
    int archiver
  }

  CASTGROUP {
    int id PK
    datetime createdAt
    datetime updatedAt
    string label
    string description
    string type
  }

  CAST {
    int id PK
    datetime createdAt
    datetime updatedAt
    float reliability
    string name
    string type
  }

  SOURCEGROUP }o--o{ SOURCE : sources
  SOURCE ||--o{ SCENE : scenes
  SOURCE }o--o{ SOURCEGROUP : sourceGroup
  SERIES }o--o{ SCENE : scenes
  SERIES }o--o{ SERIES : series
  ASTRONGROUP }o--o{ ASTRON : astrons
  ASTRON }o--o{ ASTRONGROUP : astronGroup
  LOCATIONRELIABILITY }o--|| SCENE : scene
  LOCATIONRELIABILITY ||--|| ASTRON : astron
  SCENE ||--o{ LOCATIONRELIABILITY : locationReliabilities
  SCENE ||--o{ SCENE : casts
  SCENE }o--|| SOURCE : source
  SCENE ||--|| ARCHIVER : archiver
  SCENE }o--o{ SERIES : series
  CASTGROUP }o--o{ CAST : casts
  CAST }o--o{ CASTGROUP : castGroup


```

## CurationSystem

An application and database that provide information stored in the HistoryRecord based on specific purposes.
## ArchiveEngine

An application responsible for recording data into the HistoryRecord.




