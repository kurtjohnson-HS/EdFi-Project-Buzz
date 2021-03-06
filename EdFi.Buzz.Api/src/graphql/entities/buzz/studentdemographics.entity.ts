// SPDX-License-Identifier: Apache-2.0
// Licensed to the Ed-Fi Alliance under one or more agreements.
// The Ed-Fi Alliance licenses this file to you under the Apache License, Version 2.0.
// See the LICENSE and NOTICES files in the project root for more information.

import { Entity, PrimaryColumn } from 'typeorm';
import { config } from 'dotenv';

config({ path: `${__dirname}/../../../../.env` });
@Entity({ schema: 'buzz', name: 'studentdemographics', synchronize: false })
export default class StudentDemographicsEntity {
  @PrimaryColumn() demographicskey: number;

  @PrimaryColumn() studentschoolkey: string;
}
