export interface Scale {
  id: number;
  letterGrade: string;
  percentGrade: number;
  regular: string;
  honors: string;
  ap: string;
}

export const scales = [
  {
    id: 0,
    letterGrade: "A+",
    percentGrade: 97, 
    regular: 4,
    honors: 4.5,
    ap: 5.0
  },
  {
    id: 1,
    letterGrade: "A",  
    percentGrade: 93, 
    regular: 4,
    honors: 4.5,
    ap: 5
  },
  {
    id: 2,
    letterGrade: "A-", 
    percentGrade: 90,
    regular: 3.7,
    honors: 4.2,
    ap: 4.7
  },
  {
    id: 3,
    letterGrade: "B+",
    percentGrade: 87,
    regular: 3.3,
    honors: 3.8,
    ap: 4.3
  },
  {
    id: 4,
    letterGrade: "B",
    percentGrade: 83,
    regular: 3,
    honors: 3.5,
    ap: 4.0
  },
  {
    id: 5,
    letterGrade: "B-",
    percentGrade: 80,
    regular: 2.7,
    honors: 3.2,
    ap: 3.7,
  },
  {
    id: 6,
    letterGrade: "C+",
    percentGrade: 77,
    regular: 2.3,
    honors: 2.8,
    ap: 3.3
  },
  {
    id: 7,
    letterGrade: "C",
    percentGrade: 73,
    regular: 2,
    honors: 2.5,
    ap: 3.0
  },
  {
    id: 8,
    letterGrade: "C-",
    percentGrade: 70,
    regular: 1.7,
    honors: 2.3,
    ap: 2.7
  },
  {
    id: 9,
    letterGrade: "D+",
    percentGrade: 67,
    regular: 1.3,
    honors: 1.8,
    ap: 2.3
  },
  {
    id: 10,
    letterGrade: "D",
    percentGrade: 63,
    regular: 1.0,
    honors: 1.5,
    ap: 2
  },
  {
    id: 11,
    letterGrade: "D-",
    percentGrade: 60,
    regular: 0.7,
    honors: 1.2,
    ap: 1.7
  },
  {
    id: 12,
    letterGrade: "F",
    percentGrade: 0,
    regular: 0,
    honors: 0.5,
    ap: 1
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/