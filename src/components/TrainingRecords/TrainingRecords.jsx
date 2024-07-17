import React, { Component } from "react";

import "./training-records.css";

import { TrainingRecordsForm } from "../TrainingRecordsForm";
import { TrainingRecordsTable } from "../TrainingRecordsTable";

export class TrainingRecords extends Component {
  render() {
    return (
      <div>
        <TrainingRecordsForm />
        <TrainingRecordsTable />
      </div>
    );
  }
}
