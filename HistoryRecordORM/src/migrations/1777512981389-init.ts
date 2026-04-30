import {MigrationInterface, QueryRunner} from 'typeorm';

export class Init1777512981389 implements MigrationInterface {
  name = 'Init1777512981389'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "source_group"
                             (
                                 "id"          SERIAL            NOT NULL,
                                 "createdAt"   TIMESTAMP         NOT NULL,
                                 "updatedAt"   TIMESTAMP         NOT NULL,
                                 "label"       character varying NOT NULL,
                                 "description" character varying NOT NULL,
                                 CONSTRAINT "PK_0c76899d0fadb126a8bbbf68491" PRIMARY KEY ("id")
                             )`);
    await queryRunner.query(`CREATE TYPE "public"."source_type_enum" AS ENUM('book', 'article', 'video', 'website', 'picture', 'audio')`);
    await queryRunner.query(`CREATE TABLE "source"
                             (
                                 "id"          SERIAL                      NOT NULL,
                                 "createdAt"   TIMESTAMP                   NOT NULL,
                                 "updatedAt"   TIMESTAMP                   NOT NULL,
                                 "reliability" double precision            NOT NULL,
                                 "name"        character varying           NOT NULL,
                                 "type"        "public"."source_type_enum" NOT NULL,
                                 CONSTRAINT "CHK_6d0a307c8c6f739af3d440842c" CHECK ("reliability" >= 0 AND "reliability" <= 100),
                                 CONSTRAINT "PK_018c433f8264b58c86363eaadde" PRIMARY KEY ("id")
                             )`);
    await queryRunner.query(`CREATE TYPE "public"."archiver_type_enum" AS ENUM('AI', 'Human')`);
    await queryRunner.query(`CREATE TABLE "archiver"
                             (
                                 "id"          SERIAL                        NOT NULL,
                                 "createdAt"   TIMESTAMP                     NOT NULL,
                                 "updatedAt"   TIMESTAMP                     NOT NULL,
                                 "reliability" double precision              NOT NULL,
                                 "name"        character varying             NOT NULL,
                                 "type"        "public"."archiver_type_enum" NOT NULL,
                                 CONSTRAINT "CHK_86d9cf989e2e8148cfc4a1cdf3" CHECK ("reliability" >= 0 AND "reliability" <= 100),
                                 CONSTRAINT "PK_d7a9093cc12b7b91dbd3d2e12eb" PRIMARY KEY ("id")
                             )`);
    await queryRunner.query(`CREATE TABLE "series"
                             (
                                 "id"          SERIAL            NOT NULL,
                                 "createdAt"   TIMESTAMP         NOT NULL,
                                 "updatedAt"   TIMESTAMP         NOT NULL,
                                 "label"       character varying NOT NULL,
                                 "description" character varying NOT NULL,
                                 CONSTRAINT "PK_e725676647382eb54540d7128ba" PRIMARY KEY ("id")
                             )`);
    await queryRunner.query(`CREATE TYPE "public"."astron_group_type_enum" AS ENUM('', 'GALAXY', 'SINGLETON')`);
    await queryRunner.query(`CREATE TABLE "astron_group"
                             (
                                 "id"          SERIAL                            NOT NULL,
                                 "createdAt"   TIMESTAMP                         NOT NULL,
                                 "updatedAt"   TIMESTAMP                         NOT NULL,
                                 "label"       character varying                 NOT NULL,
                                 "description" character varying                 NOT NULL,
                                 "type"        "public"."astron_group_type_enum" NOT NULL,
                                 CONSTRAINT "PK_ddc549dbaffd067d32382d70249" PRIMARY KEY ("id")
                             )`);
    await queryRunner.query(`CREATE TYPE "public"."astron_type_enum" AS ENUM('Astron', 'Star', 'Planet')`);
    await queryRunner.query(`CREATE TABLE "astron"
                             (
                                 "id"         SERIAL            NOT NULL,
                                 "createdAt"  TIMESTAMP         NOT NULL,
                                 "updatedAt"  TIMESTAMP         NOT NULL,
                                 "name"       character varying NOT NULL,
                                 "type"       "public"."astron_type_enum",
                                 "distanceLy" double precision  NOT NULL,
                                 "observedAt" TIMESTAMP         NOT NULL,
                                 CONSTRAINT "PK_c6bb5b353e96fd8e36fa879dec6" PRIMARY KEY ("id")
                             )`);
    await queryRunner.query(`CREATE TABLE "location_reliability"
                             (
                                 "id"          SERIAL           NOT NULL,
                                 "createdAt"   TIMESTAMP        NOT NULL,
                                 "updatedAt"   TIMESTAMP        NOT NULL,
                                 "reliability" double precision NOT NULL,
                                 "latitude"    integer          NOT NULL,
                                 "longitude"   integer          NOT NULL,
                                 "sceneId"     integer,
                                 "astronId"    integer,
                                 CONSTRAINT "REL_473c576e042f280b82da737f86" UNIQUE ("astronId"),
                                 CONSTRAINT "CHK_2c6b17b664f2f6571941e314e1" CHECK ("reliability" >= 0 AND "reliability" <= 100),
                                 CONSTRAINT "CHK_8c99e3d897c6fe98cb9d6ddc6f" CHECK ("longitude" >= -180 AND "longitude" <= 180),
                                 CONSTRAINT "CHK_4ad765cf58990b182474f71a73" CHECK ("latitude" >= -90 AND "latitude" <= 90),
                                 CONSTRAINT "PK_8496a53c9b4cdaaa908f5703fc0" PRIMARY KEY ("id")
                             )`);
    await queryRunner.query(`CREATE TABLE "scene"
                             (
                                 "id"            SERIAL            NOT NULL,
                                 "createdAt"     TIMESTAMP         NOT NULL,
                                 "updatedAt"     TIMESTAMP         NOT NULL,
                                 "reliability"   double precision  NOT NULL,
                                 "time"          TIMESTAMP         NOT NULL,
                                 "startPosition" json              NOT NULL,
                                 "endPosition"   json              NOT NULL,
                                 "summery"       character varying NOT NULL,
                                 "sourceId"      integer,
                                 "archiverId"    integer,
                                 CONSTRAINT "REL_57d7ed58bbb1e13aae8e1bd18c" UNIQUE ("archiverId"),
                                 CONSTRAINT "CHK_cc1b7ae5e7d94c6ddf8bede5a1" CHECK ("reliability" >= 0 AND "reliability" <= 100),
                                 CONSTRAINT "PK_680b182e0d3bd68553f944295f4" PRIMARY KEY ("id")
                             )`);
    await queryRunner.query(`CREATE TYPE "public"."cast_group_type_enum" AS ENUM('', 'SAME_PERSON', 'ROOTS', 'SINGLETON')`);
    await queryRunner.query(`CREATE TABLE "cast_group"
                             (
                                 "id"          SERIAL                          NOT NULL,
                                 "createdAt"   TIMESTAMP                       NOT NULL,
                                 "updatedAt"   TIMESTAMP                       NOT NULL,
                                 "label"       character varying               NOT NULL,
                                 "description" character varying               NOT NULL,
                                 "type"        "public"."cast_group_type_enum" NOT NULL,
                                 CONSTRAINT "PK_076240a42b5248cd5c98200257a" PRIMARY KEY ("id")
                             )`);
    await queryRunner.query(`CREATE TYPE "public"."cast_type_enum" AS ENUM('', 'Human', 'Country', 'Town', 'City', 'NaturalDisaster', 'House', 'Animal', 'Plant')`);
    await queryRunner.query(`CREATE TABLE "cast"
                             (
                                 "id"          SERIAL                    NOT NULL,
                                 "createdAt"   TIMESTAMP                 NOT NULL,
                                 "updatedAt"   TIMESTAMP                 NOT NULL,
                                 "reliability" double precision          NOT NULL,
                                 "name"        character varying         NOT NULL,
                                 "type"        "public"."cast_type_enum" NOT NULL,
                                 CONSTRAINT "CHK_fff312440455294551356b40a5" CHECK ("reliability" >= 0 AND "reliability" <= 100),
                                 CONSTRAINT "PK_c27b51350cb072d995c340b86b4" PRIMARY KEY ("id")
                             )`);
    await queryRunner.query(`CREATE TABLE "source_group_sources_source"
                             (
                                 "sourceGroupId" integer NOT NULL,
                                 "sourceId"      integer NOT NULL,
                                 CONSTRAINT "PK_899aa91dcc018d8c4fcbe79772a" PRIMARY KEY ("sourceGroupId", "sourceId")
                             )`);
    await queryRunner.query(`CREATE INDEX "IDX_e7d378b0fe536067b18b3b33f1" ON "source_group_sources_source" ("sourceGroupId") `);
    await queryRunner.query(`CREATE INDEX "IDX_79c0ac69dbaa0cad910622788f" ON "source_group_sources_source" ("sourceId") `);
    await queryRunner.query(`CREATE TABLE "series_scenes_scene"
                             (
                                 "seriesId" integer NOT NULL,
                                 "sceneId"  integer NOT NULL,
                                 CONSTRAINT "PK_41499ae2a4aec0fd047114cca46" PRIMARY KEY ("seriesId", "sceneId")
                             )`);
    await queryRunner.query(`CREATE INDEX "IDX_8fe2199305e6ca24a0995bfc7a" ON "series_scenes_scene" ("seriesId") `);
    await queryRunner.query(`CREATE INDEX "IDX_6ea17d1e4a447d0b6c4b4b31f9" ON "series_scenes_scene" ("sceneId") `);
    await queryRunner.query(`CREATE TABLE "series_series_series"
                             (
                                 "seriesId_1" integer NOT NULL,
                                 "seriesId_2" integer NOT NULL,
                                 CONSTRAINT "PK_b9af203b07657589dfd289830de" PRIMARY KEY ("seriesId_1", "seriesId_2")
                             )`);
    await queryRunner.query(`CREATE INDEX "IDX_a156297e308ba8148bc1a02995" ON "series_series_series" ("seriesId_1") `);
    await queryRunner.query(`CREATE INDEX "IDX_d745914725159b829eb1fe06ef" ON "series_series_series" ("seriesId_2") `);
    await queryRunner.query(`CREATE TABLE "astron_group_astrons_astron"
                             (
                                 "astronGroupId" integer NOT NULL,
                                 "astronId"      integer NOT NULL,
                                 CONSTRAINT "PK_3a03d9c9f172493cf821cb53124" PRIMARY KEY ("astronGroupId", "astronId")
                             )`);
    await queryRunner.query(`CREATE INDEX "IDX_8883d9aa77c149af171bfde430" ON "astron_group_astrons_astron" ("astronGroupId") `);
    await queryRunner.query(`CREATE INDEX "IDX_014f91a7e45b81d888b8b12a14" ON "astron_group_astrons_astron" ("astronId") `);
    await queryRunner.query(`CREATE TABLE "cast_group_casts_cast"
                             (
                                 "castGroupId" integer NOT NULL,
                                 "castId"      integer NOT NULL,
                                 CONSTRAINT "PK_24d814a48180324e2ecd93ef34c" PRIMARY KEY ("castGroupId", "castId")
                             )`);
    await queryRunner.query(`CREATE INDEX "IDX_00a19a12e7cc1ee856c06d9f8b" ON "cast_group_casts_cast" ("castGroupId") `);
    await queryRunner.query(`CREATE INDEX "IDX_e8cd0e2a82aa49ddad14fe9fe3" ON "cast_group_casts_cast" ("castId") `);
    await queryRunner.query(`ALTER TABLE "location_reliability"
        ADD CONSTRAINT "FK_8045efbe1eb9fc1b2c98b73511e" FOREIGN KEY ("sceneId") REFERENCES "scene" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "location_reliability"
        ADD CONSTRAINT "FK_473c576e042f280b82da737f86b" FOREIGN KEY ("astronId") REFERENCES "astron" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "scene"
        ADD CONSTRAINT "FK_0b8d3c7ff7f75ae1821c624cc3a" FOREIGN KEY ("sourceId") REFERENCES "source" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "scene"
        ADD CONSTRAINT "FK_57d7ed58bbb1e13aae8e1bd18ce" FOREIGN KEY ("archiverId") REFERENCES "archiver" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "source_group_sources_source"
        ADD CONSTRAINT "FK_e7d378b0fe536067b18b3b33f19" FOREIGN KEY ("sourceGroupId") REFERENCES "source_group" ("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    await queryRunner.query(`ALTER TABLE "source_group_sources_source"
        ADD CONSTRAINT "FK_79c0ac69dbaa0cad910622788fc" FOREIGN KEY ("sourceId") REFERENCES "source" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "series_scenes_scene"
        ADD CONSTRAINT "FK_8fe2199305e6ca24a0995bfc7a7" FOREIGN KEY ("seriesId") REFERENCES "series" ("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    await queryRunner.query(`ALTER TABLE "series_scenes_scene"
        ADD CONSTRAINT "FK_6ea17d1e4a447d0b6c4b4b31f98" FOREIGN KEY ("sceneId") REFERENCES "scene" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "series_series_series"
        ADD CONSTRAINT "FK_a156297e308ba8148bc1a029950" FOREIGN KEY ("seriesId_1") REFERENCES "series" ("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    await queryRunner.query(`ALTER TABLE "series_series_series"
        ADD CONSTRAINT "FK_d745914725159b829eb1fe06ef4" FOREIGN KEY ("seriesId_2") REFERENCES "series" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "astron_group_astrons_astron"
        ADD CONSTRAINT "FK_8883d9aa77c149af171bfde4300" FOREIGN KEY ("astronGroupId") REFERENCES "astron_group" ("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    await queryRunner.query(`ALTER TABLE "astron_group_astrons_astron"
        ADD CONSTRAINT "FK_014f91a7e45b81d888b8b12a147" FOREIGN KEY ("astronId") REFERENCES "astron" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "cast_group_casts_cast"
        ADD CONSTRAINT "FK_00a19a12e7cc1ee856c06d9f8b4" FOREIGN KEY ("castGroupId") REFERENCES "cast_group" ("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    await queryRunner.query(`ALTER TABLE "cast_group_casts_cast"
        ADD CONSTRAINT "FK_e8cd0e2a82aa49ddad14fe9fe33" FOREIGN KEY ("castId") REFERENCES "cast" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "cast_group_casts_cast" DROP CONSTRAINT "FK_e8cd0e2a82aa49ddad14fe9fe33"`);
    await queryRunner.query(`ALTER TABLE "cast_group_casts_cast" DROP CONSTRAINT "FK_00a19a12e7cc1ee856c06d9f8b4"`);
    await queryRunner.query(`ALTER TABLE "astron_group_astrons_astron" DROP CONSTRAINT "FK_014f91a7e45b81d888b8b12a147"`);
    await queryRunner.query(`ALTER TABLE "astron_group_astrons_astron" DROP CONSTRAINT "FK_8883d9aa77c149af171bfde4300"`);
    await queryRunner.query(`ALTER TABLE "series_series_series" DROP CONSTRAINT "FK_d745914725159b829eb1fe06ef4"`);
    await queryRunner.query(`ALTER TABLE "series_series_series" DROP CONSTRAINT "FK_a156297e308ba8148bc1a029950"`);
    await queryRunner.query(`ALTER TABLE "series_scenes_scene" DROP CONSTRAINT "FK_6ea17d1e4a447d0b6c4b4b31f98"`);
    await queryRunner.query(`ALTER TABLE "series_scenes_scene" DROP CONSTRAINT "FK_8fe2199305e6ca24a0995bfc7a7"`);
    await queryRunner.query(`ALTER TABLE "source_group_sources_source" DROP CONSTRAINT "FK_79c0ac69dbaa0cad910622788fc"`);
    await queryRunner.query(`ALTER TABLE "source_group_sources_source" DROP CONSTRAINT "FK_e7d378b0fe536067b18b3b33f19"`);
    await queryRunner.query(`ALTER TABLE "scene" DROP CONSTRAINT "FK_57d7ed58bbb1e13aae8e1bd18ce"`);
    await queryRunner.query(`ALTER TABLE "scene" DROP CONSTRAINT "FK_0b8d3c7ff7f75ae1821c624cc3a"`);
    await queryRunner.query(`ALTER TABLE "location_reliability" DROP CONSTRAINT "FK_473c576e042f280b82da737f86b"`);
    await queryRunner.query(`ALTER TABLE "location_reliability" DROP CONSTRAINT "FK_8045efbe1eb9fc1b2c98b73511e"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_e8cd0e2a82aa49ddad14fe9fe3"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_00a19a12e7cc1ee856c06d9f8b"`);
    await queryRunner.query(`DROP TABLE "cast_group_casts_cast"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_014f91a7e45b81d888b8b12a14"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_8883d9aa77c149af171bfde430"`);
    await queryRunner.query(`DROP TABLE "astron_group_astrons_astron"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_d745914725159b829eb1fe06ef"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_a156297e308ba8148bc1a02995"`);
    await queryRunner.query(`DROP TABLE "series_series_series"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_6ea17d1e4a447d0b6c4b4b31f9"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_8fe2199305e6ca24a0995bfc7a"`);
    await queryRunner.query(`DROP TABLE "series_scenes_scene"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_79c0ac69dbaa0cad910622788f"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_e7d378b0fe536067b18b3b33f1"`);
    await queryRunner.query(`DROP TABLE "source_group_sources_source"`);
    await queryRunner.query(`DROP TABLE "cast"`);
    await queryRunner.query(`DROP TYPE "public"."cast_type_enum"`);
    await queryRunner.query(`DROP TABLE "cast_group"`);
    await queryRunner.query(`DROP TYPE "public"."cast_group_type_enum"`);
    await queryRunner.query(`DROP TABLE "scene"`);
    await queryRunner.query(`DROP TABLE "location_reliability"`);
    await queryRunner.query(`DROP TABLE "astron"`);
    await queryRunner.query(`DROP TYPE "public"."astron_type_enum"`);
    await queryRunner.query(`DROP TABLE "astron_group"`);
    await queryRunner.query(`DROP TYPE "public"."astron_group_type_enum"`);
    await queryRunner.query(`DROP TABLE "series"`);
    await queryRunner.query(`DROP TABLE "archiver"`);
    await queryRunner.query(`DROP TYPE "public"."archiver_type_enum"`);
    await queryRunner.query(`DROP TABLE "source"`);
    await queryRunner.query(`DROP TYPE "public"."source_type_enum"`);
    await queryRunner.query(`DROP TABLE "source_group"`);
  }

}
