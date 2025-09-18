// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const Comp5Find = () => {
//   const [students, setStudents] = useState([]);
//   const [search, setSearch] = useState("");
//   const [selectedId, setSelectedId] = useState();

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((resp) => {
//         setStudents(resp.data);
//       })
//       .catch((error) => {
//         console.log("find error", error);
//       });
//   }, []);
//   // filter students by search
//   const filteredStudents = students.filter((s) =>
//     s.id.toString().includes(search.toLowerCase())
//   );

//   // find single student by selectedId
//   const student = students.find((s) => s.id === selectedId);

//   return (
//     <>
//       <h1>Find Method Example</h1>

//       {/*search by ID */}
//       <input
//         className="input-id"
//         type="text"
//         placeholder="Search by ID"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {/* Enter ID to Find */}

//       <input
//         className="input-id"
//         type="number"
//         placeholder="Enter ID to Find"
//         value={selectedId || ""}
//         onChange={(e) => setSelectedId(Number(e.target.value))}
//       />

//       {student ? (
//         <div>
//           <h1>Student with selectedId = {selectedId}</h1>
//           <ul key={student.id}>
//             <li>
//               <strong>ID:</strong> {student.id}
//             </li>
//             <li>
//               <strong>Name:</strong> {student.name}
//             </li>
//             <li>
//               <strong>Email:</strong> {student.email}
//             </li>
//             <li>
//               <strong>Address:</strong> {student.address.street}
//             </li>
//             <li>
//               <strong>City:</strong> {student.address.city}
//             </li>
//             <li>
//               <strong>Phone:</strong> {student.phone}
//             </li>
//           </ul>
//         </div>
//       ) : (
//         <p>Loading student...</p>
//       )}

//       <h2>Filtered Students</h2>
//       {filteredStudents.length > 0 ? (
//         filteredStudents.map((std) => (
//           <ul key={std.id}>
//             <li>
//               <strong>ID:</strong> {std.id}
//             </li>
//             <li>
//               <strong>Name:</strong> {std.name}
//             </li>
//             <li>
//               <strong>Email:</strong> {std.email}
//             </li>
//             <li>
//               <strong>Address:</strong> {std.address.street}
//             </li>
//             <li>
//               <strong>City:</strong> {std.address.city}
//             </li>
//             <li>
//               <strong>Phone:</strong> {std.phone}
//             </li>
//           </ul>
//         ))
//       ) : (
//         <p>No Students found</p>
//       )}
//     </>
//   );
// };

// export default Comp5Find

import React, { useState } from "react";

const Comp5Find = () => {
  // sample questions
  const questions = [
    {
      question: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      answer: "JavaScript",
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Central Style Sheets",
        "Cascading Style Sheets",
        "Cascading Simple Sheets",
        "Cars SUVs Sailboats",
      ],
      answer: "Cascading Style Sheets",
    },
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Trainer Marking Language",
        "Hyper Text Markup Language",
        "Hyper Text Marketing Language",
        "Hyper Tool Multi Language",
      ],
      answer: "Hyper Text Markup Language",
    },
    {
      question: "What year was JavaScript launched?",
      options: ["1996", "1995", "1994", "none of the above"],
      answer: "1995",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // handle answer click
  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  // restart quiz
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div style={styles.container}>
      <h1>Quiz App</h1>
      {showResult ? (
        <div>
          <h2>
            You scored {score} out of {questions.length}
          </h2>
          <button onClick={restartQuiz} style={styles.button}>
            Restart Quiz
          </button>
        </div>
      ) : (
        <div>
          <h2>
            Question {currentQuestion + 1}/{questions.length}
          </h2>
          <p>{questions[currentQuestion].question}</p>
          <div>
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                style={styles.button}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// simple inline styles
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  button: {
    display: "block",
    margin: "10px auto",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Comp5Find;
