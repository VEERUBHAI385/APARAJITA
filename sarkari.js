document.addEventListener("DOMContentLoaded", () => {
    const resultList = document.getElementById("resultList");
  
    // Simulated data
    const resultsData = [
      { id: 1, examName: "Civil Services Prelims", resultDate: "2023-09-01" },
      { id: 2, examName: "Bank PO Exam", resultDate: "2023-09-10" },
      // Add more data here
    ];
  
    // Populate the result list
    resultsData.forEach(result => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${result.examName}</strong> - Result Date: ${result.resultDate}`;
      li.addEventListener("click", () => {
        alert(`Clicked on ${result.examName} result!`);
        // You can add more detailed functionality here, such as showing the full result details.
      });
      resultList.appendChild(li);
    });
  });
  