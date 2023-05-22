import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Seeker } from "./tables/seeker/seeker-entity";
import { Company } from "./tables/company/company.entity";
import { HeadHunter } from "./tables/headhunter/head-hunter.entity";
import { Job } from "./tables/job/job.entity";
import { JobDescription } from "./tables/job/job-description.entity";
import { JobStatus } from "./tables/job/job-status";
import { JobType } from "./tables/job/job-type.entity";
import { PayPeriod } from "./tables/job/pay-period.entity";
import { PositionLevel } from "./tables/job/position-level.entity";
import { Application } from "./tables/job/application/application.entity";
import { ApplicationStatus } from "./tables/job/application/application-status";
import { Document } from "./tables/seeker/document/document.entity";
import { DocumentType } from "./tables/seeker/document/type.entity";
import { JobHistory } from "./tables/seeker/job-history.entity";
import { Profile } from "./tables/seeker/profile.entity";
import { Resume } from "./tables/seeker/resume.entity";
import { Field } from "./tables/skill/field.entity";
import { Skill } from "./tables/skill/skill.entity";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT!),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [
    Company,
    Seeker,
    HeadHunter,
    Job,
    JobDescription,
    JobStatus,
    JobType,
    PayPeriod,
    PositionLevel,
    Application,
    ApplicationStatus,
    Document,
    DocumentType,
    JobHistory,
    Profile,
    Resume,
    Field,
    Skill,
  ], //TODO
  subscribers: [],
  migrations: [],
});
