// SPDX-License-Identifier: Apache-2.0
// Licensed to the Ed-Fi Alliance under one or more agreements.
// The Ed-Fi Alliance licenses this file to you under the Apache License, Version 2.0.
// See the LICENSE and NOTICES files in the project root for more information.

import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'buzz', name: 'studentassessment', synchronize: false })
export default class StudentAssessmentEntity {
  @PrimaryColumn() studentassessmentkey: string;

  @Column() studentschoolkey : string;

  @Column() assessmentidentifier: string;

  @Column() datetaken: number;

  @Column() score: string;

  @Column() assessmenttitle: string;
}
