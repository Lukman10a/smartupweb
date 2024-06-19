const ExamInstructions: React.FC = () => {
  const instructions = [
    "It is advisable to take this examination on a Laptop or Desktop computer for best experience.",
    "Ensure you have a stable internet connection.",
    "Ensure you have a standby power during the time of the examination.",
    "For choice questions ensure to click on the answer of your choice before skipping to the next question.",
    "For theory questions, type your answer on the text box provided.",
    "If it is a calculation question you can solve it on a piece of paper and take a snapshot of your solution and upload it on the file input beside the text box for answers.",
    "You don't have to panic, your class teacher is going to find all of your solutions.",
    "When you get to the end, you could preview your answers and change desired ones.",
    "Click on submit when you are done.",
    "Once you submit, you will not be able to save your changes on that exam anymore.",
    "If you encounter any challenge on the course of writing your examination, please contact your class teacher via telephone call.",
  ];

  return (
    <div className="instructions-container">
      <ol className="list-decimal space-y-2 pl-5">
        {instructions.map((instruction, index) => (
          <li key={index} className="text-md text-gray-700">
            {instruction}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ExamInstructions;
