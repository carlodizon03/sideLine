import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Seeker } from "./seeker/seeker-entity";
import { Company } from "./company/company.entity";
import { HeadHunter } from "./headhunter/head-hunter.entity";
import { Job } from "./job/job.entity";
import { JobDescription } from "./job/job-description.entity";
import { JobStatus } from "./job/job-status";
import { JobType } from "./job/job-type.entity";
import { PayPeriod } from "./job/pay-period.entity";
import { PositionLevel } from "./job/position-level.entity";
import { Application } from "./job/application/application.entity";
import { ApplicationStatus } from "./job/application/application-status";
import { Document } from "./seeker/document/document.entity";
import { DocumentType } from "./seeker/document/type.entity";
import { JobHistory } from "./seeker/job-history.entity";
import { profile } from "console";
import { Profile } from "./seeker/profile.entity";
import { Resume } from "./seeker/resume.entity";
import { Field } from "./skill/field.entity";
import { Skill } from "./skill/skill.entity";

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
