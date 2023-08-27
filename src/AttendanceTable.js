import React, { useState } from 'react';
import StudentRow from './StudentRow';
import AddStudentForm from './AddStudentForm';
import './AttendanceTable.css';

const columnNames = [
  'Student Name', // Placeholder for student names column
  'Week 1',
  'Week 2',
  'Week 3',
  'Week 4',
  'Week 5',
  'Week 6',
  'Week 7',
  'Week 8',
  'Week 9',
  'Week 10',
  'Week 11',
  'Week 12',
  'Missed Days'
];

function AttendanceTable() {
  const initialAttendance = {}; // Initialize attendance data here
  const [attendance, setAttendance] = useState(initialAttendance);

  const updateAttendance = (studentName, newAttendance) => {
    setAttendance((prevAttendance) => ({
      ...prevAttendance,
      [studentName]: newAttendance,
    }));
  };

  const addStudent = (studentName) => {
    if (!attendance[studentName]) {
      setAttendance((prevAttendance) => ({
        ...prevAttendance,
        [studentName]: Array(12).fill(false),
      }));
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {columnNames.map((columnName, index) => (
              <th key={index} className={index === 13 ? 'missed-col' : ''}>
                {columnName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(attendance).map((studentName) => (
            <StudentRow
              key={studentName}
              studentName={studentName}
              attendance={attendance[studentName]}
              updateAttendance={updateAttendance}
            />
          ))}
        </tbody>
      </table>
      <AddStudentForm addStudent={addStudent} />
    </div>
  );
}

export default AttendanceTable;
