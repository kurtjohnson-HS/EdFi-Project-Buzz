/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class OdsSurveyItem {
    surveyidentifier?: string;
    surveytitle?: string;
}

export class AnswersByStudent {
    surveykey?: number;
    surveyquestionkey?: string;
    question?: string;
    studentschoolkey?: string;
    answer?: string;
}

export class Attendance {
    studentschoolkey?: string;
    reportedaspresentatschool?: number;
    reportedasabsentfromschool?: number;
    reportedaspresentathomeroom?: number;
    reportedasabsentfromhomeroom?: number;
    reportedasispresentinallsections?: number;
    reportedasabsentfromanysection?: number;
}

export class CanLoadSurverysFromUI {
    allowed?: boolean;
}

export class ContactPerson {
    uniquekey?: string;
    contactpersonkey?: string;
    studentkey?: string;
    contactfirstname?: string;
    contactlastname?: string;
    relationshiptostudent?: string;
    contactaddress?: string;
    phonenumber?: string;
    primaryemailaddress?: string;
    isprimarycontact?: boolean;
    preferredcontactmethod?: string;
    besttimetocontact?: string;
    contactnotes?: string;
}

export class Demographics {
    demographicskey?: number;
    shortdescription?: string;
    demographicstypekey?: number;
}

export class DoesOdsContainsSurveyModel {
    contains?: boolean;
}

export class JobStatus {
    jobstatuskey?: number;
    description?: string;
}

export class LoadSurveyFromOdsResponse {
    totalCount?: number;
    totalCountLoaded?: number;
    totalCountFailed?: number;
    listFailedInsert?: string[];
}

export abstract class IMutation {
    abstract addstudentnote(staffkey: number, studentschoolkey: string, note: string): StudentNote | Promise<StudentNote>;

    abstract deletestudentnote(staffkey: number, studentnotekey: number): StudentNote | Promise<StudentNote>;

    abstract uploadsurvey(staffkey: string, title: string, content: string, surveykey?: number): SurveyStatus | Promise<SurveyStatus>;

    abstract deletesurvey(staffkey: string, surveykey: number): Survey | Promise<Survey>;

    abstract loadsurveyfromods(staffkey: string, surveylist?: OdsSurveyItem[]): LoadSurveyFromOdsResponse | Promise<LoadSurveyFromOdsResponse>;
}

export class OdsSurvey {
    namespace?: string;
    surveyidentifier?: string;
    educationorganizationid?: number;
    surveytitle?: string;
    sessionname?: string;
    schoolyear?: number;
    schoolid?: number;
    surveycategorydescriptorid?: number;
    numberadministered?: number;
    discriminator?: string;
    id?: string;
}

export abstract class IQuery {
    abstract staffbyemail(): Staff | Promise<Staff>;

    abstract staffbyid(staffkey: string): Staff | Promise<Staff>;

    abstract sectionsbystaff(staffkey: string): Section[] | Promise<Section[]>;

    abstract sectionbystaff(staffkey: string, sectionkey?: string): Section | Promise<Section>;

    abstract studentbystaff(staffkey: string, studentschoolkey: string): StudentSchool | Promise<StudentSchool>;

    abstract studentsbystaff(staffkey: string): StudentSchool[] | Promise<StudentSchool[]>;

    abstract surveysummary(staffkey: string, sectionkey?: string, title?: string, surveykey?: number): SurveySummary[] | Promise<SurveySummary[]>;

    abstract surveystatus(staffkey: string, jobkey?: string): SurveyStatus[] | Promise<SurveyStatus[]>;

    abstract odssurveys(): OdsSurvey[] | Promise<OdsSurvey[]>;

    abstract odssurveybyid(surveyidentifier: string): OdsSurvey | Promise<OdsSurvey>;

    abstract canLoadSurverysFromUI(): CanLoadSurverysFromUI | Promise<CanLoadSurverysFromUI>;

    abstract doesOdsContainsSurveyModel(): DoesOdsContainsSurveyModel | Promise<DoesOdsContainsSurveyModel>;

    abstract attendancebystudentschool(studentschoolkey: string): Attendance | Promise<Attendance>;

    abstract assessmentsbystudentschool(studentschoolkey: string): StudentAssessment[] | Promise<StudentAssessment[]>;

    abstract studentcharacteristicsbystudentschool(studentschoolkey: string): Demographics[] | Promise<Demographics[]>;

    abstract studentprogramsbystudentschool(studentschoolkey: string): Demographics[] | Promise<Demographics[]>;
}

export class School {
    schoolkey?: string;
    schoolname?: string;
    schooltype?: string;
    schooladdress?: string;
    schoolcity?: string;
    schoolcounty?: string;
    schoolstate?: string;
    localeducationagencyname?: string;
    localeducationagencykey?: number;
    stateeducationagencyname?: string;
    stateeducationagencykey?: number;
    educationservicecentername?: string;
    educationservicecenterkey?: number;
}

export class Section {
    sectionkey?: string;
    schoolkey?: string;
    localcoursecode?: string;
    sessionname?: string;
    sectionidentifier?: string;
    schoolyear?: number;
    student?: StudentSchool;
    students?: StudentSchool[];
}

export class Staff {
    staffkey?: number;
    personaltitleprefix?: string;
    firstname?: string;
    middlename?: string;
    lastsurname?: string;
    staffuniqueid?: string;
    electronicmailaddress?: string;
    isadminsurveyloader?: boolean;
    isteachersurveyloader?: boolean;
    section?: Section;
    sections?: Section[];
}

export class StaffInformation {
    staffkey?: number;
    personaltitleprefix?: string;
    firstname?: string;
    middlename?: string;
    lastsurname?: string;
    staffuniqueid?: string;
    electronicmailaddress?: string;
}

export class StudentAssessment {
    studentassessmentkey?: string;
    studentschoolkey?: string;
    assessmenttitle?: string;
    assessmentidentifier?: string;
    datetaken?: Date;
    score?: string;
}

export class StudentNote {
    studentnotekey?: number;
    note?: string;
    studentschoolkey?: string;
    staffkey?: number;
    dateadded?: string;
}

export class StudentSchool {
    studentschoolkey?: string;
    studentkey?: string;
    schoolkey?: string;
    schoolname?: string;
    schoolyear?: string;
    studentfirstname?: string;
    studentmiddlename?: string;
    studentlastname?: string;
    enrollmentdatekey?: string;
    gradelevel?: string;
    limitedenglishproficiency?: string;
    ishispanic?: boolean;
    sex?: string;
    pictureurl?: string;
    contacts?: ContactPerson[];
    siblingscount?: number;
    siblings?: StudentSchool[];
    studentsurveys?: StudentSurvey[];
    notes?: StudentNote[];
    attendance?: Attendance;
    assessments?: StudentAssessment[];
}

export class StudentSection {
    studentsectionkey?: string;
    studentschoolkey?: string;
    studentkey?: string;
    sectionkey?: string;
    localcoursecode?: string;
    subject?: string;
    coursetitle?: string;
    teachername?: string;
    studentsectionstartdatekey?: string;
    studentsectionenddatekey?: string;
    schoolkey?: string;
    schoolyear?: string;
}

export class StudentSurvey {
    studentsurveykey?: string;
    surveykey?: number;
    studentschoolkey?: string;
    date?: string;
    survey?: Survey;
    answers?: AnswersByStudent[];
}

export class Survey {
    surveykey?: number;
    staffkey?: number;
    title?: string;
    deletedat?: string;
    questions?: SurveyQuestion[];
}

export class SurveyQuestion {
    surveyquestionkey?: string;
    surveykey?: number;
    question?: string;
    studentanswer?: SurveySummaryAnswers;
}

export class SurveyStatus {
    surveystatuskey?: number;
    staffkey?: number;
    surveykey?: number;
    jobkey?: string;
    jobstatuskey?: number;
    resultsummary?: string;
    jobstatus?: JobStatus;
}

export class SurveySummary {
    staffkey?: number;
    sectionkey?: string;
    surveykey?: number;
    title?: string;
    studentsanswered?: number;
    numberofquestions?: number;
    totalstudents?: number;
    questions?: SurveySummaryQuestions[];
}

export class SurveySummaryAnswers {
    sectionkey?: string;
    surveykey?: number;
    title?: string;
    surveyquestionkey?: number;
    question?: string;
    studentschoolkey?: string;
    studentname?: string;
    answer?: string;
}

export class SurveySummaryQuestions {
    surveykey?: number;
    title?: string;
    surveyquestionkey?: number;
    question?: string;
    answers?: SurveySummaryAnswers[];
}
